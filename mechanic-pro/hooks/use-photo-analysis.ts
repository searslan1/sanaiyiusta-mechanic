"use client"

import { useState } from "react"

interface NearbyService {
  name: string
  distance: string
  rating: number
}

interface PhotoAnalysisResult {
  damageType: string
  location: string
  severity: string
  estimatedCost: string
  nearbyServices: NearbyService[]
}

export function usePhotoAnalysis() {
  const [photoUploaded, setPhotoUploaded] = useState(false)
  const [photoAnalysisComplete, setPhotoAnalysisComplete] = useState(false)
  const [photoAnalysisResult, setPhotoAnalysisResult] = useState<PhotoAnalysisResult | null>(null)

  const handlePhotoUpload = () => {
    // Simulate photo upload
    setPhotoUploaded(true)

    // Simulate analysis (would be an actual API call in production)
    setTimeout(() => {
      setPhotoAnalysisComplete(true)
      setPhotoAnalysisResult({
        damageType: "Kaporta Hasarı",
        location: "Ön Tampon, Sağ Çamurluk",
        severity: "Orta Şiddetli",
        estimatedCost: "₺3,500 - ₺5,200",
        nearbyServices: [
          { name: "Ahmet Usta Kaporta", distance: "2.3 km", rating: 4.8 },
          { name: "Kadıköy Oto Tamir", distance: "3.5 km", rating: 4.6 },
          { name: "Marmara Kaporta", distance: "4.1 km", rating: 4.7 },
        ],
      })
    }, 2000)
  }

  const resetPhotoAnalysis = () => {
    setPhotoUploaded(false)
    setPhotoAnalysisComplete(false)
    setPhotoAnalysisResult(null)
  }

  return {
    photoUploaded,
    photoAnalysisComplete,
    photoAnalysisResult,
    handlePhotoUpload,
    resetPhotoAnalysis,
  }
}
