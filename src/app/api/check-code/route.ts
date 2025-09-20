import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import hashes from '../../../../codes_hash.json';

// Hash'li doğrulama sistemi - kodlar güvenli şekilde saklanıyor
const VALID_HASHES = hashes.hashes;

// Rate limiting - IP bazlı kısıtlama
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 15 dakika
const RATE_LIMIT_MAX_REQUESTS = 50; // 15 dakikada max 10 istek

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  // Eski kayıtları temizle
  if (rateLimitMap.has(ip)) {
    const requests = rateLimitMap.get(ip).filter((time: number) => time > windowStart);
    rateLimitMap.set(ip, requests);
  }
  
  // Mevcut istekleri al
  const requests = rateLimitMap.get(ip) || [];
  
  // Limit kontrolü
  if (requests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  // Yeni isteği ekle
  requests.push(now);
  rateLimitMap.set(ip, requests);
  
  return true;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting kontrolü
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json({
        isValid: false,
        message: 'Çok fazla istek gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.'
      }, { status: 429 });
    }

    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json({
        isValid: false,
        message: 'Geçerli bir kod giriniz.'
      });
    }

        // Normalize code (sadece trim, büyük/küçük harf korunuyor)
        const normalizedCode = code.trim();

        // Hash doğrulama fonksiyonu (Salt ile güvenlik)
        function verifyCode(input: string): boolean {
          const salt = process.env.HASH_SALT || 'ProGen2025SecretSalt';
          const saltedInput = input + salt;
          const hash = createHash("sha256").update(saltedInput).digest("hex");
          return VALID_HASHES.includes(hash);
        }
        // Kodu hash ile doğrula
        const isValidCode = verifyCode(normalizedCode);

    if (!isValidCode) {
      return NextResponse.json({
        isValid: false,
        message: 'Bu kod sistemimizde kayıtlı değil. Lütfen kodu kontrol edin.'
      });
    }

    return NextResponse.json({
      isValid: true,
      message: 'Ürününüz orijinaldir! Bu kod başarıyla doğrulandı.',
      code: normalizedCode,
      usedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Code check error:', error);
    return NextResponse.json({
      isValid: false,
      message: 'Bir hata oluştu. Lütfen tekrar deneyin.'
    });
  }
}