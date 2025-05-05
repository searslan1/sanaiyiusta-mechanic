import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Car, Upload } from "lucide-react"
import Link from "next/link"

export default function AddVehiclePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/garage" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Araç Ekle</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        <form className="space-y-6">
          {/* Vehicle Photo */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-16 h-16 text-gray-400" />
                </div>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Upload className="w-4 h-4 mr-2" />
                  Fotoğraf Ekle
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">Temel Bilgiler</h3>

              <div className="space-y-2">
                <Label htmlFor="plate">Plaka</Label>
                <Input id="plate" placeholder="34 ABC 123" />
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fuel">Yakıt Tipi</Label>
                  <Select>
                    <SelectTrigger id="fuel">
                      <SelectValue placeholder="Yakıt Tipi Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gasoline">Benzin</SelectItem>
                      <SelectItem value="diesel">Dizel</SelectItem>
                      <SelectItem value="lpg">LPG</SelectItem>
                      <SelectItem value="electric">Elektrik</SelectItem>
                      <SelectItem value="hybrid">Hibrit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transmission">Vites</Label>
                  <Select>
                    <SelectTrigger id="transmission">
                      <SelectValue placeholder="Vites Tipi Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Manuel</SelectItem>
                      <SelectItem value="automatic">Otomatik</SelectItem>
                      <SelectItem value="semi-auto">Yarı Otomatik</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mileage">Kilometre</Label>
                <Input id="mileage" type="number" placeholder="45000" />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">Ek Bilgiler</h3>

              <div className="space-y-2">
                <Label htmlFor="vin">Şasi Numarası (VIN)</Label>
                <Input id="vin" placeholder="WVW ZZZ 1KZ 5W 123456" />
                <p className="text-xs text-gray-500">Opsiyonel</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="engine">Motor Hacmi</Label>
                <Input id="engine" placeholder="1.6" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">Renk</Label>
                <Select>
                  <SelectTrigger id="color">
                    <SelectValue placeholder="Renk Seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white">Beyaz</SelectItem>
                    <SelectItem value="black">Siyah</SelectItem>
                    <SelectItem value="gray">Gri</SelectItem>
                    <SelectItem value="red">Kırmızı</SelectItem>
                    <SelectItem value="blue">Mavi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notlar</Label>
                <textarea
                  id="notes"
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Aracınızla ilgili eklemek istediğiniz notlar..."
                ></textarea>
              </div>
            </CardContent>
          </Card>

          {/* Service History */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium text-gray-900">Servis Geçmişi</h3>

              <div className="space-y-2">
                <Label htmlFor="lastService">Son Bakım Tarihi</Label>
                <Input id="lastService" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nextService">Sonraki Bakım Tarihi/Kilometresi</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input id="nextService" type="date" />
                  <Input id="nextServiceMileage" type="number" placeholder="55000 km" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-4">
            <Button variant="outline" className="flex-1">
              İptal
            </Button>
            <Button className="flex-1">Kaydet</Button>
          </div>
        </form>
      </main>
    </div>
  )
}
