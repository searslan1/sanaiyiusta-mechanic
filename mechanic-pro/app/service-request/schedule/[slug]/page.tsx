import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function ScheduleAppointmentPage({ params }: { params: { slug: string } }) {
  const mechanicName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href={`/mechanic-profile/${params.slug}`} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Randevu Al</h1>
      </div>

      {/* Mechanic Info */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <h2 className="font-medium text-gray-900">{mechanicName}</h2>
              <p className="text-sm text-gray-600">Motor ve Şanzıman Uzmanı</p>
            </div>
          </div>
          <div className="flex items-center mt-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Acıbadem Otomotiv, Kadıköy, İstanbul</span>
          </div>
        </CardContent>
      </Card>

      <form className="space-y-6">
        {/* Service Selection */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">Servis Seçimi</h3>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Servis Tipi</Label>
              <Select>
                <SelectTrigger id="serviceType">
                  <SelectValue placeholder="Servis Tipi Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oil">Motor Bakımı</SelectItem>
                  <SelectItem value="transmission">Şanzıman Bakımı</SelectItem>
                  <SelectItem value="diagnostic">Elektronik Arıza Tespiti</SelectItem>
                  <SelectItem value="brake">Fren Sistemi Bakımı</SelectItem>
                  <SelectItem value="suspension">Süspansiyon Bakımı</SelectItem>
                </SelectContent>
              </Select>
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="description">Açıklama (Opsiyonel)</Label>
              <textarea
                id="description"
                className="w-full min-h-[100px] p-2 border rounded-md"
                placeholder="Servis ile ilgili detayları yazın..."
              ></textarea>
            </div>
          </CardContent>
        </Card>

        {/* Date and Time Selection */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">Tarih ve Saat</h3>

            <div className="space-y-2">
              <Label htmlFor="date">Tarih</Label>
              <Input id="date" type="date" />
            </div>

            <div>
              <Label className="mb-2 block">Uygun Saatler</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" type="button" className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  09:00
                </Button>
                <Button variant="outline" type="button" className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  10:00
                </Button>
                <Button variant="outline" type="button" className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  11:00
                </Button>
                <Button variant="outline" type="button" className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  13:00
                </Button>
                <Button variant="outline" type="button" className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  14:00
                </Button>
                <Button variant="outline" type="button" className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  15:00
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">İletişim Bilgileri</h3>

            <div className="space-y-2">
              <Label htmlFor="name">Ad Soyad</Label>
              <Input id="name" defaultValue="Ahmet Yılmaz" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" defaultValue="+90 555 123 4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input id="email" defaultValue="ahmet.yilmaz@example.com" />
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-4">
          <Button variant="outline" className="flex-1">
            İptal
          </Button>
          <Link href="/appointments" className="flex-1">
            <Button className="w-full">Randevuyu Onayla</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
