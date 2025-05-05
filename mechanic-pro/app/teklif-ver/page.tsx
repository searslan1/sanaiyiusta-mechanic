import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Upload, Wrench, Clock, Calendar } from "lucide-react"
import Link from "next/link"

export default function TeklifVerPage() {
  return (
    <div className="container px-4 py-6 pb-20">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Teklif Ver</h1>
      <p className="text-gray-600 mb-6">Aracınızın sorununu paylaşın, ustalardan teklif alın</p>

      <Tabs defaultValue="form" className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="form">Yeni Teklif</TabsTrigger>
          <TabsTrigger value="history">Tekliflerim</TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="mt-4">
          <form className="space-y-6">
            {/* Vehicle Selection */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-medium text-gray-900">Araç Bilgileri</h3>

                <div className="space-y-2">
                  <Label htmlFor="vehicle">Araç</Label>
                  <Select>
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Marka</Label>
                    <Select>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Marka Seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="volkswagen">Volkswagen</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                        <SelectItem value="mercedes">Mercedes</SelectItem>
                        <SelectItem value="audi">Audi</SelectItem>
                        <SelectItem value="toyota">Toyota</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Select>
                      <SelectTrigger id="model">
                        <SelectValue placeholder="Model Seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="golf">Golf</SelectItem>
                        <SelectItem value="passat">Passat</SelectItem>
                        <SelectItem value="tiguan">Tiguan</SelectItem>
                        <SelectItem value="polo">Polo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Yıl</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Yıl Seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mileage">Kilometre</Label>
                    <Input id="mileage" type="number" placeholder="45000" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem Details */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-medium text-gray-900">Sorun Detayları</h3>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Servis Tipi</Label>
                  <Select>
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Servis Tipi Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oil">Yağ Değişimi</SelectItem>
                      <SelectItem value="brake">Fren Bakımı</SelectItem>
                      <SelectItem value="tire">Lastik Değişimi</SelectItem>
                      <SelectItem value="battery">Akü Değişimi</SelectItem>
                      <SelectItem value="ac">Klima Bakımı</SelectItem>
                      <SelectItem value="general">Genel Bakım</SelectItem>
                      <SelectItem value="other">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Başlık</Label>
                  <Input id="title" placeholder="Örn: Motor yağı değişimi gerekiyor" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Sorun Açıklaması</Label>
                  <textarea
                    id="description"
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    placeholder="Sorununuzu detaylı bir şekilde açıklayın..."
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <Label>Fotoğraflar (Opsiyonel)</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Sorunun daha iyi anlaşılması için fotoğraf ekleyebilirsiniz.</p>
                </div>
              </CardContent>
            </Card>

            {/* Location and Preferences */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-medium text-gray-900">Konum ve Tercihler</h3>

                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Mevcut Konum</p>
                    <p className="text-xs text-gray-500">Kadıköy, İstanbul</p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto text-blue-600">
                    Değiştir
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceLocation">Servis Lokasyonu</Label>
                  <Select defaultValue="mechanic">
                    <SelectTrigger id="serviceLocation">
                      <SelectValue placeholder="Lokasyon Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mechanic">Servis Noktasında</SelectItem>
                      <SelectItem value="home">Ev/İş Adresimde</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Aciliyet</Label>
                  <Select defaultValue="normal">
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Aciliyet Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Acil (24 saat içinde)</SelectItem>
                      <SelectItem value="normal">Normal (1-3 gün)</SelectItem>
                      <SelectItem value="planned">Planlı (1 hafta içinde)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Tercih Edilen Tarih (Opsiyonel)</Label>
                  <Input id="preferredDate" type="date" />
                </div>
              </CardContent>
            </Card>

            {/* Budget */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-medium text-gray-900">Bütçe (Opsiyonel)</h3>

                <div className="space-y-2">
                  <Label htmlFor="budget">Maksimum Bütçe</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₺</span>
                    <Input id="budget" type="number" className="pl-8" placeholder="1000" />
                  </div>
                  <p className="text-xs text-gray-500">Bütçenizi belirtmek isteğe bağlıdır.</p>
                </div>
              </CardContent>
            </Card>

            <Link href="/teklif-ver/confirmation">
              <Button className="w-full">Teklif İsteği Gönder</Button>
            </Link>
          </form>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <div className="space-y-4">
            <TeklifCard
              title="Motor Yağı Değişimi"
              vehicle="Volkswagen Golf"
              date="15 Mayıs 2023"
              status="active"
              responseCount={3}
            />

            <TeklifCard
              title="Fren Balata Değişimi"
              vehicle="Volkswagen Golf"
              date="10 Mayıs 2023"
              status="active"
              responseCount={2}
            />

            <TeklifCard
              title="Akü Değişimi"
              vehicle="BMW 3 Serisi"
              date="5 Mayıs 2023"
              status="completed"
              responseCount={4}
            />

            <TeklifCard
              title="Klima Bakımı"
              vehicle="BMW 3 Serisi"
              date="20 Nisan 2023"
              status="completed"
              responseCount={3}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface TeklifCardProps {
  title: string
  vehicle: string
  date: string
  status: "active" | "pending" | "completed"
  responseCount: number
}

function TeklifCard({ title, vehicle, date, status, responseCount }: TeklifCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "completed":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "active":
        return "Aktif"
      case "pending":
        return "Beklemede"
      case "completed":
        return "Tamamlandı"
      default:
        return ""
    }
  }

  return (
    <Link href={`/teklif-ver/${title.toLowerCase().replace(" ", "-")}`}>
      <Card className="hover:border-blue-300 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Wrench className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{title}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor()}`}>{getStatusText()}</span>
              </div>
              <p className="text-sm text-gray-600">{vehicle}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{date}</span>
                <span className="mx-2">•</span>
                <Clock className="w-3 h-3 mr-1" />
                <span>{responseCount} teklif</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
