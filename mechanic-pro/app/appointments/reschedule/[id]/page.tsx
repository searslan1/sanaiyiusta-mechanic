import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function RescheduleAppointmentPage({ params }: { params: { id: string } }) {
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
  }

  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex items-center mb-6">
        <Link href={`/appointments/${appointmentId}`} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Randevuyu Yeniden Planla</h1>
      </div>

      {/* Current Appointment Info */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-2">Mevcut Randevu</h3>

          <div className="flex items-center mt-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
              {appointment.date.split(" ")[0]}
            </div>
            <div>
              <p className="text-sm font-medium">{appointment.service}</p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>
                  {appointment.date}, {appointment.time}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-3 text-xs text-gray-500">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{appointment.location}</span>
          </div>
        </CardContent>
      </Card>

      {/* New Date and Time Selection */}
      <Card className="mb-6">
        <CardContent className="p-4 space-y-4">
          <h3 className="font-medium text-gray-900">Yeni Tarih ve Saat</h3>

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
              <Button
                variant="outline"
                type="button"
                className="flex items-center justify-center bg-blue-50 border-blue-300"
              >
                <Clock className="w-4 h-4 mr-1" />
                15:00
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Değişiklik Nedeni (Opsiyonel)</Label>
            <textarea
              id="reason"
              className="w-full min-h-[80px] p-2 border rounded-md"
              placeholder="Randevu değişikliği nedeninizi belirtebilirsiniz..."
            ></textarea>
          </div>
        </CardContent>
      </Card>

      {/* Confirmation */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-2">Onay</h3>

          <p className="text-sm text-gray-600 mb-4">
            Randevunuzu <span className="font-medium">20 Mayıs 2023, 15:00</span> tarihine yeniden planlamak üzeresiniz.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              Not: Randevu değişikliği, ustanın müsaitlik durumuna göre onaylanacaktır.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Link href={`/appointments/${appointmentId}`} className="flex-1">
          <Button variant="outline" className="w-full">
            İptal
          </Button>
        </Link>
        <Link href="/appointments/reschedule-confirmation" className="flex-1">
          <Button className="w-full">Değişikliği Onayla</Button>
        </Link>
      </div>
    </div>
  )
}
