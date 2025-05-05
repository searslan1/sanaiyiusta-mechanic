"use client"
import { Button } from "@/components/ui/button"
import { Car, Edit } from "lucide-react"
import { useVehicle } from "@/contexts/vehicle-context"

export default function VehicleInfoDisplay({ onEdit }: { onEdit: () => void }) {
  const { vehicleInfo } = useVehicle()

  if (!vehicleInfo) return null

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <Car className="w-5 h-5 text-blue-600 mr-2" />
        <div>
          <p className="text-sm font-medium text-blue-800">
            {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model}
          </p>
          <p className="text-xs text-blue-600">{vehicleInfo.fuelType}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={onEdit} className="text-blue-600">
        <Edit className="w-4 h-4 mr-1" />
        Düzenle
      </Button>
    </div>
  )
}
