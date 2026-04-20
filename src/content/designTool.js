export const designOptions = [
  {
    id: "style",
    label: "Tasarım Stili",
    type: "single",
    items: [
      {
        id: "modern",
        label: "Modern Lüks",
        description: "Koyu mermer, cam detaylar ve geniş açıklıklar.",
        price: 5000,
        image: "/images/design-tool/styles.png"
      },
      {
        id: "minimalist",
        label: "Minimalist Zen",
        description: "Doğal ahşap, soft renkler ve sade çizgiler.",
        price: 3500,
        image: "/images/design-tool/styles.png"
      },
      {
        id: "classic",
        label: "Klasik Sofistike",
        description: "Koyu ahşap paneller ve deri detaylar.",
        price: 6000,
        image: "/images/design-tool/styles.png"
      }
    ]
  },
  {
    id: "rooms",
    label: "Oda Seçimi",
    type: "multiple",
    items: [
      {
        id: "kitchen",
        label: "Mutfak Tasarımı",
        description: "Modern ve fonksiyonel mutfak çözümleri.",
        price: 2500,
        image: "/images/design-tool/rooms.png"
      },
      {
        id: "bedroom",
        label: "Yatak Odası",
        description: "Konforlu ve estetik dinlenme alanları.",
        price: 2000,
        image: "/images/design-tool/rooms.png"
      },
      {
        id: "bathroom",
        label: "Banyo",
        description: "Spa etkili modern banyo tasarımları.",
        price: 1500,
        image: "/images/design-tool/rooms.png"
      },
      {
        id: "office",
        label: "Ev Ofisi",
        description: "Verimli ve şık çalışma ortamları.",
        price: 1800,
        image: "/images/design-tool/rooms.png"
      }
    ]
  },
  {
    id: "extras",
    label: "Ekstra Hizmetler",
    type: "multiple",
    items: [
      {
        id: "landscaping",
        label: "Peyzaj Tasarımı",
        description: "Dış mekan ve bahçe düzenleme.",
        price: 3000
      },
      {
        id: "smart-home",
        label: "Akıllı Ev Sistemleri",
        description: "Entegre teknoloji çözümleri.",
        price: 4500
      },
      {
        id: "3d-modeling",
        label: "3D Görselleştirme",
        description: "Gerçekçi fotorealistik sunumlar.",
        price: 1200
      }
    ]
  }
];
