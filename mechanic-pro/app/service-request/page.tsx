import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Plus, Search, Wrench, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ServiceRequestsPage() {
  return (
    <div className="container px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Servis Talepleri</h1>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Servis talebi ara..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtrele
          </Button>

          <Link href="/service-request/new">
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Yeni Talep
            </Button>
          </Link>
        </div>
      </div>

      {/* Service Requests Tabs */}
      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="active">Aktif</TabsTrigger>
          <TabsTrigger value="pending">Bekleyen</TabsTrigger>
          <TabsTrigger value="completed">Tamamlanan</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <ServiceRequestCard
            id="SR-2023-001"
            title="Motor Yağı Değişimi"
            description="Volkswagen Golf için yağ ve filtre değişimi"
            date="15 Mayıs 2023"
            status="active"
            responseCount={3}
          />

          <ServiceRequestCard
            id="SR-2023-002"
            title="Fren Balata Değişimi"
            description="Ön ve arka balataların değişimi"
            date="18 Mayıs 2023"
            status="active"
            responseCount={2}
          />
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <ServiceRequestCard
            id="SR-2023-003"
            title="Klima Bakımı"
            description="Klima gazı dolumu ve sistem kontrolü"
            date="20 Mayıs 2023"
            status="pending"
            responseCount={0}
          />

          <ServiceRequestCard
            id="SR-2023-004"
            title="Akü Değişimi"
            description="Yeni akü takılması ve şarj sistemi kontrolü"
            date="22 Mayıs 2023"
            status="pending"
            responseCount={0}
          />
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <ServiceRequestCard
            id="SR-2023-005"
            title="Lastik Değişimi"
            description="4 adet yaz lastiği değişimi"
            date="10 Nisan 2023"
            status="completed"
            responseCount={5}
          />

          <ServiceRequestCard
            id="SR-2023-006"
            title="Periyodik Bakım"
            description="10.000 km bakımı"
            date="25 Mart 2023"
            status="completed"
            responseCount={4}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ServiceRequestCardProps {
  id: string
  title: string
  description: string
  date: string
  status: "active" | "pending" | "completed"
  responseCount: number
}

function ServiceRequestCard({ id, title, description, date, status, responseCount }: ServiceRequestCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "completed":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "active":
        return "Aktif"
      case "pending":
        return "Beklemede"
      case "completed":
        return "Tamamlandı"
      default:
        return ""
    }
  }

  return (
    <Link href={`/service-request/${id}`}>
      <Card className="hover:border-blue-300 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Wrench className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{title}</h4>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor()}`}>{getStatusText()}</span>
              </div>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{date}</span>
                <span className="mx-2">•</span>
                <span>{id}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 text-gray-500 mr-1" />
              <span className="text-xs text-gray-500">{responseCount} yanıt</span>
            </div>
            <Button size="sm">{status === "completed" ? "Detaylar" : "Yanıtları Gör"}</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
