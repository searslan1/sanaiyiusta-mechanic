export interface Mechanic {
  id: string
  name: string
  specialty: string
  rating: number
  reviewCount: number
  location: string
  distance: string
  available: boolean
  description: string
  services: {
    name: string
    price: string
    duration: string
  }[]
  expertise: string[]
  imageUrl?: string
}

export const mechanics: Mechanic[] = [
  {
    id: "mehmet-usta",
    name: "Mehmet Usta",
    specialty: "Motor ve Şanzıman Uzmanı",
    rating: 4.8,
    reviewCount: 124,
    location: "Kadıköy, İstanbul",
    distance: "2.3 km",
    available: true,
    description:
      "20 yıllık tecrübemle özellikle Alman araçları konusunda uzmanlaşmış bir ustayım. Motor, şanzıman ve elektronik aksamlar konusunda detaylı bilgi ve tecrübeye sahibim.",
    services: [
      { name: "Motor Bakımı", price: "₺750 - ₺1,500", duration: "2-4 saat" },
      { name: "Şanzıman Bakımı", price: "₺1,000 - ₺2,500", duration: "3-6 saat" },
      { name: "Elektronik Arıza Tespiti", price: "₺250", duration: "30-60 dakika" },
    ],
    expertise: ["Motor", "Şanzıman", "Elektronik", "Alman Araçlar", "Diagnostik"],
  },
  {
    id: "ali-usta",
    name: "Ali Usta",
    specialty: "Elektrik ve Elektronik Sistemler",
    rating: 4.6,
    reviewCount: 98,
    location: "Ataşehir, İstanbul",
    distance: "3.5 km",
    available: true,
    description:
      "Araç elektroniği ve elektrik sistemleri konusunda 15 yıllık deneyime sahibim. Modern araçların elektronik sorunlarını çözmede uzmanım.",
    services: [
      { name: "Elektrik Sistemi Kontrolü", price: "₺300 - ₺600", duration: "1-2 saat" },
      { name: "ECU Programlama", price: "₺800 - ₺1,200", duration: "1-3 saat" },
      { name: "Akü ve Şarj Sistemi Bakımı", price: "₺200 - ₺500", duration: "1 saat" },
    ],
    expertise: ["Elektrik", "Elektronik", "ECU", "Aydınlatma", "Akü Sistemleri"],
  },
  {
    id: "hasan-usta",
    name: "Hasan Usta",
    specialty: "Fren ve Süspansiyon Sistemleri",
    rating: 4.7,
    reviewCount: 112,
    location: "Üsküdar, İstanbul",
    distance: "4.1 km",
    available: false,
    description:
      "Fren sistemleri ve süspansiyon konusunda uzmanım. Aracınızın yol tutuşunu ve güvenliğini en üst seviyeye çıkarmak için çalışıyorum.",
    services: [
      { name: "Fren Sistemi Bakımı", price: "₺500 - ₺1,200", duration: "1-3 saat" },
      { name: "Süspansiyon Bakımı", price: "₺800 - ₺2,000", duration: "2-5 saat" },
      { name: "Direksiyon Sistemi Kontrolü", price: "₺300 - ₺700", duration: "1-2 saat" },
    ],
    expertise: ["Fren Sistemleri", "Süspansiyon", "Amortisör", "Direksiyon", "Balans"],
  },
  {
    id: "ahmet-usta",
    name: "Ahmet Usta",
    specialty: "Kaporta ve Boya Uzmanı",
    rating: 4.5,
    reviewCount: 76,
    location: "Beşiktaş, İstanbul",
    distance: "5.7 km",
    available: true,
    description:
      "Kaporta ve boya işlerinde 18 yıllık tecrübeye sahibim. Aracınızın görünümünü yenilemek için profesyonel çözümler sunuyorum.",
    services: [
      { name: "Kaporta Onarımı", price: "₺1,000 - ₺5,000", duration: "1-5 gün" },
      { name: "Boya İşlemi", price: "₺2,000 - ₺8,000", duration: "2-7 gün" },
      { name: "Pasta Cila", price: "₺500 - ₺1,500", duration: "3-6 saat" },
    ],
    expertise: ["Kaporta", "Boya", "Pasta Cila", "Dolu Hasarı", "Çizik Giderme"],
  },
  {
    id: "osman-usta",
    name: "Osman Usta",
    specialty: "Genel Bakım ve Onarım",
    rating: 4.4,
    reviewCount: 89,
    location: "Şişli, İstanbul",
    distance: "8.5 km",
    available: true,
    description:
      "Tüm marka ve model araçlar için genel bakım ve onarım hizmetleri sunuyorum. Periyodik bakımdan büyük onarımlara kadar her konuda yardımcı olabilirim.",
    services: [
      { name: "Periyodik Bakım", price: "₺500 - ₺1,500", duration: "2-4 saat" },
      { name: "Yağ Değişimi", price: "₺300 - ₺800", duration: "30-60 dakika" },
      { name: "Genel Kontrol", price: "₺200", duration: "1 saat" },
    ],
    expertise: ["Periyodik Bakım", "Filtre Değişimi", "Yağ Değişimi", "Genel Kontrol", "Arıza Tespiti"],
  },
]

// Function to get mechanics based on problem type or keywords
export function getMechanicsByProblem(problem: string): Mechanic[] {
  const problemLower = problem.toLowerCase()

  // Define problem categories and related keywords
  const problemCategories = {
    motor: ["motor", "yağ", "hararet", "titreşim", "ses", "çalışmıyor", "marş", "enjektör", "yakıt"],
    elektrik: ["elektrik", "elektronik", "akü", "şarj", "far", "lamba", "sigorta", "sensör", "ecu"],
    fren: ["fren", "balata", "disk", "abs", "pedal", "hidrolik", "el freni"],
    süspansiyon: ["süspansiyon", "amortisör", "salıncak", "rot", "direksiyon", "şaft", "rulman"],
    kaporta: ["kaporta", "boya", "çizik", "göçük", "pas", "dolu", "hasar", "tampon"],
  }

  // Determine which category the problem falls into
  let matchedCategory = ""
  for (const [category, keywords] of Object.entries(problemCategories)) {
    if (keywords.some((keyword) => problemLower.includes(keyword))) {
      matchedCategory = category
      break
    }
  }

  // Filter mechanics based on the matched category
  let filteredMechanics: Mechanic[] = []

  switch (matchedCategory) {
    case "motor":
      filteredMechanics = mechanics.filter(
        (m) =>
          m.specialty.toLowerCase().includes("motor") || m.expertise.some((e) => e.toLowerCase().includes("motor")),
      )
      break
    case "elektrik":
      filteredMechanics = mechanics.filter(
        (m) =>
          m.specialty.toLowerCase().includes("elektrik") ||
          m.expertise.some((e) => e.toLowerCase().includes("elektrik") || e.toLowerCase().includes("elektronik")),
      )
      break
    case "fren":
      filteredMechanics = mechanics.filter(
        (m) => m.specialty.toLowerCase().includes("fren") || m.expertise.some((e) => e.toLowerCase().includes("fren")),
      )
      break
    case "süspansiyon":
      filteredMechanics = mechanics.filter(
        (m) =>
          m.specialty.toLowerCase().includes("süspansiyon") ||
          m.expertise.some((e) => e.toLowerCase().includes("süspansiyon") || e.toLowerCase().includes("amortisör")),
      )
      break
    case "kaporta":
      filteredMechanics = mechanics.filter(
        (m) =>
          m.specialty.toLowerCase().includes("kaporta") ||
          m.expertise.some((e) => e.toLowerCase().includes("kaporta") || e.toLowerCase().includes("boya")),
      )
      break
    default:
      // If no specific category is matched, return general mechanics
      filteredMechanics = mechanics.filter((m) => m.specialty.toLowerCase().includes("genel"))
      break
  }

  // If no mechanics match the specific category, return all available mechanics
  if (filteredMechanics.length === 0) {
    filteredMechanics = mechanics
  }

  // Sort by rating and availability
  return filteredMechanics
    .sort((a, b) => {
      // First sort by availability
      if (a.available && !b.available) return -1
      if (!a.available && b.available) return 1
      // Then by rating
      return b.rating - a.rating
    })
    .slice(0, 3) // Return top 3
}
