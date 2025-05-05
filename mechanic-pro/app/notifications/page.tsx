import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Check, ShoppingBag, Wrench } from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Bildirimler</h1>
          <Button variant="ghost" size="sm" className="ml-auto text-blue-600">
            Tümünü Okundu İşaretle
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all">Tümü</TabsTrigger>
            <TabsTrigger value="appointments">Randevular</TabsTrigger>
            <TabsTrigger value="services">Servisler</TabsTrigger>
            <TabsTrigger value="offers">Kampanyalar</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-blue-600" />}
              title="Randevu Hatırlatıcısı"
              message="Yarın saat 14:30'da Mehmet Usta ile randevunuz var."
              time="1 saat önce"
              isUnread={true}
              type="appointment"
            />

            <NotificationCard
              icon={<Wrench className="w-5 h-5 text-orange-600" />}
              title="Bakım Zamanı"
              message="Volkswagen Golf aracınızın yağ değişimi zamanı geldi."
              time="3 saat önce"
              isUnread={true}
              type="service"
            />

            <NotificationCard
              icon={<ShoppingBag className="w-5 h-5 text-green-600" />}
              title="Özel Kampanya"
              message="Size özel %20 indirim fırsatı! Kış lastiklerinde büyük indirim."
              time="1 gün önce"
              isUnread={false}
              type="offer"
            />

            <NotificationCard
              icon={<Check className="w-5 h-5 text-blue-600" />}
              title="Servis Tamamlandı"
              message="Aracınızın periyodik bakımı başarıyla tamamlandı."
              time="2 gün önce"
              isUnread={false}
              type="service"
            />

            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-blue-600" />}
              title="Randevu Onayı"
              message="15 Aralık 14:30 tarihli randevunuz onaylandı."
              time="3 gün önce"
              isUnread={false}
              type="appointment"
            />

            <NotificationCard
              icon={<ShoppingBag className="w-5 h-5 text-green-600" />}
              title="Yeni Kampanya"
              message="Kış bakım paketinde %15 indirim fırsatını kaçırmayın!"
              time="1 hafta önce"
              isUnread={false}
              type="offer"
            />
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-blue-600" />}
              title="Randevu Hatırlatıcısı"
              message="Yarın saat 14:30'da Mehmet Usta ile randevunuz var."
              time="1 saat önce"
              isUnread={true}
              type="appointment"
            />

            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-blue-600" />}
              title="Randevu Onayı"
              message="15 Aralık 14:30 tarihli randevunuz onaylandı."
              time="3 gün önce"
              isUnread={false}
              type="appointment"
            />

            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-blue-600" />}
              title="Randevu İptal"
              message="10 Kasım tarihli randevunuz iptal edildi."
              time="2 hafta önce"
              isUnread={false}
              type="appointment"
            />
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <NotificationCard
              icon={<Wrench className="w-5 h-5 text-orange-600" />}
              title="Bakım Zamanı"
              message="Volkswagen Golf aracınızın yağ değişimi zamanı geldi."
              time="3 saat önce"
              isUnread={true}
              type="service"
            />

            <NotificationCard
              icon={<Check className="w-5 h-5 text-blue-600" />}
              title="Servis Tamamlandı"
              message="Aracınızın periyodik bakımı başarıyla tamamlandı."
              time="2 gün önce"
              isUnread={false}
              type="service"
            />

            <NotificationCard
              icon={<Wrench className="w-5 h-5 text-orange-600" />}
              title="Muayene Hatırlatıcısı"
              message="BMW 3 Serisi aracınızın muayene zamanı yaklaşıyor."
              time="1 hafta önce"
              isUnread={false}
              type="service"
            />
          </TabsContent>

          <TabsContent value="offers" className="space-y-4">
            <NotificationCard
              icon={<ShoppingBag className="w-5 h-5 text-green-600" />}
              title="Özel Kampanya"
              message="Size özel %20 indirim fırsatı! Kış lastiklerinde büyük indirim."
              time="1 gün önce"
              isUnread={false}
              type="offer"
            />

            <NotificationCard
              icon={<ShoppingBag className="w-5 h-5 text-green-600" />}
              title="Yeni Kampanya"
              message="Kış bakım paketinde %15 indirim fırsatını kaçırmayın!"
              time="1 hafta önce"
              isUnread={false}
              type="offer"
            />

            <NotificationCard
              icon={<ShoppingBag className="w-5 h-5 text-green-600" />}
              title="Sınırlı Süre Teklifi"
              message="Bu hafta sonu akü alımlarında %25 indirim!"
              time="2 hafta önce"
              isUnread={false}
              type="offer"
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface NotificationCardProps {
  icon: React.ReactNode
  title: string
  message: string
  time: string
  isUnread: boolean
  type: "appointment" | "service" | "offer"
}

function NotificationCard({ icon, title, message, time, isUnread, type }: NotificationCardProps) {
  let href = "/"

  switch (type) {
    case "appointment":
      href = "/appointments"
      break
    case "service":
      href = "/garage"
      break
    case "offer":
      href = "/campaigns"
      break
  }

  return (
    <Link href={href}>
      <Card className={`hover:border-blue-300 transition-colors ${isUnread ? "border-l-4 border-l-blue-600" : ""}`}>
        <CardContent className="p-4">
          <div className="flex items-start">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                type === "appointment" ? "bg-blue-100" : type === "service" ? "bg-orange-100" : "bg-green-100"
              }`}
            >
              {icon}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h4 className={`font-medium ${isUnread ? "text-gray-900" : "text-gray-700"}`}>{title}</h4>
                <div className="flex items-center">
                  {isUnread && <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>}
                  <p className="text-xs text-gray-500">{time}</p>
                </div>
              </div>
              <p className={`text-sm ${isUnread ? "text-gray-700" : "text-gray-500"}`}>{message}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
