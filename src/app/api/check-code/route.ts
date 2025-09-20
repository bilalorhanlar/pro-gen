import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json({
        isValid: false,
        message: 'Geçerli bir kod giriniz.'
      });
    }

    // Normalize code (uppercase, trim)
    const normalizedCode = code.trim().toUpperCase();

    // JSON dosyasının yolu - gizli konum
    const codesFilePath = path.join(process.cwd(), 'data', 'auth-codes.json');

    // Dosya yoksa hata döndür
    if (!fs.existsSync(codesFilePath)) {
      console.error('Auth codes file not found');
      return NextResponse.json({
        isValid: false,
        message: 'Sistem hatası. Lütfen daha sonra tekrar deneyin.'
      });
    }

    // JSON dosyasını oku
    const codesData = JSON.parse(fs.readFileSync(codesFilePath, 'utf8'));
    
    // Kodu ara - yeni format: sadece string array
    const codeIndex = codesData.codes.findIndex((item: string) => 
      item.toUpperCase() === normalizedCode
    );

    if (codeIndex === -1) {
      return NextResponse.json({
        isValid: false,
        message: 'Bu kod sistemimizde kayıtlı değil. Lütfen kodu kontrol edin.'
      });
    }

    // Kodu kullanılmış olarak işaretle - kaldır
    codesData.codes.splice(codeIndex, 1);

    // Güncellenmiş veriyi dosyaya yaz
    fs.writeFileSync(codesFilePath, JSON.stringify(codesData, null, 2));

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
