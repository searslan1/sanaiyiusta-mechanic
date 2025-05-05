import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Filter, Search, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CampaignsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Kampanyalar</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Kampanya ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtrele
            </Button>

            <Tabs defaultValue="all" className="w-[200px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">Tümü</TabsTrigger>
                <TabsTrigger value="my">Bana Özel</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Featured Campaign */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Öne Çıkan</h3>

          <Card className="overflow-hidden">
            <div className="h-48 bg-blue-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-white opacity-20" />
              </div>
              <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                %30 İndirim
              </div>
            </div>
            <CardContent className="p-4">
              <h4 className="text-xl font-semibold text-gray-900">Kış Bakım Paketi</h4>
              <p className="text-sm text-gray-600 mt-1 mb-2">
                Kış aylarına özel tam bakım paketi. Yağ değişimi, filtre değişimi, antifriz kontrolü ve daha fazlası.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-xs text-gray-500">31 Aralık'a kadar geçerli</span>
                </div>
                <Button>Detaylar</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Campaigns */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tüm Kampanyalar</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CampaignCard
              title="Kış Lastikleri"
              description="Tüm kış lastiklerinde %20 indirim fırsatı"
              discount="20%"
              validUntil="30 Kasım"
              image="winter-tires"
            />

            <CampaignCard
              title="Motor Yağı Değişimi"
              description="Filtre hediyeli motor yağı değişimi"
              discount="Hediyeli"
              validUntil="15 Aralık"
              image="oil-change"
            />

            <CampaignCard
              title="Akü Kontrolü"
              description="Ücretsiz akü kontrolü ve %15 indirimli akü değişimi"
              discount="15%"
              validUntil="31 Aralık"
              image="battery"
            />

            <CampaignCard
              title="Detaylı İç Temizlik"
              description="Araç içi detaylı temizlik ve dezenfeksiyon"
              discount="25%"
              validUntil="20 Aralık"
              image="cleaning"
            />

            <CampaignCard
              title="Far Yenileme"
              description="Far parlatma ve yenileme işlemi"
              discount="30%"
              validUntil="15 Ocak"
              image="headlights"
            />

            <CampaignCard
              title="Fren Bakımı"
              description="Fren balata ve disk kontrolü, değişimi"
              discount="10%"
              validUntil="31 Ocak"
              image="brakes"
            />
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline">Daha Fazla Göster</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

interface CampaignCardProps {
  title: string
  description: string
  discount: string
  validUntil: string
  image: string
}

function CampaignCard({ title, description, discount, validUntil, image }: CampaignCardProps) {
  // In a real app, we would use actual images
  const bgColor =
    image === "winter-tires"
      ? "bg-blue-600"
      : image === "oil-change"
        ? "bg-green-600"
        : image === "battery"
          ? "bg-yellow-600"
          : image === "cleaning"
            ? "bg-purple-600"
            : image === "headlights"
              ? "bg-red-600"
              : "bg-gray-600"

  return (
    <Link href={`/campaigns/${title.toLowerCase().replace(" ", "-")}`}>
      <Card className="overflow-hidden hover:border-blue-300 transition-colors h-full">
        <div className={`h-32 ${bgColor} relative`}>
          <div className="absolute top-3 right-3 bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">
            {discount} İndirim
          </div>
        </div>
        <CardContent className="p-4">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-xs text-gray-600 mt-1 mb-2">{description}</p>
          <div className="flex items-center mt-2">
            <Calendar className="w-3 h-3 text-gray-500 mr-1" />
            <span className="text-xs text-gray-500">{validUntil}'a kadar geçerli</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
