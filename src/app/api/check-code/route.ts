import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import hashes from '../../../../codes_hash.json';

// Hash'li doğrulama sistemi - kodlar güvenli şekilde saklanıyor
const VALID_HASHES = hashes.hashes;

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json({
        isValid: false,
        message: 'Geçerli bir kod giriniz.'
      });
    }

    // Normalize code (trim and uppercase)
    const normalizedCode = code.trim().toUpperCase();

    // Hash doğrulama fonksiyonu
    function verifyCode(input: string): boolean {
      const hash = createHash("sha256").update(input).digest("hex");
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