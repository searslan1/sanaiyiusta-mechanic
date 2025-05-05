import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Calendar } from "lucide-react"
import Link from "next/link"
import type { MechanicRecommendation } from "@/hooks/use-chat-messages"

interface MechanicRecommendationsProps {
  recommendations: MechanicRecommendation[]
}

export default function MechanicRecommendations({ recommendations }: MechanicRecommendationsProps) {
  if (!recommendations.length) return null

  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Size Yardımcı Olabilecek Ustalar</h3>
      <div className="space-y-3">
        {recommendations.map((mechanic) => (
          <Card key={mechanic.id} className="hover:border-blue-300 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{mechanic.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{mechanic.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({mechanic.reviewCount})</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{mechanic.specialty}</p>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{mechanic.location}</span>
                    <span className="mx-2">•</span>
                    <span>{mechanic.distance}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    mechanic.available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {mechanic.available ? "Müsait" : "Meşgul"}
                </span>
                <Link href={`/service-request/schedule/${mechanic.id}`}>
                  <Button size="sm" className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Randevu Al
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
