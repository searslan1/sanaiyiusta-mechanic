import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function CommonSymptoms() {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Sık Karşılaşılan Sorunlar</h3>
      <div className="space-y-2">
        <CommonSymptomCard title="Marş Basmıyor" description="Akü, marş motoru veya alternatör sorunu olabilir." />
        <CommonSymptomCard
          title="Motor Hararet Yapıyor"
          description="Termostat, radyatör veya su pompası arızası olabilir."
        />
        <CommonSymptomCard title="Fren Sesi Geliyor" description="Balata aşınması veya disk problemi olabilir." />
      </div>
    </div>
  )
}

function CommonSymptomCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="hover:border-blue-300 transition-colors">
      <CardContent className="p-3 flex items-center justify-between">
        <div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </CardContent>
    </Card>
  )
}
