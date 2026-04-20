"use server";

import { sendEmail } from "@/lib/sendEmail";

export async function contactAction(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // Basit validasyon
  if (!name || !email || !message) {
    return { success: false, error: "Lütfen zorunlu alanları doldurun." };
  }

  try {
    const result = await sendEmail({ name, email, phone, message });
    return result;
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false, error: "Mesaj gönderilirken bir hata oluştu." };
  }
}
