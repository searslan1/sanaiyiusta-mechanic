import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MapPin, Upload } from "lucide-react"
import Link from "next/link"

export default function NewServiceRequestPage() {
  return (
    <div className="container px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/service-request" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Yeni Servis Talebi</h1>
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

            <div className="space-y-2">
              <Label htmlFor="mileage">Güncel Kilometre</Label>
              <Input id="mileage" type="number" placeholder="45000" />
            </div>
          </CardContent>
        </Card>

        {/* Service Details */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">Servis Detayları</h3>

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
              <Input id="title" placeholder="Servis talebiniz için kısa bir başlık" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Açıklama</Label>
              <textarea
                id="description"
                className="w-full min-h-[100px] p-2 border rounded-md"
                placeholder="Servis talebinizle ilgili detayları yazın..."
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
              <Label htmlFor="preferredDate">Tercih Edilen Tarih</Label>
              <Input id="preferredDate" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Tercih Edilen Saat</Label>
              <Select>
                <SelectTrigger id="preferredTime">
                  <SelectValue placeholder="Saat Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Sabah (09:00 - 12:00)</SelectItem>
                  <SelectItem value="afternoon">Öğleden Sonra (12:00 - 17:00)</SelectItem>
                  <SelectItem value="evening">Akşam (17:00 - 20:00)</SelectItem>
                  <SelectItem value="flexible">Esnek</SelectItem>
                </SelectContent>
              </Select>
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

        <div className="flex space-x-4">
          <Button variant="outline" className="flex-1">
            İptal
          </Button>
          <Link href="/service-request/confirmation" className="flex-1">
            <Button className="w-full">Talebi Gönder</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
