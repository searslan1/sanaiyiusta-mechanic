import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Car, Clock, MapPin, MessageSquare, Phone, Star, Trash, Pencil } from "lucide-react"
import Link from "next/link"

export default function AppointmentDetailPage({ params }: { params: { id: string } }) {
  const appointmentId = params.id

  // In a real app, we would fetch the appointment details based on the ID
  const appointment = {
    id: appointmentId,
    service: "Periyodik Bakım",
    date: "15 Mayıs 2023",
    time: "14:30",
    mechanic: "Mehmet Usta",
    mechanicId: "mehmet-usta",
    mechanicRating: 4.8,
    location: "Acıbadem Otomotiv, Kadıköy, İstanbul",
    vehicle: "Volkswagen Golf (34 ABC 123)",
    status: "completed", // Changed to completed for demonstration
    notes: "Yağ değişimi, filtre değişimi ve genel kontrol yapılacak.",
    price: "₺750",
    estimatedDuration: "2 saat",
    hasReviewed: false, // Added to track if user has reviewed
  }

  const isCompleted = appointment.status === "completed"
  const canReview = isCompleted && !appointment.hasReviewed

  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex items-center mb-6">
        <Link href="/appointments" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Randevu Detayı</h1>
      </div>

      {/* Appointment Status */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">{appointment.service}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">Tamamlandı</span>
          </div>

          <div className="flex items-center mt-4 mb-4">
            <div className="flex flex-col items-center mr-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                {appointment.date.split(" ")[0]}
              </div>
              <span className="text-xs text-gray-500 mt-1">{appointment.date.split(" ")[1]}</span>
            </div>
            <div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm font-medium">{appointment.time}</span>
              </div>
              <div className="flex items-center mt-1">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{appointment.location}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center pt-4 border-t">
            <Car className="w-5 h-5 text-gray-500 mr-2" />
            <div>
              <p className="text-sm font-medium">{appointment.vehicle}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mechanic Info */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Usta Bilgileri</h3>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{appointment.mechanic}</h4>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm">{appointment.mechanicRating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Motor ve Şanzıman Uzmanı</p>
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <Link href={`/messages/${appointment.mechanic.replace(" ", "-").toLowerCase()}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <MessageSquare className="w-4 h-4 mr-1" />
                Mesaj Gönder
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="flex-1">
              <Phone className="w-4 h-4 mr-1" />
              Ara
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Appointment Details */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Randevu Detayları</h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500">Hizmet</p>
              <p className="text-sm font-medium">{appointment.service}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Notlar</p>
              <p className="text-sm">{appointment.notes}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Fiyat</p>
                <p className="text-sm font-medium">{appointment.price}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Tahmini Süre</p>
                <p className="text-sm">{appointment.estimatedDuration}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        {canReview && (
          <Link href={`/appointments/review/${appointment.id}`} className="w-full">
            <Button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700">
              <Star className="w-4 h-4 mr-2" />
              Ustayı Değerlendir
            </Button>
          </Link>
        )}

        <Link href={`/mechanic-profile/${appointment.mechanicId}`} className="w-full">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <Star className="w-4 h-4 mr-2" />
            Usta Profilini Görüntüle
          </Button>
        </Link>

        {appointment.status !== "completed" && (
          <>
            <Link href={`/appointments/reschedule/${appointment.id}`} className="w-full">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Randevuyu Yeniden Planla
              </Button>
            </Link>

            <Link href={`/appointments/edit/${appointment.id}`} className="w-full">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Pencil className="w-4 h-4 mr-2" />
                Randevu Detaylarını Düzenle
              </Button>
            </Link>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              <Trash className="w-4 h-4 mr-2" />
              Randevuyu İptal Et
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
