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

    // Normalize code (trim and uppercase)
    const normalizedCode = code.trim().toUpperCase();

    // JSON dosyasının yolu - gizli konum
    const codesFilePath = path.join(process.cwd(), 'data', 'auth-codes.json');

    let codesData;
    
    // Environment variable'dan kodları kontrol et
    const envCodes = process.env.AUTH_CODES;
    if (envCodes) {
      try {
        // JSON formatını dene
        codesData = JSON.parse(envCodes);
        console.log('Using codes from environment variable (JSON format)');
      } catch (error) {
        // JSON değilse virgülle ayrılmış formatı dene
        try {
          const codesArray = envCodes.split(',').map(code => code.trim()).filter(code => code.length > 0);
          codesData = { codes: codesArray };
          console.log('Using codes from environment variable (comma-separated format)');
        } catch (parseError) {
          console.error('Failed to parse AUTH_CODES from environment:', parseError);
          return NextResponse.json({
            isValid: false,
            message: 'Sistem hatası. Lütfen daha sonra tekrar deneyin.'
          });
        }
      }
    } else if (fs.existsSync(codesFilePath)) {
      // Fallback: JSON dosyasını oku
      codesData = JSON.parse(fs.readFileSync(codesFilePath, 'utf8'));
      console.log('Using codes from file');
    } else {
      console.error('No auth codes found in environment or file');
      return NextResponse.json({
        isValid: false,
        message: 'Sistem hatası. Lütfen daha sonra tekrar deneyin.'
      });
    }
    
    // Kodu ara - exact match (uppercase)
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

    // Güncellenmiş veriyi dosyaya yaz (sadece dosya kullanıldıysa)
    if (!envCodes && fs.existsSync(codesFilePath)) {
      fs.writeFileSync(codesFilePath, JSON.stringify(codesData, null, 2));
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
