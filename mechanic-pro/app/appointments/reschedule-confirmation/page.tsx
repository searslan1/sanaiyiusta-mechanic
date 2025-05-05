import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function RescheduleConfirmationPage() {
  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Randevu Yeniden Planlandı!</h1>
        <p className="text-gray-600 mt-2">
          Randevu değişiklik talebiniz başarıyla alındı. Ustanız tarafından onaylandığında size bildirim
          gönderilecektir.
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Yeni Randevu Detayları</h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500">Servis</p>
              <p className="text-sm font-medium">Periyodik Bakım</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Yeni Tarih ve Saat</p>
              <p className="text-sm font-medium">20 Mayıs 2023, 15:00</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Usta</p>
              <p className="text-sm font-medium">Mehmet Usta</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Durum</p>
              <p className="text-sm font-medium text-yellow-600">Onay Bekliyor</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link href="/appointments">
          <Button className="w-full flex items-center justify-center">
            Randevularıma Dön
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>

        <Link href="/appointments/new">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Yeni Randevu Oluştur
          </Button>
        </Link>
      </div>
    </div>
  )
}
