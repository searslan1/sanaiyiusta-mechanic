import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  return (
    <div className="container px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Mesajlar</h1>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input placeholder="Mesaj ara..." className="pl-10" />
      </div>

      {/* Message Threads */}
      <div className="space-y-4">
        <Link href="/messages/mehmet-usta">
          <Card className="hover:border-blue-300 transition-colors border-l-4 border-l-blue-600">
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">Mehmet Usta</h4>
                    <p className="text-xs text-gray-500">10 dk önce</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">
                      Aracınız için en kaliteli yağ ve filtreleri kullanarak servis sağlayabilirim...
                    </p>
                    <span className="w-5 h-5 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center">
                      2
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/messages/ali-usta">
          <Card className="hover:border-blue-300 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">Ali Usta</h4>
                    <p className="text-xs text-gray-500">2 saat önce</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    Tam sentetik yağ ve orijinal filtre ile değişim yapabilirim...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/messages/hasan-usta">
          <Card className="hover:border-blue-300 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">Hasan Usta</h4>
                    <p className="text-xs text-gray-500">Dün</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">Premium kalite yağ ve filtre kullanıyorum...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Empty State */}
      {false && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Henüz mesajınız yok</h3>
          <p className="text-sm text-gray-500 mb-4">Servis talebi oluşturarak ustalarla iletişime geçebilirsiniz.</p>
          <Link href="/service-request/new">
            <Button>Servis Talebi Oluştur</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
