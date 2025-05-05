import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Car, Clock, Settings, Wrench } from "lucide-react"
import Link from "next/link"

export default function GaragePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Garajım</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        <div className="mb-6">
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                  <Car className="w-10 h-10 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">Volkswagen Golf</h3>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">34 ABC 123 • 2020 • Benzin</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Kilometre</p>
                      <p className="text-sm font-medium">45.230</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Son Bakım</p>
                      <p className="text-sm font-medium">3 ay önce</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Sonraki Bakım</p>
                      <p className="text-sm font-medium">2 ay sonra</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <span className="text-lg">+</span> Araç Ekle
          </Button>
        </div>

        <Tabs defaultValue="history">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="history">Servis Geçmişi</TabsTrigger>
            <TabsTrigger value="documents">Belgeler</TabsTrigger>
            <TabsTrigger value="reminders">Hatırlatıcılar</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            <ServiceHistoryCard
              date="15 Şubat 2023"
              service="Periyodik Bakım"
              description="Yağ, filtre değişimi ve genel kontrol"
              price="₺1,250"
              mechanic="Mehmet Usta"
            />

            <ServiceHistoryCard
              date="10 Kasım 2022"
              service="Fren Bakımı"
              description="Ön balata değişimi ve fren hidroliği kontrolü"
              price="₺850"
              mechanic="Ali Usta"
            />

            <ServiceHistoryCard
              date="5 Ağustos 2022"
              service="Klima Bakımı"
              description="Klima gazı dolumu ve sistem kontrolü"
              price="₺600"
              mechanic="Hasan Usta"
            />

            <ServiceHistoryCard
              date="20 Mayıs 2022"
              service="Periyodik Bakım"
              description="Yağ, filtre değişimi ve genel kontrol"
              price="₺1,200"
              mechanic="Mehmet Usta"
            />
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <DocumentCard title="Ruhsat" type="PDF" date="12 Ocak 2020" />

            <DocumentCard title="Trafik Sigortası" type="PDF" date="5 Mart 2023" />

            <DocumentCard title="Kasko" type="PDF" date="5 Mart 2023" />

            <DocumentCard title="Muayene Belgesi" type="PDF" date="10 Haziran 2022" />

            <Button variant="outline" className="w-full">
              Belge Ekle
            </Button>
          </TabsContent>

          <TabsContent value="reminders" className="space-y-4">
            <ReminderCard title="Periyodik Bakım" date="15 Temmuz 2023" daysLeft={30} />

            <ReminderCard title="Muayene" date="10 Haziran 2024" daysLeft={365} />

            <ReminderCard title="Sigorta Yenileme" date="5 Mart 2024" daysLeft={270} />

            <Button variant="outline" className="w-full">
              Hatırlatıcı Ekle
            </Button>
          </TabsContent>
        </Tabs>
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
}

function ServiceHistoryCard({ date, service, description, price, mechanic }: ServiceHistoryCardProps) {
  return (
    <Card>
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
              <Clock className="w-3 h-3 mr-1" />
              <span>{date}</span>
              <span className="mx-1">•</span>
              <span>{mechanic}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface DocumentCardProps {
  title: string
  type: string
  date: string
}

function DocumentCard({ title, type, date }: DocumentCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
            <span className="text-xs font-medium text-gray-700">{type}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{title}</h4>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
          <Button variant="ghost" size="sm">
            Görüntüle
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface ReminderCardProps {
  title: string
  date: string
  daysLeft: number
}

function ReminderCard({ title, date, daysLeft }: ReminderCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
            <Calendar className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{title}</h4>
            <div className="flex items-center mt-1">
              <p className="text-xs text-gray-500">{date}</p>
              <span className="mx-1">•</span>
              <span className="text-xs font-medium text-orange-600">{daysLeft} gün kaldı</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Düzenle
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
