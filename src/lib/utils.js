/**
 * Yardımcı fonksiyonlar
 */

/**
 * CSS sınıflarını birleştirmek için yardımcı fonksiyon
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Slug oluşturmak için yardımcı fonksiyon
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}
