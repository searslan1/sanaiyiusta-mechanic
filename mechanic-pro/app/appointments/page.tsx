"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Filter, MapPin, Plus, Search, Star, CheckCircle, AlertCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function AppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container px-4 py-6 pb-20 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Randevularım</h1>
        <Link href="/appointments/book">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
            <Plus className="w-4 h-4" />
            Randevu Oluştur
          </Button>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Randevu ara..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setSearchQuery("")}
            >
              <XCircle className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filtrele
          </Button>
        </div>
      </div>

      {/* Appointments Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 p-1 bg-gray-100 rounded-lg">
          <TabsTrigger
            value="upcoming"
            className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
          >
            Yaklaşan
          </TabsTrigger>
          <TabsTrigger
            value="past"
            className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
          >
            Geçmiş
          </TabsTrigger>
          <TabsTrigger
            value="canceled"
            className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
          >
            İptal Edilen
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 animate-in fade-in-50 duration-200">
          <AppointmentCard
            id="apt-20230515"
            date="15 Mayıs 2023"
            time="14:30"
            service="Periyodik Bakım"
            mechanic="Mehmet Usta"
            location="Kadıköy, İstanbul"
            status="confirmed"
          />

          <AppointmentCard
            id="apt-20230522"
            date="22 Mayıs 2023"
            time="10:00"
            service="Fren Bakımı"
            mechanic="Ali Usta"
            location="Üsküdar, İstanbul"
            status="pending"
          />

          <AppointmentCard
            id="apt-20230605"
            date="5 Haziran 2023"
            time="16:15"
            service="Klima Bakımı"
            mechanic="Hasan Usta"
            location="Beşiktaş, İstanbul"
            status="confirmed"
          />
        </TabsContent>

        <TabsContent value="past" className="space-y-4 animate-in fade-in-50 duration-200">
          <AppointmentCard
            id="apt-20230410"
            date="10 Nisan 2023"
            time="11:30"
            service="Yağ Değişimi"
            mechanic="Mehmet Usta"
            location="Kadıköy, İstanbul"
            status="completed"
            hasReviewed={false}
          />

          <AppointmentCard
            id="apt-20230325"
            date="25 Mart 2023"
            time="09:45"
            service="Akü Değişimi"
            mechanic="Osman Usta"
            location="Şişli, İstanbul"
            status="completed"
            hasReviewed={true}
          />

          <AppointmentCard
            id="apt-20230212"
            date="12 Şubat 2023"
            time="14:00"
            service="Periyodik Bakım"
            mechanic="Ahmet Usta"
            location="Kadıköy, İstanbul"
            status="completed"
            hasReviewed={true}
          />
        </TabsContent>

        <TabsContent value="canceled" className="space-y-4 animate-in fade-in-50 duration-200">
          <AppointmentCard
            id="apt-20230405"
            date="5 Nisan 2023"
            time="15:30"
            service="Lastik Değişimi"
            mechanic="Ali Usta"
            location="Üsküdar, İstanbul"
            status="canceled"
            originalDetails={{
              service: "Lastik Değişimi",
              vehicle: "Volkswagen Golf (34 ABC 123)",
              mechanic: "Ali Usta",
              location: "Üsküdar, İstanbul",
              notes: "Dört lastik değişimi yapılacak.",
            }}
          />

          <AppointmentCard
            id="apt-20230318"
            date="18 Mart 2023"
            time="10:15"
            service="Far Ayarı"
            mechanic="Hasan Usta"
            location="Beşiktaş, İstanbul"
            status="canceled"
            originalDetails={{
              service: "Far Ayarı",
              vehicle: "BMW 3 Serisi (34 XYZ 789)",
              mechanic: "Hasan Usta",
              location: "Beşiktaş, İstanbul",
              notes: "Far ayarı ve ampul değişimi yapılacak.",
            }}
          />
        </TabsContent>
      </Tabs>

      {/* Empty State with New Appointment Button */}
      {false && (
        <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg border border-dashed border-gray-300 mt-6">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <Calendar className="w-10 h-10 text-blue-500" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2 text-lg">Henüz randevunuz yok</h3>
          <p className="text-gray-500 mb-6 max-w-md">
            Aracınız için servis randevusu oluşturarak bakım ve onarım işlemlerinizi planlayabilirsiniz.
          </p>
          <Link href="/appointments/book">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
              <Plus className="w-4 h-4" />
              Randevu Oluştur
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

interface AppointmentCardProps {
  id: string
  date: string
  time: string
  service: string
  mechanic: string
  location: string
  status: "confirmed" | "pending" | "completed" | "canceled"
  hasReviewed?: boolean
  originalDetails?: {
    service: string
    vehicle: string
    mechanic: string
    location: string
    notes: string
  }
}

function AppointmentCard({
  id,
  date,
  time,
  service,
  mechanic,
  location,
  status,
  hasReviewed,
  originalDetails,
}: AppointmentCardProps) {
  const getStatusInfo = () => {
    switch (status) {
      case "confirmed":
        return {
          color: "bg-green-100 text-green-700 border-green-200",
          icon: <CheckCircle className="w-4 h-4 mr-1" />,
          text: "Onaylandı",
          bgColor: "bg-green-50",
          borderColor: "hover:border-green-300",
        }
      case "pending":
        return {
          color: "bg-yellow-100 text-yellow-700 border-yellow-200",
          icon: <AlertCircle className="w-4 h-4 mr-1" />,
          text: "Onay Bekliyor",
          bgColor: "bg-yellow-50",
          borderColor: "hover:border-yellow-300",
        }
      case "completed":
        return {
          color: "bg-blue-100 text-blue-700 border-blue-200",
          icon: <CheckCircle className="w-4 h-4 mr-1" />,
          text: "Tamamlandı",
          bgColor: "bg-blue-50",
          borderColor: "hover:border-blue-300",
        }
      case "canceled":
        return {
          color: "bg-red-100 text-red-700 border-red-200",
          icon: <XCircle className="w-4 h-4 mr-1" />,
          text: "İptal Edildi",
          bgColor: "bg-red-50",
          borderColor: "hover:border-red-300",
        }
      default:
        return {
          color: "bg-gray-100 text-gray-700 border-gray-200",
          icon: null,
          text: "",
          bgColor: "bg-white",
          borderColor: "hover:border-gray-300",
        }
    }
  }

  const statusInfo = getStatusInfo()
  const isUpcoming = status === "confirmed" || status === "pending"

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md",
        statusInfo.borderColor,
        status === "canceled" ? "opacity-80" : "",
      )}
    >
      <div
        className={cn(
          "h-1",
          status === "confirmed"
            ? "bg-green-500"
            : status === "pending"
              ? "bg-yellow-500"
              : status === "completed"
                ? "bg-blue-500"
                : "bg-red-500",
        )}
      ></div>
      <CardContent className="p-0">
        <div className="flex items-start p-4">
          <div className={cn("flex flex-col items-center mr-4 p-2 rounded-lg", statusInfo.bgColor)}>
            <div className="text-2xl font-bold text-gray-900">{date.split(" ")[0]}</div>
            <span className="text-sm text-gray-600">{date.split(" ")[1]}</span>
            <span className="text-xs text-gray-500 mt-1">2023</span>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-gray-900 text-lg">{service}</h4>
                <div className="flex items-center mt-1">
                  <User className="w-3 h-3 text-gray-500 mr-1" />
                  <p className="text-sm text-gray-600">{mechanic}</p>
                </div>
              </div>
              <div className={cn("px-3 py-1 rounded-full flex items-center text-xs font-medium", statusInfo.color)}>
                {statusInfo.icon}
                {statusInfo.text}
              </div>
            </div>
            <div className="flex items-center mt-3 text-xs text-gray-500 space-x-4">
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span>{time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {status === "completed" && !hasReviewed && (
              <span className="text-blue-600 flex items-center">
                <Star className="w-3 h-3 mr-1 fill-blue-600" />
                Değerlendirme bekleniyor
              </span>
            )}
            {status === "completed" && hasReviewed && (
              <span className="text-green-600 flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Değerlendirildi
              </span>
            )}
            {status === "canceled" && <span className="text-gray-600">İptal edildi</span>}
            {isUpcoming && (
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {status === "confirmed" ? "Randevu onaylandı" : "Onay bekleniyor"}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {isUpcoming && (
              <>
                <Link href={`/appointments/reschedule/${id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 rounded-lg border-gray-300 hover:bg-gray-50"
                  >
                    Yeniden Planla
                  </Button>
                </Link>
                <Link href={`/appointments/${id}`}>
                  <Button size="sm" className="text-xs h-8 rounded-lg bg-blue-600 hover:bg-blue-700">
                    Yönet
                  </Button>
                </Link>
              </>
            )}
            {status === "completed" && (
              <>
                <Link href={`/appointments/${id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 rounded-lg border-gray-300 hover:bg-gray-50"
                  >
                    Detaylar
                  </Button>
                </Link>
                {!hasReviewed && (
                  <Link href={`/appointments/review/${id}`}>
                    <Button
                      size="sm"
                      className="text-xs h-8 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Değerlendir
                    </Button>
                  </Link>
                )}
              </>
            )}
            {status === "canceled" && (
              <>
                <Link href={`/appointments/${id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 rounded-lg border-gray-300 hover:bg-gray-50"
                  >
                    Detaylar
                  </Button>
                </Link>
                <Link
                  href={{
                    pathname: "/appointments/book",
                    query: {
                      rebookFrom: id,
                      service: originalDetails?.service,
                      mechanic: originalDetails?.mechanic,
                      location: originalDetails?.location,
                      notes: originalDetails?.notes,
                    },
                  }}
                >
                  <Button size="sm" className="text-xs h-8 rounded-lg bg-blue-600 hover:bg-blue-700">
                    Yeniden Oluştur
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function User(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
