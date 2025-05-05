"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useVehicle } from "@/contexts/vehicle-context"
import { X } from "lucide-react"

export default function VehicleInfoForm({ onClose }: { onClose: () => void }) {
  const { setVehicleInfo } = useVehicle()
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [fuelType, setFuelType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setVehicleInfo({ make, model, year, fuelType })
    onClose()
  }

  return (
    <div className="bg-white border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-900">Araç Bilgileri</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="make">Marka</Label>
            <Input
              id="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder="Örn: Volkswagen"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Örn: Golf"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="year">Yıl</Label>
            <Input id="year" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Örn: 2020" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fuelType">Yakıt Tipi</Label>
            <Select value={fuelType} onValueChange={setFuelType} required>
              <SelectTrigger id="fuelType">
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Benzin">Benzin</SelectItem>
                <SelectItem value="Dizel">Dizel</SelectItem>
                <SelectItem value="LPG">LPG</SelectItem>
                <SelectItem value="Elektrik">Elektrik</SelectItem>
                <SelectItem value="Hibrit">Hibrit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Kaydet
        </Button>
      </form>
    </div>
  )
}
