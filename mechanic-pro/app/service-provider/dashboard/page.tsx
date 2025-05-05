import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MessageSquare, Search, User, Wrench, Bell } from "lucide-react"
import Link from "next/link"

export default function ServiceProviderDashboardPage() {
  return (
    <div className="container px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Usta Paneli</h1>
        <Link href="/notifications/mechanic">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-3 text-center">
            <h3 className="text-3xl font-bold text-blue-600">5</h3>
            <p className="text-xs text-gray-500">Yeni Talepler</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 text-center">
            <h3 className="text-3xl font-bold text-green-600">8</h3>
            <p className="text-xs text-gray-500">Bugünkü Randevular</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 text-center">
            <h3 className="text-3xl font-bold text-yellow-600">4.8</h3>
            <p className="text-xs text-gray-500">Ortalama Puan</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="requests">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="requests">Talepler</TabsTrigger>
          <TabsTrigger value="appointments">Randevular</TabsTrigger>
          <TabsTrigger value="messages">Mesajlar</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">Yeni Servis Talepleri</h3>
            <Link href="/service-provider/requests">
              <Button variant="ghost" size="sm" className="text-blue-600">
                Tümünü Gör
              </Button>
            </Link>
          </div>

          <ServiceRequestCard
            name="Ahmet Yılmaz"
            vehicle="Volkswagen Golf"
            service="Yağ Değişimi"
            date="Bugün"
            time="10:30"
            isNew={true}
          />

          <ServiceRequestCard
            name="Mehmet Kaya"
            vehicle="BMW 3 Serisi"
            service="Fren Bakımı"
            date="Dün"
            time="15:45"
            isNew={true}
          />

          <ServiceRequestCard
            name="Ayşe Türk"
            vehicle="Toyota Corolla"
            service="Akü Değişimi"
            date="2 gün önce"
            time="09:15"
            isNew={false}
          />
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">Bugünkü Randevular</h3>
            <Link href="/service-provider/appointments">
              <Button variant="ghost" size="sm" className="text-blue-600">
                Tümünü Gör
              </Button>
            </Link>
          </div>

          <AppointmentCard
            name="Fatma Şahin"
            vehicle="Volkswagen Passat"
            service="Periyodik Bakım"
            time="09:00"
            status="completed"
          />

          <AppointmentCard name="Ali Rıza" vehicle="Audi A3" service="Klima Bakımı" time="11:30" status="active" />

          <AppointmentCard
            name="Zeynep Kara"
            vehicle="Mercedes C180"
            service="Yağ Değişimi"
            time="14:00"
            status="upcoming"
          />

          <AppointmentCard
            name="Mustafa Bey"
            vehicle="BMW 5 Serisi"
            service="Fren Bakımı"
            time="16:30"
            status="upcoming"
          />
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Mesaj ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link href="/messages/ahmet-yilmaz">
            <Card className="hover:border-blue-300 transition-colors border-l-4 border-l-blue-600">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">Ahmet Yılmaz</h4>
                      <p className="text-xs text-gray-500">10 dk önce</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">Hangi marka yağ kullanıyorsunuz?</p>
                      <span className="w-5 h-5 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/messages/mehmet-kaya">
            <Card className="hover:border-blue-300 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">Mehmet Kaya</h4>
                      <p className="text-xs text-gray-500">1 saat önce</p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">Teşekkürler, randevumu onaylayabilir misiniz?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ServiceRequestCardProps {
  name: string
  vehicle: string
  service: string
  date: string
  time: string
  isNew: boolean
}

function ServiceRequestCard({ name, vehicle, service, date, time, isNew }: ServiceRequestCardProps) {
  return (
    <Card className={`hover:border-blue-300 transition-colors ${isNew ? "border-l-4 border-l-blue-600" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <Wrench className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">{service}</h4>
              {isNew && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Yeni</span>}
            </div>
            <p className="text-sm text-gray-600">{vehicle}</p>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <User className="w-3 h-3 mr-1" />
              <span>{name}</span>
              <span className="mx-1">•</span>
              <Clock className="w-3 h-3 mr-1" />
              <span>
                {date}, {time}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mt-3">
          <Button variant="outline" size="sm" className="flex-1">
            <MessageSquare className="w-4 h-4 mr-1" />
            Mesaj
          </Button>
          <Button size="sm" className="flex-1">
            Yanıtla
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface AppointmentCardProps {
  name: string
  vehicle: string
  service: string
  time: string
  status: "upcoming" | "active" | "completed"
}

function AppointmentCard({ name, vehicle, service, time, status }: AppointmentCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-700"
      case "active":
        return "bg-green-100 text-green-700"
      case "completed":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "upcoming":
        return "Yaklaşan"
      case "active":
        return "Aktif"
      case "completed":
        return "Tamamlandı"
      default:
        return ""
    }
  }

  return (
    <Card className="hover:border-blue-300 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <Calendar className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">{service}</h4>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor()}`}>{getStatusText()}</span>
            </div>
            <p className="text-sm text-gray-600">{vehicle}</p>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <User className="w-3 h-3 mr-1" />
              <span>{name}</span>
              <span className="mx-1">•</span>
              <Clock className="w-3 h-3 mr-1" />
              <span>{time}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mt-3">
          <Button variant="outline" size="sm" className="flex-1">
            <MessageSquare className="w-4 h-4 mr-1" />
            Mesaj
          </Button>
          <Button size="sm" className="flex-1" disabled={status === "completed"}>
            {status === "completed" ? "Tamamlandı" : status === "active" ? "Tamamla" : "Başlat"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
