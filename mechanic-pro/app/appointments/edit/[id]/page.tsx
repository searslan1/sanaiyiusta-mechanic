import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EditAppointmentPage({ params }: { params: { id: string } }) {
  const appointmentId = params.id

  // In a real app, we would fetch the appointment details based on the ID
  const appointment = {
    id: appointmentId,
    service: "Periyodik Bakım",
    date: "15 Mayıs 2023",
    time: "14:30",
    mechanic: "Mehmet Usta",
    location: "Acıbadem Otomotiv, Kadıköy, İstanbul",
    vehicle: "Volkswagen Golf (34 ABC 123)",
    notes: "Yağ değişimi, filtre değişimi ve genel kontrol yapılacak.",
  }

  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex items-center mb-6">
        <Link href={`/appointments/${appointmentId}`} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Randevu Düzenle</h1>
      </div>

      <form className="space-y-6">
        {/* Service Details */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">Servis Detayları</h3>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Servis Tipi</Label>
              <Select defaultValue="general">
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
              <Label htmlFor="notes">Notlar</Label>
              <textarea
                id="notes"
                className="w-full min-h-[100px] p-2 border rounded-md"
                defaultValue={appointment.notes}
                placeholder="Servis ile ilgili detayları yazın..."
              ></textarea>
            </div>
          </CardContent>
        </Card>

        {/* Additional Services */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">Ek Hizmetler</h3>

            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="check-fluids"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="check-fluids" className="ml-2 text-sm text-gray-700">
                  Tüm sıvıların kontrolü
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="check-battery"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="check-battery" className="ml-2 text-sm text-gray-700">
                  Akü kontrolü
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="check-tires"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="check-tires" className="ml-2 text-sm text-gray-700">
                  Lastik basınç kontrolü
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="car-wash"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="car-wash" className="ml-2 text-sm text-gray-700">
                  Araç yıkama (+₺100)
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Preferences */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium text-gray-900">İletişim Tercihleri</h3>

            <div className="space-y-2">
              <Label htmlFor="contactMethod">İletişim Yöntemi</Label>
              <Select defaultValue="sms">
                <SelectTrigger id="contactMethod">
                  <SelectValue placeholder="İletişim Yöntemi Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="email">E-posta</SelectItem>
                  <SelectItem value="call">Telefon Araması</SelectItem>
                  <SelectItem value="app">Uygulama Bildirimi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reminderTime">Hatırlatma Zamanı</Label>
              <Select defaultValue="24h">
                <SelectTrigger id="reminderTime">
                  <SelectValue placeholder="Hatırlatma Zamanı Seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">1 saat önce</SelectItem>
                  <SelectItem value="3h">3 saat önce</SelectItem>
                  <SelectItem value="12h">12 saat önce</SelectItem>
                  <SelectItem value="24h">24 saat önce</SelectItem>
                  <SelectItem value="48h">48 saat önce</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-4">
          <Link href={`/appointments/${appointmentId}`} className="flex-1">
            <Button variant="outline" className="w-full">
              İptal
            </Button>
          </Link>
          <Link href={`/appointments/${appointmentId}`} className="flex-1">
            <Button className="w-full">Değişiklikleri Kaydet</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
