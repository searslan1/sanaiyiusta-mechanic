"use client"
import { createContext, useContext, useState, type ReactNode } from "react"

export interface VehicleInfo {
  make: string
  model: string
  year: string
  fuelType: string
}

interface VehicleContextType {
  vehicleInfo: VehicleInfo | null
  setVehicleInfo: (info: VehicleInfo) => void
  clearVehicleInfo: () => void
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined)

export function VehicleProvider({ children }: { children: ReactNode }) {
  const [vehicleInfo, setVehicleInfoState] = useState<VehicleInfo | null>(null)

  const setVehicleInfo = (info: VehicleInfo) => {
    setVehicleInfoState(info)
  }

  const clearVehicleInfo = () => {
    setVehicleInfoState(null)
  }

  return (
    <VehicleContext.Provider value={{ vehicleInfo, setVehicleInfo, clearVehicleInfo }}>
      {children}
    </VehicleContext.Provider>
  )
}

export function useVehicle() {
  const context = useContext(VehicleContext)
  if (context === undefined) {
    throw new Error("useVehicle must be used within a VehicleProvider")
  }
  return context
}
