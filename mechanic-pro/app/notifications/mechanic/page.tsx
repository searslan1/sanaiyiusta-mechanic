import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Check, ShoppingBag, Wrench, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function MechanicNotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Bildirimler (Usta)</h1>
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
            <TabsTrigger value="requests">Talepler</TabsTrigger>
            <TabsTrigger value="appointments">Randevular</TabsTrigger>
            <TabsTrigger value="messages">Mesajlar</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <NotificationCard
              icon={<Wrench className="w-5 h-5 text-blue-600" />}
              title="Yeni Servis Talebi"
              message="Ahmet Y. yağ değişimi için servis talebi oluşturdu."
              time="30 dk önce"
              isUnread={true}
              type="request"
              id="SR-2023-007"
            />

            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-green-600" />}
              title="Yeni Randevu"
              message="Mehmet K. 25 Mayıs 14:30'da periyodik bakım için randevu aldı."
              time="2 saat önce"
              isUnread={true}
              type="appointment"
              id="AP-2023-045"
            />

            <NotificationCard
              icon={<MessageSquare className="w-5 h-5 text-purple-600" />}
              title="Yeni Mesaj"
              message="Ayşe T. size bir mesaj gönderdi: 'Aracımın fren sistemi ile ilgili bilgi almak istiyorum.'"
              time="3 saat önce"
              isUnread={true}
              type="message"
              id="ayse-t"
            />

            <NotificationCard
              icon={<Check className="w-5 h-5 text-green-600" />}
              title="Tamamlanan Servis"
              message="Fatma S.'nin aracının periyodik bakımı tamamlandı."
              time="1 gün önce"
              isUnread={false}
              type="service"
              id="SR-2023-006"
            />

            <NotificationCard
              icon={<ShoppingBag className="w-5 h-5 text-orange-600" />}
              title="Yeni Kampanya Fırsatı"
              message="Yaz bakım paketinizi müşterilerinize tanıtın."
              time="2 gün önce"
              isUnread={false}
              type="offer"
              id="CP-2023-012"
            />
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            <NotificationCard
              icon={<Wrench className="w-5 h-5 text-blue-600" />}
              title="Yeni Servis Talebi"
              message="Ahmet Y. yağ değişimi için servis talebi oluşturdu."
              time="30 dk önce"
              isUnread={true}
              type="request"
              id="SR-2023-007"
            />

            <NotificationCard
              icon={<Wrench className="w-5 h-5 text-blue-600" />}
              title="Yeni Servis Talebi"
              message="Mustafa B. fren bakımı için servis talebi oluşturdu."
              time="1 gün önce"
              isUnread={false}
              type="request"
              id="SR-2023-005"
            />

            <NotificationCard
              icon={<Wrench className="w-5 h-5 text-blue-600" />}
              title="Yeni Servis Talebi"
              message="Zeynep K. akü değişimi için servis talebi oluşturdu."
              time="3 gün önce"
              isUnread={false}
              type="request"
              id="SR-2023-004"
            />
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-green-600" />}
              title="Yeni Randevu"
              message="Mehmet K. 25 Mayıs 14:30'da periyodik bakım için randevu aldı."
              time="2 saat önce"
              isUnread={true}
              type="appointment"
              id="AP-2023-045"
            />

            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-green-600" />}
              title="Randevu İptal"
              message="Ali R. 20 Mayıs tarihli randevusunu iptal etti."
              time="1 gün önce"
              isUnread={false}
              type="appointment"
              id="AP-2023-042"
            />

            <NotificationCard
              icon={<Calendar className="w-5 h-5 text-green-600" />}
              title="Randevu Hatırlatıcısı"
              message="Yarın 3 randevunuz bulunmaktadır."
              time="2 gün önce"
              isUnread={false}
              type="appointment"
              id="reminder"
            />
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <NotificationCard
              icon={<MessageSquare className="w-5 h-5 text-purple-600" />}
              title="Yeni Mesaj"
              message="Ayşe T. size bir mesaj gönderdi: 'Aracımın fren sistemi ile ilgili bilgi almak istiyorum.'"
              time="3 saat önce"
              isUnread={true}
              type="message"
              id="ayse-t"
            />

            <NotificationCard
              icon={<MessageSquare className="w-5 h-5 text-purple-600" />}
              title="Yeni Mesaj"
              message="Mehmet K. size bir mesaj gönderdi: 'Randevumu onayladığınız için teşekkürler.'"
              time="1 gün önce"
              isUnread={false}
              type="message"
              id="mehmet-k"
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
  type: "request" | "appointment" | "message" | "service" | "offer"
  id: string
}

function NotificationCard({ icon, title, message, time, isUnread, type, id }: NotificationCardProps) {
  let href = "/"

  switch (type) {
    case "request":
      href = `/service-request/${id}`
      break
    case "appointment":
      href = `/appointments/${id}`
      break
    case "message":
      href = `/messages/${id}`
      break
    case "service":
      href = `/service-history/${id}`
      break
    case "offer":
      href = `/campaigns/${id}`
      break
  }

  return (
    <Link href={href}>
      <Card className={`hover:border-blue-300 transition-colors ${isUnread ? "border-l-4 border-l-blue-600" : ""}`}>
        <CardContent className="p-4">
          <div className="flex items-start">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                type === "request"
                  ? "bg-blue-100"
                  : type === "appointment"
                    ? "bg-green-100"
                    : type === "message"
                      ? "bg-purple-100"
                      : type === "service"
                        ? "bg-green-100"
                        : "bg-orange-100"
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
