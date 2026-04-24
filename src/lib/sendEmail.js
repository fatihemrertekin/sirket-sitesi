import nodemailer from "nodemailer";

const escapeHtml = (text) => {
  if (!text) return "";
  return text
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

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

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message);

  const mailOptions = {
    from: `"${name ? name.replace(/"/g, '') : 'Bilinmeyen'}" <${process.env.SMTP_USER}>`,
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
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #111111; padding: 40px 20px; color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #262626; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header -->
          <div style="background-color: #C5A059; padding: 30px; text-align: center;">
            <h2 style="color: #111111; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Yeni Mesajınız Var</h2>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            <p style="color: #adadad; font-size: 15px; line-height: 1.6; margin-top: 0;">Web sitenizdeki iletişim formundan yeni bir mesaj aldınız. İletişim detayları aşağıdadır:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 30px;">
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #262626;">
                  <strong style="color: #C5A059; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Ad Soyad</strong>
                  <div style="color: #f5f5f5; font-size: 16px; margin-top: 6px;">${safeName}</div>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #262626;">
                  <strong style="color: #C5A059; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">E-posta</strong>
                  <div style="margin-top: 6px;">
                    <a href="mailto:${safeEmail}" style="color: #f5f5f5; text-decoration: none; font-size: 16px;">${safeEmail}</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #262626;">
                  <strong style="color: #C5A059; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</strong>
                  <div style="color: #f5f5f5; font-size: 16px; margin-top: 6px;">
                    <a href="tel:${safePhone}" style="color: #f5f5f5; text-decoration: none;">${safePhone || "Belirtilmedi"}</a>
                  </div>
                </td>
              </tr>
            </table>

            <div style="margin-top: 30px; background-color: #262626; padding: 25px; border-radius: 8px; border-left: 4px solid #C5A059;">
              <strong style="color: #C5A059; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 12px;">Mesaj İçeriği</strong>
              <div style="color: #cccccc; font-size: 15px; line-height: 1.8; white-space: pre-wrap; margin: 0; font-family: inherit;">${safeMessage}</div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #111111; padding: 20px; text-align: center; border-top: 1px solid #262626;">
            <p style="color: #707070; font-size: 13px; margin: 0;">Bu e-posta web siteniz üzerinden otomatik olarak gönderilmiştir. <br>E-postayı yanıtladığınızda doğrudan kullanıcıya ulaşacaktır.</p>
          </div>

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
