import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MapPin, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function NewAppointmentPage() {
  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex items-center mb-6">
        <Link href="/appointments" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Yeni Randevu</h1>
      </div>

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

        {/* Mechanic Selection */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">Usta Seçimi</h3>

            <div className="space-y-2">
              <Label htmlFor="mechanic">Usta</Label>
              <Select>
                <SelectTrigger id="mechanic">
                  <SelectValue placeholder="Usta Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mehmet">Mehmet Usta</SelectItem>
                  <SelectItem value="ali">Ali Usta</SelectItem>
                  <SelectItem value="hasan">Hasan Usta</SelectItem>
                  <SelectItem value="ahmet">Ahmet Usta</SelectItem>
                  <SelectItem value="osman">Osman Usta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Önerilen Ustalar</Label>
              <div className="space-y-2">
                <MechanicOption name="Mehmet Usta" specialty="Motor ve Şanzıman Uzmanı" rating={4.8} available={true} />

                <MechanicOption
                  name="Ali Usta"
                  specialty="Fren ve Süspansiyon Sistemleri"
                  rating={4.6}
                  available={true}
                />

                <MechanicOption
                  name="Hasan Usta"
                  specialty="Elektrik ve Elektronik Sistemler"
                  rating={4.7}
                  available={false}
                />
              </div>
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

        {/* Location */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">Konum</h3>

            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-gray-900">Servis Lokasyonu</p>
                <p className="text-xs text-gray-500">Acıbadem Otomotiv, Kadıköy, İstanbul</p>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto text-blue-600">
                Değiştir
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceLocation">Servis Tipi</Label>
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

        <div className="flex space-x-4">
          <Link href="/appointments" className="flex-1">
            <Button variant="outline" className="w-full">
              İptal
            </Button>
          </Link>
          <Link href="/appointments/new-confirmation" className="flex-1">
            <Button className="w-full">Randevuyu Onayla</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}

interface MechanicOptionProps {
  name: string
  specialty: string
  rating: number
  available: boolean
}

function MechanicOption({ name, specialty, rating, available }: MechanicOptionProps) {
  return (
    <div
      className={`p-3 border rounded-lg flex items-center ${available ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-gray-50"}`}
    >
      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900">{name}</h4>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-600">{specialty}</p>
      </div>
      <div className="ml-2">
        <input
          type="radio"
          name="mechanic"
          value={name.toLowerCase().replace(" ", "-")}
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          disabled={!available}
        />
      </div>
    </div>
  )
}
