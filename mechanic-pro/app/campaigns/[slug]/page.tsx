import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Check, MapPin, Share2, ShoppingBag, Tag } from "lucide-react"
import Link from "next/link"

export default function CampaignDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch the campaign details based on the slug
  const campaignTitle = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/campaigns" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Kampanya Detayı</h1>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Share2 className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        {/* Campaign Image */}
        <div className="h-56 bg-blue-600 rounded-lg mb-6 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag className="w-24 h-24 text-white opacity-20" />
          </div>
          <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            %30 İndirim
          </div>
        </div>

        {/* Campaign Details */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Kış Bakım Paketi</h2>
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>31 Aralık 2023'e kadar geçerli</span>
          </div>

          <p className="text-gray-700 mb-4">
            Kış aylarına özel tam bakım paketi ile aracınızı soğuk hava koşullarına hazırlayın. Bu özel pakette yağ
            değişimi, filtre değişimi, antifriz kontrolü ve daha fazlası yer alıyor.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-medium text-blue-800 mb-2">Kampanya Kapsamı</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Motor yağı ve filtre değişimi</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Antifriz kontrolü ve tamamlama</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Akü testi</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Silecek suyu tamamlama</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Lastik basınç kontrolü</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <span>Genel kış kontrolü</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Normal Fiyat</p>
              <p className="text-lg font-medium line-through text-gray-400">₺1,500</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Kampanyalı Fiyat</p>
              <p className="text-xl font-bold text-blue-600">₺1,050</p>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Tag className="w-4 h-4 mr-1" />
            <span>Volkswagen, Audi, Seat, Skoda araçlar için geçerlidir</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Tüm servis noktalarında geçerlidir</span>
          </div>
        </div>

        {/* Terms and Conditions */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium text-gray-900 mb-2">Kampanya Koşulları</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Kampanya 31 Aralık 2023 tarihine kadar geçerlidir.</p>
              <p>• Belirtilen araç modelleri için geçerlidir.</p>
              <p>• Diğer kampanyalarla birleştirilemez.</p>
              <p>• Stoklar ile sınırlıdır.</p>
              <p>• Şirketimiz kampanya koşullarında değişiklik yapma hakkını saklı tutar.</p>
            </div>
          </CardContent>
        </Card>

        {/* Related Campaigns */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-4">Benzer Kampanyalar</h3>

          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <div className="h-24 bg-green-600 relative"></div>
              <CardContent className="p-3">
                <h4 className="font-medium text-gray-900 text-sm">Motor Yağı Değişimi</h4>
                <p className="text-xs text-gray-500">Filtre hediyeli</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-24 bg-yellow-600 relative"></div>
              <CardContent className="p-3">
                <h4 className="font-medium text-gray-900 text-sm">Akü Kontrolü</h4>
                <p className="text-xs text-gray-500">%15 indirimli değişim</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button variant="outline" className="flex-1">
            Paylaş
          </Button>
          <Button className="flex-1">Randevu Al</Button>
        </div>
      </main>
    </div>
  )
}
