import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Calendar, MessageSquare, Car, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container px-4 py-6">
      {/* Hero Section */}
      <section className="mb-8">
        <div className="relative rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="max-w-[70%]">
            <h2 className="text-2xl font-bold mb-2">Aracınız için en iyi hizmet</h2>
            <p className="text-blue-100 mb-4">Uzman ustalar ve AI destekli arıza tespiti ile yanınızdayız</p>
            <Button className="bg-white text-blue-700 hover:bg-blue-50">Hemen Başla</Button>
          </div>
          <div className="absolute right-4 bottom-0 opacity-20">
            <Car className="w-32 h-32" />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İşlemler</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <QuickActionCard icon={<Search className="w-6 h-6 text-blue-600" />} title="Usta Bul" href="/explore" />
          <QuickActionCard
            icon={<Calendar className="w-6 h-6 text-blue-600" />}
            title="Randevu Al"
            href="/appointments"
          />
          <QuickActionCard
            icon={<MessageSquare className="w-6 h-6 text-blue-600" />}
            title="AI Arıza Tespiti"
            href="/ai-diagnosis"
          />
          <QuickActionCard
            icon={<MapPin className="w-6 h-6 text-blue-600" />}
            title="Kapıya Servis"
            href="/door-service"
          />
        </div>
      </section>

      {/* Nearby Mechanics */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Yakındaki Ustalar</h3>
          <Link href="/explore" className="text-sm text-blue-600 font-medium">
            Tümünü Gör
          </Link>
        </div>

        <div className="space-y-4">
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
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Yaklaşan Randevular</h3>
          <Link href="/appointments" className="text-sm text-blue-600 font-medium">
            Tümünü Gör
          </Link>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  15
                </div>
                <span className="text-xs text-gray-500 mt-1">Mayıs</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Periyodik Bakım</h4>
                <p className="text-sm text-gray-500">Mehmet Usta • 14:30</p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Kadıköy, İstanbul</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Detaylar
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Promotions */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Kampanyalar</h3>
          <Link href="/campaigns" className="text-sm text-blue-600 font-medium">
            Tümünü Gör
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="h-32 bg-gray-200"></div>
            <CardContent className="p-4">
              <h4 className="font-medium text-gray-900">Yaz Lastikleri</h4>
              <p className="text-sm text-gray-500">%20 indirim fırsatı</p>
              <p className="text-xs text-gray-400 mt-1">30 Mayıs'a kadar geçerli</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-32 bg-gray-200"></div>
            <CardContent className="p-4">
              <h4 className="font-medium text-gray-900">Motor Yağı Değişimi</h4>
              <p className="text-sm text-gray-500">Filtre hediyeli</p>
              <p className="text-xs text-gray-400 mt-1">15 Haziran'a kadar geçerli</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

function QuickActionCard({ icon, title, href }: { icon: React.ReactNode; title: string; href: string }) {
  return (
    <Link href={href}>
      <Card className="h-full hover:border-blue-300 transition-colors">
        <CardContent className="flex flex-col items-center justify-center p-4 h-full">
          <div className="mb-2">{icon}</div>
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </CardContent>
      </Card>
    </Link>
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
