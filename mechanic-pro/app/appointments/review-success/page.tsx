import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"

export default function ReviewSuccessPage() {
  return (
    <div className="container px-4 py-6 pb-20 max-w-md mx-auto">
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in-50 duration-300">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2 animate-in fade-in-50 duration-300 delay-100">
          Değerlendirmeniz Alındı!
        </h1>

        <p className="text-gray-600 mb-6 animate-in fade-in-50 duration-300 delay-200">
          Değerli geri bildiriminiz için teşekkür ederiz. Yorumunuz diğer kullanıcılara yardımcı olacaktır.
        </p>

        <div className="flex space-x-1 mb-8 animate-in fade-in-50 duration-300 delay-300">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 text-left w-full animate-in fade-in-50 duration-300 delay-400">
          <h3 className="font-medium text-blue-800 mb-2">Değerlendirmenizin Etkisi</h3>
          <ul className="text-sm text-blue-700 space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Ustanın profilinde görüntülenecek</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Diğer kullanıcıların usta seçiminde yardımcı olacak</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Hizmet kalitesinin artmasına katkı sağlayacak</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3 w-full animate-in fade-in-50 duration-300 delay-500">
          <Link href="/appointments">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
              Randevularıma Dön
            </Button>
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              className="w-full px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Ana Sayfaya Dön
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
