import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Clock, Download, Filter, Search, Wrench } from "lucide-react"
import Link from "next/link"

export default function ServiceHistoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Servis Geçmişi</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        {/* Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Servis kaydı ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Araç" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Araçlar</SelectItem>
                <SelectItem value="volkswagen">Volkswagen Golf</SelectItem>
                <SelectItem value="bmw">BMW 3 Serisi</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Servis Tipi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Servisler</SelectItem>
                <SelectItem value="maintenance">Periyodik Bakım</SelectItem>
                <SelectItem value="repair">Onarım</SelectItem>
                <SelectItem value="emergency">Acil Servis</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Service History List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700">2023</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              <Download className="w-4 h-4 mr-1" />
              Dışa Aktar
            </Button>
          </div>

          <ServiceHistoryCard
            date="15 Aralık 2023"
            service="Kış Bakımı"
            description="Antifriz kontrolü, akü testi, lastik değişimi"
            price="₺1,850"
            mechanic="Mehmet Usta"
            location="Kadıköy, İstanbul"
            id="SRV-2023-12-15"
          />

          <ServiceHistoryCard
            date="20 Eylül 2023"
            service="Periyodik Bakım"
            description="Yağ, filtre değişimi ve genel kontrol"
            price="₺1,350"
            mechanic="Ahmet Usta"
            location="Ataşehir, İstanbul"
            id="SRV-2023-09-20"
          />

          <ServiceHistoryCard
            date="5 Haziran 2023"
            service="Klima Bakımı"
            description="Klima gazı dolumu ve sistem kontrolü"
            price="₺750"
            mechanic="Hasan Usta"
            location="Üsküdar, İstanbul"
            id="SRV-2023-06-05"
          />

          <ServiceHistoryCard
            date="15 Şubat 2023"
            service="Fren Sistemi Onarımı"
            description="Ön balata değişimi ve fren hidroliği kontrolü"
            price="₺950"
            mechanic="Ali Usta"
            location="Beşiktaş, İstanbul"
            id="SRV-2023-02-15"
          />

          <div className="mt-6 mb-4">
            <h3 className="text-sm font-medium text-gray-700">2022</h3>
          </div>

          <ServiceHistoryCard
            date="10 Kasım 2022"
            service="Periyodik Bakım"
            description="Yağ, filtre değişimi ve genel kontrol"
            price="₺1,200"
            mechanic="Mehmet Usta"
            location="Kadıköy, İstanbul"
            id="SRV-2022-11-10"
          />

          <ServiceHistoryCard
            date="5 Ağustos 2022"
            service="Süspansiyon Kontrolü"
            description="Amortisör ve rotil kontrolü"
            price="₺600"
            mechanic="Osman Usta"
            location="Şişli, İstanbul"
            id="SRV-2022-08-05"
          />

          <ServiceHistoryCard
            date="20 Mayıs 2022"
            service="Akü Değişimi"
            description="Akü değişimi ve şarj sistemi kontrolü"
            price="₺850"
            mechanic="Hasan Usta"
            location="Üsküdar, İstanbul"
            id="SRV-2022-05-20"
          />
        </div>
      </main>
    </div>
  )
}

interface ServiceHistoryCardProps {
  date: string
  service: string
  description: string
  price: string
  mechanic: string
  location: string
  id: string
}

function ServiceHistoryCard({ date, service, description, price, mechanic, location, id }: ServiceHistoryCardProps) {
  return (
    <Link href={`/service-history/${id}`}>
      <Card className="hover:border-blue-300 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Wrench className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{service}</h4>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
                <p className="text-sm font-medium">{price}</p>
              </div>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{date}</span>
                <span className="mx-1">•</span>
                <span>{mechanic}</span>
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>{location}</span>
                <span className="mx-1">•</span>
                <span className="text-blue-600">#{id}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
