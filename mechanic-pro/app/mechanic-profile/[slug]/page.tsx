import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Clock, MapPin, MessageSquare, Phone, Star, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"

export default function MechanicProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch the mechanic data based on the slug
  const mechanicName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/explore" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Usta Profili</h1>
      </div>

      {/* Mechanic Profile Header */}
      <div className="bg-white rounded-lg border p-4 mb-6">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mr-4"></div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900">{mechanicName}</h2>
            <p className="text-sm text-gray-600">Motor ve Şanzıman Uzmanı</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 text-sm font-medium">4.8</span>
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-600">124 değerlendirme</span>
            </div>
            <div className="flex items-center mt-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Kadıköy, İstanbul</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Link href={`/service-request/schedule/${params.slug}`}>
            <Button className="w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Randevu Al
            </Button>
          </Link>
          <Link href={`/messages/${params.slug}`}>
            <Button variant="outline" className="w-full">
              <MessageSquare className="w-4 h-4 mr-2" />
              Mesaj Gönder
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="about">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="about">Hakkında</TabsTrigger>
          <TabsTrigger value="services">Hizmetler</TabsTrigger>
          <TabsTrigger value="reviews">Yorumlar</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">Hakkında</h3>
              <p className="text-sm text-gray-600">
                20 yıllık tecrübemle özellikle Alman araçları konusunda uzmanlaşmış bir ustayım. Motor, şanzıman ve
                elektronik aksamlar konusunda detaylı bilgi ve tecrübeye sahibim. Müşteri memnuniyeti ve kaliteli iş
                benim için en önemli prensiptir.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">Uzmanlık Alanları</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Motor</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Şanzıman</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Elektronik</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Alman Araçlar</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Diagnostik</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">İletişim</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-sm">+90 555 123 4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm">Acıbadem Otomotiv</p>
                    <p className="text-xs text-gray-500">Kadıköy, İstanbul</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm">Çalışma Saatleri</p>
                    <p className="text-xs text-gray-500">Pazartesi - Cumartesi: 09:00 - 19:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <div className="space-y-4">
            <ServiceCard
              title="Motor Bakımı"
              description="Yağ, filtre değişimi ve genel kontrol"
              price="₺750 - ₺1,500"
              duration="2-4 saat"
            />

            <ServiceCard
              title="Şanzıman Bakımı"
              description="Yağ değişimi ve genel kontrol"
              price="₺1,000 - ₺2,500"
              duration="3-6 saat"
            />

            <ServiceCard
              title="Elektronik Arıza Tespiti"
              description="Diagnostik cihazla arıza tespiti"
              price="₺250"
              duration="30-60 dakika"
            />

            <ServiceCard
              title="Fren Sistemi Bakımı"
              description="Balata, disk değişimi ve hidrolik kontrolü"
              price="₺500 - ₺1,200"
              duration="1-3 saat"
            />

            <ServiceCard
              title="Süspansiyon Bakımı"
              description="Amortisör, rotil ve salıncak kontrolü"
              price="₺800 - ₺2,000"
              duration="2-5 saat"
            />
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-4">
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Değerlendirmeler</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">4.8</span>
                    <span className="text-sm text-gray-500 ml-1">(124)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-16 text-sm">5 yıldız</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                      <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="w-8 text-sm text-right">85%</span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-16 text-sm">4 yıldız</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                      <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                    <span className="w-8 text-sm text-right">10%</span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-16 text-sm">3 yıldız</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                      <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "3%" }}></div>
                    </div>
                    <span className="w-8 text-sm text-right">3%</span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-16 text-sm">2 yıldız</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                      <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "1%" }}></div>
                    </div>
                    <span className="w-8 text-sm text-right">1%</span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-16 text-sm">1 yıldız</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                      <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "1%" }}></div>
                    </div>
                    <span className="w-8 text-sm text-right">1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ReviewCard
              name="Ahmet Y."
              date="15 Nisan 2023"
              rating={5}
              serviceType="Motor Bakımı"
              comment="Çok profesyonel ve işinin ehli bir usta. Aracımın motor sorununu hızlıca tespit etti ve uygun fiyata çözdü. Kesinlikle tavsiye ederim."
            />

            <ReviewCard
              name="Mehmet K."
              date="2 Mart 2023"
              rating={5}
              serviceType="Şanzıman Bakımı"
              comment="Şanzıman sorunu yaşıyordum, birçok yere götürdüm çözemediler. Ahmet usta sorunu hemen buldu ve çözdü. Çok teşekkürler."
            />

            <ReviewCard
              name="Ayşe T."
              date="18 Şubat 2023"
              rating={4}
              serviceType="Elektronik Arıza Tespiti"
              comment="İşini iyi yapıyor, fiyatlar biraz yüksek ama kaliteli iş çıkarıyor. Tekrar tercih ederim."
            />

            <ReviewCard
              name="Fatma S."
              date="5 Ocak 2023"
              rating={5}
              serviceType="Elektronik Arıza Tespiti"
              comment="Aracımın elektronik sorununu çözdü. Çok ilgili ve bilgili bir usta. Teşekkürler."
            />

            <Button variant="outline" className="w-full">
              Tüm Yorumları Gör
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  price: string
  duration: string
}

function ServiceCard({ title, description, price, duration }: ServiceCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <Tool className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{title}</h4>
                <p className="text-xs text-gray-500">{description}</p>
              </div>
              <p className="text-sm font-medium">{price}</p>
            </div>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface ReviewCardProps {
  name: string
  date: string
  rating: number
  comment: string
  serviceType?: string
}

function ReviewCard({ name, date, rating, comment, serviceType }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
        {serviceType && <p className="text-xs text-blue-600 mb-1">Hizmet: {serviceType}</p>}
        <p className="text-sm text-gray-600">{comment}</p>
      </CardContent>
    </Card>
  )
}
