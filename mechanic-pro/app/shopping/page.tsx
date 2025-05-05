import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Filter, Search, ShoppingBag, Star } from "lucide-react"
import Link from "next/link"

export default function ShoppingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-900">Alışveriş</h1>
          <Link href="/shopping/cart" className="ml-auto">
            <div className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center">
                2
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Ürün ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtrele
            </Button>

            <Tabs defaultValue="all" className="w-[200px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="all">Tümü</TabsTrigger>
                <TabsTrigger value="recommended">Önerilen</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategoriler</h3>

          <div className="grid grid-cols-4 gap-4">
            <CategoryCard title="Motor Yağları" icon="🛢️" />
            <CategoryCard title="Filtreler" icon="🔧" />
            <CategoryCard title="Lastikler" icon="🛞" />
            <CategoryCard title="Aküler" icon="🔋" />
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Öne Çıkan Ürünler</h3>

          <div className="grid grid-cols-2 gap-4">
            <ProductCard
              name="Shell Helix Ultra 5W-30"
              description="Tam Sentetik Motor Yağı (4L)"
              price="₺850"
              rating={4.8}
              reviewCount={156}
              discount="10%"
            />

            <ProductCard
              name="Bosch Akü 60AH"
              description="Start-Stop Teknolojili"
              price="₺2,200"
              rating={4.7}
              reviewCount={98}
              discount="15%"
            />

            <ProductCard
              name="Michelin CrossClimate 2"
              description="205/55 R16 91H"
              price="₺1,850"
              rating={4.9}
              reviewCount={212}
              discount="5%"
            />

            <ProductCard
              name="Mann Filtre Seti"
              description="Yağ, Hava, Polen Filtresi"
              price="₺650"
              rating={4.6}
              reviewCount={87}
              discount="20%"
            />
          </div>

          <Button variant="outline" className="w-full mt-4">
            Tüm Ürünleri Gör
          </Button>
        </div>

        {/* Recently Viewed */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Görüntülenenler</h3>

          <div className="grid grid-cols-2 gap-4">
            <ProductCard
              name="Castrol Edge 5W-40"
              description="Tam Sentetik Motor Yağı (4L)"
              price="₺820"
              rating={4.7}
              reviewCount={134}
            />

            <ProductCard
              name="Mobil 1 ESP 5W-30"
              description="Tam Sentetik Motor Yağı (4L)"
              price="₺880"
              rating={4.8}
              reviewCount={145}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  icon: string
}

function CategoryCard({ title, icon }: CategoryCardProps) {
  return (
    <Link href={`/shopping/category/${title.toLowerCase().replace(" ", "-")}`}>
      <Card className="hover:border-blue-300 transition-colors h-full">
        <CardContent className="p-3 flex flex-col items-center justify-center text-center">
          <div className="text-2xl mb-1">{icon}</div>
          <p className="text-xs font-medium text-gray-900">{title}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

interface ProductCardProps {
  name: string
  description: string
  price: string
  rating: number
  reviewCount: number
  discount?: string
}

function ProductCard({ name, description, price, rating, reviewCount, discount }: ProductCardProps) {
  return (
    <Link href={`/shopping/product/${name.toLowerCase().replace(" ", "-")}`}>
      <Card className="hover:border-blue-300 transition-colors h-full">
        <div className="h-32 bg-gray-100 relative">
          {discount && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              {discount} İndirim
            </div>
          )}
        </div>
        <CardContent className="p-3">
          <h4 className="font-medium text-gray-900 text-sm">{name}</h4>
          <p className="text-xs text-gray-500 mb-2">{description}</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-sm">{price}</p>
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="text-xs">
                {rating} ({reviewCount})
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
