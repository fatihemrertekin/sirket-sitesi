/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Modern format desteği: tarayıcı destekliyorsa AVIF/WebP otomatik servis edilir
    formats: ["image/avif", "image/webp"],
    // Sayfa boyunca kullanılan kalite seviyeleri
    qualities: [60, 75, 85, 90],
    // Görsel önbellek TTL (1 hafta)
    minimumCacheTTL: 604800,
  },
};

module.exports = nextConfig;
