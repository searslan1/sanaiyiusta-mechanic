import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Car, MessageSquare, Star } from "lucide-react"
import Link from "next/link"

export default function TeklifDetailPage({ params }: { params: { id: string } }) {
  const teklifId = params.id

  return (
    <div className="container px-4 py-6 pb-20">
      <div className="flex items-center mb-6">
        <Link href="/teklif-ver" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Teklif Detayı</h1>
      </div>

      {/* Request Status */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-900">Motor Yağı Değişimi</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">Aktif</span>
          </div>

          <p className="text-sm text-gray-600 mb-4">Volkswagen Golf için yağ ve filtre değişimi</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-500">Teklif Numarası</p>
              <p className="text-sm font-medium">{teklifId}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Oluşturulma Tarihi</p>
              <p className="text-sm font-medium">15 Mayıs 2023</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Aciliyet</p>
              <p className="text-sm font-medium">Normal (1-3 gün)</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Bütçe</p>
              <p className="text-sm font-medium">₺1,000</p>
            </div>
          </div>

          <div className="flex items-center pt-4 border-t">
            <Car className="w-5 h-5 text-gray-500 mr-2" />
            <div>
              <p className="text-sm font-medium">Volkswagen Golf (34 ABC 123)</p>
              <p className="text-xs text-gray-500">45,230 km • 2020 • Benzin</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responses */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-4">Ustalardan Teklifler (3)</h3>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">Tümü</TabsTrigger>
            <TabsTrigger value="new">Yeni</TabsTrigger>
            <TabsTrigger value="accepted">Kabul Edilenler</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <MechanicResponseCard
              name="Mehmet Usta"
              rating={4.8}
              responseTime="2 saat önce"
              price="₺650"
              estimatedTime="1 saat"
              message="Aracınız için en kaliteli yağ ve filtreleri kullanarak servis sağlayabilirim. İsterseniz aynı gün içinde işlemi tamamlayabilirim."
              isNew={true}
            />

            <MechanicResponseCard
              name="Ali Usta"
              rating={4.6}
              responseTime="3 saat önce"
              price="₺600"
              estimatedTime="1.5 saat"
              message="Tam sentetik yağ ve orijinal filtre ile değişim yapabilirim. Aracınızın diğer sıvılarını da ücretsiz kontrol ederim."
              isNew={false}
            />

            <MechanicResponseCard
              name="Hasan Usta"
              rating={4.7}
              responseTime="5 saat önce"
              price="₺700"
              estimatedTime="1 saat"
              message="Premium kalite yağ ve filtre kullanıyorum. Ayrıca genel kontrol de ücretsiz olarak yapılacaktır."
              isNew={false}
            />
          </TabsContent>

          <TabsContent value="new" className="space-y-4">
            <MechanicResponseCard
              name="Mehmet Usta"
              rating={4.8}
              responseTime="2 saat önce"
              price="₺650"
              estimatedTime="1 saat"
              message="Aracınız için en kaliteli yağ ve filtreleri kullanarak servis sağlayabilirim. İsterseniz aynı gün içinde işlemi tamamlayabilirim."
              isNew={true}
            />
          </TabsContent>

          <TabsContent value="accepted" className="space-y-4">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-gray-500">Henüz kabul edilmiş teklif bulunmuyor.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        <Button variant="outline" className="flex-1">
          Talebi İptal Et
        </Button>
        <Button className="flex-1">Talebi Düzenle</Button>
      </div>
    </div>
  )
}

interface MechanicResponseCardProps {
  name: string
  rating: number
  responseTime: string
  price: string
  estimatedTime: string
  message: string
  isNew: boolean
}

function MechanicResponseCard({
  name,
  rating,
  responseTime,
  price,
  estimatedTime,
  message,
  isNew,
}: MechanicResponseCardProps) {
  return (
    <Card className={`${isNew ? "border-blue-300 bg-blue-50" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h4 className="font-medium text-gray-900">{name}</h4>
                {isNew && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Yeni</span>}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="text-sm">{rating}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-1">{responseTime}</p>

            <div className="flex items-center justify-between mt-3 mb-3">
              <div>
                <p className="text-xs text-gray-500">Fiyat Teklifi</p>
                <p className="text-base font-medium text-blue-600">{price}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Tahmini Süre</p>
                <p className="text-sm">{estimatedTime}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 border-t pt-3">{message}</p>

            <div className="flex space-x-2 mt-4">
              <Link href={`/mechanic-profile/${name.replace(" ", "-").toLowerCase()}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Profili Gör
                </Button>
              </Link>
              <Link href={`/messages/${name.replace(" ", "-").toLowerCase()}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Mesaj Gönder
                </Button>
              </Link>
              <Button size="sm" className="flex-1">
                Kabul Et
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
