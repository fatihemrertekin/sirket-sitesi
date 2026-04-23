export const designOptions = [
  {
    id: "structureType",
    label: "Yapı Tipi",
    type: "single",
    items: [
      {
        id: "kamelya",
        label: "Modern Kamelya",
        description: "Minimalist çizgiler ve dayanıklı Sibirya sarıçamı.",
        price: 25000,
        image: "/images/design-tool/kamelya.png"
      },
      {
        id: "kis-bahcesi",
        label: "Kış Bahçesi",
        description: "Isı yalıtımlı camlar ve masif ahşap iskelet.",
        price: 75000,
        image: "/images/design-tool/kis-bahcesi.png"
      },
      {
        id: "bungalow",
        label: "Bungalow Ev",
        description: "Ekolojik yaşam alanı sunan tam donanımlı ahşap ev.",
        price: 450000,
        image: "/images/design-tool/bungalow.png"
      }
    ]
  },
  {
    id: "material",
    label: "Ahşap Türü",
    type: "single",
    items: [
      {
        id: "saricam",
        label: "Sibirya Sarıçamı",
        description: "Dayanıklı ve ekonomik 1. sınıf malzeme.",
        price: 12000,
        image: "/images/design-tool/wood.png"
      },
      {
        id: "iroko",
        label: "Iroko",
        description: "Egzotik, suya ve neme karşı ekstra dayanıklı.",
        price: 15000,
        image: "/images/design-tool/wood.png"
      },
      {
        id: "ayous",
        label: "Ayous (Termowood)",
        description: "Isıl işlem görmüş, boyutsal kararlılığı yüksek.",
        price: 20000,
        image: "/images/design-tool/wood.png"
      },
    ]
  },
  {
    id: "extras",
    label: "Ekstra Özellikler",
    type: "multiple",
    items: [
      {
        id: "kitchenette",
        label: "Mini Mutfak",
        description: "Yapı içerisine entegre masif ahşap mutfak dolabı.",
        price: 12000
      },
      {
        id: "lighting",
        label: "Led Aydınlatma",
        description: "Dekoratif gizli led ve spot aydınlatma sistemleri.",
        price: 3500
      },
      {
        id: "varnish",
        label: "Özel Renk Vernik",
        description: "Güneşe ve neme ekstra dayanıklı renk seçenekleri.",
        price: 2000
      }
    ]
  }
];
