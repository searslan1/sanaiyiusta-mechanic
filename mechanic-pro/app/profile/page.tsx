import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, LogOut, Settings, Car, Wrench, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="container px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profil</h1>

      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 relative">
          <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1.5">
            <Edit className="w-4 h-4 text-white" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Ahmet Yılmaz</h2>
        <p className="text-sm text-gray-600">ahmet.yilmaz@example.com</p>
        <p className="text-sm text-gray-600">+90 555 123 4567</p>
      </div>

      <Tabs defaultValue="personal">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="personal">Kişisel</TabsTrigger>
          <TabsTrigger value="garage">Garajım</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-4">Kişisel Bilgiler</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500">Ad Soyad</p>
                  <p className="text-sm font-medium">Ahmet Yılmaz</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">E-posta</p>
                  <p className="text-sm font-medium">ahmet.yilmaz@example.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Telefon</p>
                  <p className="text-sm font-medium">+90 555 123 4567</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Adres</p>
                  <p className="text-sm font-medium">Acıbadem Mah. Tekin Sok. No:5 D:3</p>
                  <p className="text-sm font-medium">Kadıköy, İstanbul</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Edit className="w-4 h-4 mr-2" />
                Bilgileri Düzenle
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-4">Hesap Güvenliği</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Şifre Değiştir</p>
                    <p className="text-xs text-gray-500">En son 3 ay önce değiştirildi</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Değiştir
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">İki Faktörlü Doğrulama</p>
                    <p className="text-xs text-gray-500">Hesabınızı daha güvenli hale getirin</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Aktifleştir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Link href="/profile/settings">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <Settings className="w-4 h-4 mr-2" />
              Ayarlar
            </Button>
          </Link>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Çıkış Yap
          </Button>
        </TabsContent>

        <TabsContent value="garage" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">Araçlarım</h3>
            <Link href="/add-vehicle">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <span className="text-lg">+</span> Araç Ekle
              </Button>
            </Link>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                  <Car className="w-8 h-8 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Volkswagen Golf</h4>
                  <p className="text-sm text-gray-500">34 ABC 123 • 2020 • Benzin</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                  <Car className="w-8 h-8 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">BMW 3 Serisi</h4>
                  <p className="text-sm text-gray-500">34 XYZ 789 • 2019 • Dizel</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="font-medium text-gray-900 mb-4">Servis Geçmişi</h3>
            <div className="space-y-4">
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
            </div>
            <Link href="/service-history">
              <Button variant="outline" className="w-full mt-4">
                Tüm Servis Geçmişini Gör
              </Button>
            </Link>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-gray-900 mb-4">Hatırlatıcılar</h3>
            <div className="space-y-4">
              <ReminderCard title="Periyodik Bakım" date="15 Temmuz 2023" daysLeft={30} />
              <ReminderCard title="Muayene" date="10 Haziran 2024" daysLeft={365} />
            </div>
            <Button variant="outline" className="w-full mt-4">
              Hatırlatıcı Ekle
            </Button>
          </div>
        </TabsContent>
      </Tabs>
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
