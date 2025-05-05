import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Filter, MapPin, Search, Star } from "lucide-react"
import Link from "next/link"

export default function FindMechanicPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Usta Bul</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input placeholder="Usta veya hizmet ara..." className="pl-10" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select defaultValue="istanbul">
              <SelectTrigger>
                <SelectValue placeholder="Şehir" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="istanbul">İstanbul</SelectItem>
                <SelectItem value="ankara">Ankara</SelectItem>
                <SelectItem value="izmir">İzmir</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="İş Kolu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tümü</SelectItem>
                <SelectItem value="mechanic">Motor</SelectItem>
                <SelectItem value="electric">Elektrik</SelectItem>
                <SelectItem value="body">Kaporta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtrele
            </Button>

            <Tabs defaultValue="rating">
              <TabsList className="grid w-[200px] grid-cols-2">
                <TabsTrigger value="rating">Puan</TabsTrigger>
                <TabsTrigger value="distance">Mesafe</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Mechanics List */}
        <div className="space-y-4">
          <MechanicCard
            name="Ahmet Usta"
            specialty="Motor ve Şanzıman Uzmanı"
            rating={4.8}
            reviewCount={124}
            location="Kadıköy, İstanbul"
            distance="2.3 km"
            available={true}
          />

          <MechanicCard
            name="Mehmet Usta"
            specialty="Elektrik ve Elektronik Sistemler"
            rating={4.6}
            reviewCount={98}
            location="Ataşehir, İstanbul"
            distance="4.1 km"
            available={true}
          />

          <MechanicCard
            name="Ali Usta"
            specialty="Kaporta ve Boya Uzmanı"
            rating={4.5}
            reviewCount={76}
            location="Üsküdar, İstanbul"
            distance="5.7 km"
            available={false}
          />

          <MechanicCard
            name="Hasan Usta"
            specialty="Fren ve Süspansiyon Sistemleri"
            rating={4.7}
            reviewCount={112}
            location="Beşiktaş, İstanbul"
            distance="7.2 km"
            available={true}
          />

          <MechanicCard
            name="Osman Usta"
            specialty="Genel Bakım ve Onarım"
            rating={4.4}
            reviewCount={89}
            location="Şişli, İstanbul"
            distance="8.5 km"
            available={true}
          />
        </div>
      </main>
    </div>
  )
}

interface MechanicCardProps {
  name: string
  specialty: string
  rating: number
  reviewCount: number
  location: string
  distance: string
  available: boolean
}

function MechanicCard({ name, specialty, rating, reviewCount, location, distance, available }: MechanicCardProps) {
  return (
    <Link href={`/mechanic-profile/${name.replace(" ", "-").toLowerCase()}`}>
      <Card className="hover:border-blue-300 transition-colors">
        <CardContent className="p-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{name}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{specialty}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{location}</span>
                <span className="mx-2">•</span>
                <span>{distance}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span
              className={`text-xs px-2 py-1 rounded-full ${available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
            >
              {available ? "Müsait" : "Meşgul"}
            </span>
            <Button size="sm">Randevu Al</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
