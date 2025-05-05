"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function ReviewAppointmentPage({ params }: { params: { id: string } }) {
  const [rating, setRating] = useState<number>(0)
  const [hoverRating, setHoverRating] = useState<number>(0)
  const [comment, setComment] = useState<string>("")
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false)
  const [serviceQuality, setServiceQuality] = useState<number>(0)
  const [punctuality, setPunctuality] = useState<number>(0)
  const [communication, setCommunication] = useState<number>(0)
  const [priceValue, setPriceValue] = useState<number>(0)

  // Mock appointment data - in a real app, this would be fetched from an API
  const appointment = {
    id: params.id,
    service: "Yağ Değişimi",
    date: "10 Nisan 2023",
    time: "11:30",
    mechanic: "Mehmet Usta",
    mechanicSpecialty: "Motor ve Şanzıman Uzmanı",
    location: "Kadıköy, İstanbul",
    vehicle: "Volkswagen Golf (34 ABC 123)",
    price: "₺750",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the review to an API
    window.location.href = "/appointments/review-success"
  }

  return (
    <div className="container px-4 py-6 pb-20 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href={`/appointments/${params.id}`} className="mr-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Değerlendirme</h1>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 mb-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Servis Değerlendirmesi</h2>
        <p className="text-sm text-blue-700">
          Aldığınız hizmeti değerlendirerek diğer kullanıcılara yardımcı olabilirsiniz.
        </p>
      </div>

      <Card className="shadow-sm mb-6">
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
              {appointment.mechanic.charAt(0)}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{appointment.mechanic}</h3>
              <p className="text-sm text-gray-600">{appointment.mechanicSpecialty}</p>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <span>{appointment.date}</span>
                <span className="mx-2">•</span>
                <span>{appointment.service}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="shadow-sm">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Genel Değerlendirme</label>
              <div className="flex items-center justify-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="focus:outline-none transition-transform duration-200 hover:scale-110"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        className={cn(
                          "w-10 h-10 transition-colors duration-200",
                          (hoverRating || rating) >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-center text-sm font-medium mt-2">
                {rating === 1
                  ? "Çok Kötü"
                  : rating === 2
                    ? "Kötü"
                    : rating === 3
                      ? "Orta"
                      : rating === 4
                        ? "İyi"
                        : rating === 5
                          ? "Mükemmel"
                          : "Değerlendirme Seçin"}
              </p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Detaylı Değerlendirme</label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Servis Kalitesi</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setServiceQuality(star)}
                      >
                        <Star
                          className={cn(
                            "w-6 h-6",
                            serviceQuality >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Dakiklik</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setPunctuality(star)}
                      >
                        <Star
                          className={cn(
                            "w-6 h-6",
                            punctuality >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600">İletişim</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setCommunication(star)}
                      >
                        <Star
                          className={cn(
                            "w-6 h-6",
                            communication >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Fiyat/Değer</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setPriceValue(star)}
                      >
                        <Star
                          className={cn(
                            "w-6 h-6",
                            priceValue >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Yorumunuz
              </label>
              <Textarea
                id="comment"
                placeholder="Deneyiminizi paylaşın..."
                className="min-h-[120px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Yorumunuz diğer kullanıcılara yardımcı olacaktır. Lütfen deneyiminizi detaylı bir şekilde paylaşın.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="anonymous"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                  Değerlendirmemi anonim olarak paylaş
                </label>
              </div>
              <p className="text-xs text-gray-500 pl-6">
                Bu seçenek işaretlenirse, değerlendirmeniz diğer kullanıcılara gösterilirken adınız gizlenecektir.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Link href={`/appointments/${params.id}`}>
            <Button
              type="button"
              variant="outline"
              className="px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              İptal
            </Button>
          </Link>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
            disabled={!rating}
          >
            Değerlendirmeyi Gönder
            <CheckCircle className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
