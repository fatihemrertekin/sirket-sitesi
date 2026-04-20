import nodemailer from "nodemailer";

/**
 * E-posta gönderme fonksiyonu
 * .env.local dosyasındaki SMTP ayarları kullanılır
 */
export async function sendEmail({ name, email, phone, message }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const contactEmail = process.env.CONTACT_EMAIL;

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: contactEmail,
    replyTo: email,
    subject: `Yeni İletişim Formu Mesajı: ${name}`,
    text: `
      Ad Soyad: ${name}
      E-posta: ${email}
      Telefon: ${phone}
      
      Mesaj:
      ${message}
    `,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #c5a059; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
        <div style="margin-top: 20px; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <p><strong>Ad Soyad:</strong> <span style="color: #333;">${name}</span></p>
          <p><strong>E-posta:</strong> <a href="mailto:${email}" style="color: #c5a059; text-decoration: none;">${email}</a></p>
          <p><strong>Telefon:</strong> <span style="color: #333;">${phone || "Belirtilmedi"}</span></p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p><strong>Mesaj:</strong></p>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="margin-top: 30px; text-align: center; color: #888; font-size: 12px;">
          <p>Bu e-posta web sitenizdeki iletişim formu aracılığıyla gönderilmiştir.</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email başarıyla gönderildi:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    return { success: false, error: error.message };
  }
}
