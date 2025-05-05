import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DoorServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Kapıya Servis</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6 pb-20">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Kapıya Servis Talebi</h2>
          <p className="text-sm text-gray-600 mb-4">Aracınız için kapıda servis hizmeti talep edin.</p>
        </div>

        <form className="space-y-6">
          {/* Vehicle Selection */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">Araç Bilgileri</h3>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Araç</Label>
                <Select defaultValue="volkswagen">
                  <SelectTrigger id="vehicle">
                    <SelectValue placeholder="Araç Seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volkswagen">Volkswagen Golf (34 ABC 123)</SelectItem>
                    <SelectItem value="bmw">BMW 3 Serisi (34 XYZ 789)</SelectItem>
                    <SelectItem value="add">+ Yeni Araç Ekle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">Konum Bilgileri</h3>

              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Servis Adresi</p>
                  <p className="text-xs text-gray-500">Kadıköy, İstanbul</p>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto text-blue-600">
                  Değiştir
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceLocation">Servis Lokasyonu</Label>
                <Select defaultValue="home" disabled>
                  <SelectTrigger id="serviceLocation">
                    <SelectValue placeholder="Lokasyon Seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Ev/İş Adresimde</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Kapıya servis hizmetinde adresinize gelinir.</p>
              </div>
            </CardContent>
          </Card>

          {/* Service Selection */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">Hizmet Seçimi</h3>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Hizmet Tipi</Label>
                <Select>
                  <SelectTrigger id="serviceType">
                    <SelectValue placeholder="Hizmet Seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="battery">Akü Takviye</SelectItem>
                    <SelectItem value="tire">Lastik Değişimi</SelectItem>
                    <SelectItem value="maintenance">Mobil Bakım</SelectItem>
                    <SelectItem value="tow">Çekici</SelectItem>
                    <SelectItem value="wash">Araç Yıkama</SelectItem>
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Açıklama (Opsiyonel)</Label>
                <textarea
                  id="description"
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Servis talebinizle ilgili detayları belirtebilirsiniz..."
                ></textarea>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">Zamanlama</h3>

              <div className="space-y-2">
                <Label htmlFor="urgency">Aciliyet</Label>
                <Select defaultValue="urgent">
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Aciliyet Seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Acil (En kısa sürede)</SelectItem>
                    <SelectItem value="today">Bugün</SelectItem>
                    <SelectItem value="tomorrow">Yarın</SelectItem>
                    <SelectItem value="scheduled">Tarih Seç</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime">Tercih Edilen Saat (Opsiyonel)</Label>
                <Input id="preferredTime" type="time" />
              </div>
            </CardContent>
          </Card>

          <Link href="/teklif-ver/confirmation">
            <Button className="w-full flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Servis Talebi Oluştur
            </Button>
          </Link>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Yakındaki Ustalar</h3>

          <div className="space-y-4">
            <NearbyMechanicCard
              name="Mehmet Usta"
              specialty="Akü ve Elektrik Uzmanı"
              distance="1.2 km"
              eta="~15 dakika"
              rating={4.7}
            />

            <NearbyMechanicCard
              name="Ali Usta"
              specialty="Lastik ve Jant Uzmanı"
              distance="2.5 km"
              eta="~22 dakika"
              rating={4.5}
            />

            <NearbyMechanicCard
              name="Hasan Usta"
              specialty="Genel Bakım ve Onarım"
              distance="3.8 km"
              eta="~30 dakika"
              rating={4.8}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

interface NearbyMechanicCardProps {
  name: string
  specialty: string
  distance: string
  eta: string
  rating: number
}

function NearbyMechanicCard({ name, specialty, distance, eta, rating }: NearbyMechanicCardProps) {
  return (
    <Card className="hover:border-blue-300 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">{name}</h4>
              <span className="text-sm font-medium">{rating} ★</span>
            </div>
            <p className="text-xs text-gray-600">{specialty}</p>
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <span>{distance}</span>
              <span className="mx-1">•</span>
              <span>{eta}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button size="sm">Çağır</Button>
        </div>
      </CardContent>
    </Card>
  )
}
