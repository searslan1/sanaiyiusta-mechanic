import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Filter, MapPin, Search, Star, Wrench, Car, PenToolIcon as Tool, Battery, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function ExplorePage() {
  return (
    <div className="container px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Keşfet</h1>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input placeholder="Usta, servis veya hizmet ara..." className="pl-10" />
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="mechanics" className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mechanics">Ustalar</TabsTrigger>
          <TabsTrigger value="services">Hizmetler</TabsTrigger>
          <TabsTrigger value="shops">Mağazalar</TabsTrigger>
        </TabsList>

        <div className="mt-4 mb-6 flex items-center justify-between">
          <div className="flex space-x-2">
            <Select defaultValue="istanbul">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Şehir" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="istanbul">İstanbul</SelectItem>
                <SelectItem value="ankara">Ankara</SelectItem>
                <SelectItem value="izmir">İzmir</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tümü</SelectItem>
                <SelectItem value="mechanic">Motor</SelectItem>
                <SelectItem value="electric">Elektrik</SelectItem>
                <SelectItem value="body">Kaporta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtrele
          </Button>
        </div>

        <TabsContent value="mechanics" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700">Önerilen Ustalar</h3>
            <Tabs defaultValue="rating" className="w-[160px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="rating">Puan</TabsTrigger>
                <TabsTrigger value="distance">Mesafe</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <MechanicCard
            name="Ahmet Usta"
            specialty="Motor ve Şanzıman Uzmanı"
            rating={4.8}
            reviewCount={124}
            location="Kadıköy, İstanbul"
            distance="2.3 km"
            available={true}
          />

          <MechanicCard
            name="Mehmet Usta"
            specialty="Elektrik ve Elektronik Sistemler"
            rating={4.6}
            reviewCount={98}
            location="Ataşehir, İstanbul"
            distance="4.1 km"
            available={true}
          />

          <MechanicCard
            name="Ali Usta"
            specialty="Kaporta ve Boya Uzmanı"
            rating={4.5}
            reviewCount={76}
            location="Üsküdar, İstanbul"
            distance="5.7 km"
            available={false}
          />

          <MechanicCard
            name="Hasan Usta"
            specialty="Fren ve Süspansiyon Sistemleri"
            rating={4.7}
            reviewCount={112}
            location="Beşiktaş, İstanbul"
            distance="7.2 km"
            available={true}
          />

          <MechanicCard
            name="Osman Usta"
            specialty="Genel Bakım ve Onarım"
            rating={4.4}
            reviewCount={89}
            location="Şişli, İstanbul"
            distance="8.5 km"
            available={true}
          />
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <ServiceCard
              icon={<Wrench className="w-8 h-8 text-blue-600" />}
              title="Periyodik Bakım"
              description="Yağ, filtre değişimi ve genel kontrol"
            />

            <ServiceCard
              icon={<Tool className="w-8 h-8 text-blue-600" />}
              title="Fren Bakımı"
              description="Balata ve disk kontrolü, değişimi"
            />

            <ServiceCard
              icon={<Battery className="w-8 h-8 text-blue-600" />}
              title="Akü Değişimi"
              description="Akü testi ve değişimi"
            />

            <ServiceCard
              icon={<Car className="w-8 h-8 text-blue-600" />}
              title="Kaporta Boya"
              description="Hasar onarımı ve boya işlemleri"
            />

            <ServiceCard
              icon={<Tool className="w-8 h-8 text-blue-600" />}
              title="Lastik Değişimi"
              description="Lastik değişimi ve balans ayarı"
            />

            <ServiceCard
              icon={<Wrench className="w-8 h-8 text-blue-600" />}
              title="Klima Bakımı"
              description="Klima gazı dolumu ve sistem kontrolü"
            />
          </div>
        </TabsContent>

        <TabsContent value="shops" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700">Önerilen Mağazalar</h3>
            <Tabs defaultValue="rating" className="w-[160px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="rating">Puan</TabsTrigger>
                <TabsTrigger value="distance">Mesafe</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <ShopCard
            name="OtoPro Market"
            category="Yedek Parça"
            rating={4.7}
            reviewCount={156}
            location="Kadıköy, İstanbul"
            distance="1.8 km"
          />

          <ShopCard
            name="Lastik Dünyası"
            category="Lastik ve Jant"
            rating={4.5}
            reviewCount={98}
            location="Ataşehir, İstanbul"
            distance="3.2 km"
          />

          <ShopCard
            name="Akü Market"
            category="Akü ve Elektrik"
            rating={4.6}
            reviewCount={112}
            location="Üsküdar, İstanbul"
            distance="4.5 km"
          />

          <ShopCard
            name="Oto Aksesuar"
            category="Aksesuar ve Bakım Ürünleri"
            rating={4.3}
            reviewCount={87}
            location="Beşiktaş, İstanbul"
            distance="6.1 km"
          />
        </TabsContent>
      </Tabs>

      {/* Map View Button */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-center">
        <Button className="shadow-lg bg-blue-600 hover:bg-blue-700">
          <MapPin className="w-4 h-4 mr-2" />
          Harita Görünümü
        </Button>
      </div>
    </div>
  )
}

interface MechanicCardProps {
  name: string
  specialty: string
  rating: number
  reviewCount: number
  location: string
  distance: string
  available: boolean
}

function MechanicCard({ name, specialty, rating, reviewCount, location, distance, available }: MechanicCardProps) {
  return (
    <Link href={`/mechanic-profile/${name.replace(" ", "-").toLowerCase()}`}>
      <Card className="hover:border-blue-300 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{name}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{specialty}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{location}</span>
                <span className="mx-2">•</span>
                <span>{distance}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span
              className={`text-xs px-2 py-1 rounded-full ${available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
            >
              {available ? "Müsait" : "Meşgul"}
            </span>
            <Button size="sm">Randevu Al</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Link href={`/explore/service/${title.toLowerCase().replace(" ", "-")}`}>
      <Card className="h-full hover:border-blue-300 transition-colors">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="mb-2">{icon}</div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

interface ShopCardProps {
  name: string
  category: string
  rating: number
  reviewCount: number
  location: string
  distance: string
}

function ShopCard({ name, category, rating, reviewCount, location, distance }: ShopCardProps) {
  return (
    <Link href={`/explore/shop/${name.toLowerCase().replace(" ", "-")}`}>
      <Card className="hover:border-blue-300 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{name}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{category}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{location}</span>
                <span className="mx-2">•</span>
                <span>{distance}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Button variant="outline" size="sm">
              Ürünleri Gör
            </Button>
            <Button size="sm">Ziyaret Et</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
