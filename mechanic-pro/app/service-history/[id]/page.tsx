import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, MapPin, Phone, Printer, Share2, Star } from "lucide-react"
import Link from "next/link"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the service details based on the ID
  const serviceId = params.id

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/service-history" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Servis Detayı</h1>
          <div className="ml-auto flex space-x-2">
            <Button variant="ghost" size="icon">
              <Share2 className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Printer className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        {/* Service Summary */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Periyodik Bakım</h2>
              <span className="text-sm font-medium text-blue-600">#{serviceId}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Tarih</p>
                <p className="text-sm font-medium">15 Aralık 2023</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Tutar</p>
                <p className="text-sm font-medium">₺1,850</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Araç</p>
                <p className="text-sm font-medium">Volkswagen Golf (34 ABC 123)</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Kilometre</p>
                <p className="text-sm font-medium">45,230 km</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium">Mehmet Usta</p>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs ml-1">4.8</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Ara
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Service Details */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium text-gray-900 mb-4">Servis Detayları</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Yapılan İşlemler</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Motor Yağı Değişimi</p>
                      <p className="text-xs text-gray-500">5W-30 Tam Sentetik Motor Yağı (5 lt)</p>
                      <p className="text-xs font-medium mt-1">₺650</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Yağ Filtresi Değişimi</p>
                      <p className="text-xs text-gray-500">Orijinal Volkswagen Yağ Filtresi</p>
                      <p className="text-xs font-medium mt-1">₺180</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Polen Filtresi Değişimi</p>
                      <p className="text-xs text-gray-500">Karbon Filtreli Polen Filtresi</p>
                      <p className="text-xs font-medium mt-1">₺220</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Kış Lastiği Değişimi</p>
                      <p className="text-xs text-gray-500">4 Adet Kış Lastiği Montajı</p>
                      <p className="text-xs font-medium mt-1">₺400</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                      5
                    </span>
                    <div>
                      <p className="font-medium">Antifriz Kontrolü ve Tamamlama</p>
                      <p className="text-xs text-gray-500">G12 Antifriz (1 lt)</p>
                      <p className="text-xs font-medium mt-1">₺150</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-2 mt-0.5">
                      6
                    </span>
                    <div>
                      <p className="font-medium">Akü Testi</p>
                      <p className="text-xs text-gray-500">Akü Performans ve Şarj Testi</p>
                      <p className="text-xs font-medium mt-1">₺50</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium text-gray-700">Teknisyen Notları</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Aracın genel durumu iyi. Motor yağı ve filtreler değiştirildi. Kış lastikleri takıldı ve balans ayarı
                  yapıldı. Antifriz seviyesi tamamlandı. Akü testi yapıldı, akü durumu iyi. Bir sonraki bakım için
                  10.000 km sonra veya 6 ay içinde gelmeniz önerilir.
                </p>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium text-gray-700">Fiyat Detayı</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Parça Tutarı</span>
                    <span>₺1,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>İşçilik</span>
                    <span>₺650</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Toplam</span>
                    <span>₺1,850</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Location */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium text-gray-900 mb-4">Servis Lokasyonu</h3>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Acıbadem Otomotiv</p>
                <p className="text-sm text-gray-600">Acıbadem Mah. Tekin Sok. No:15</p>
                <p className="text-sm text-gray-600">Kadıköy, İstanbul</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Haritada Göster
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex space-x-4">
          <Button variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Faturayı İndir
          </Button>
          <Button className="flex-1">Benzer Servis Planla</Button>
        </div>
      </main>
    </div>
  )
}
