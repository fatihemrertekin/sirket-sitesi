/**
 * E-posta gönderme fonksiyonu
 * TODO: Nodemailer veya tercih edilen email servisi ile entegre edilecek
 */
export async function sendEmail({ name, email, phone, message }) {
  // .env.local dosyasındaki SMTP ayarları kullanılacak
  const smtpConfig = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  };

  const contactEmail = process.env.CONTACT_EMAIL;

  // TODO: Email gönderme implementasyonu
  console.log("Email gönderiliyor:", { name, email, phone, message });

  return { success: true };
}
