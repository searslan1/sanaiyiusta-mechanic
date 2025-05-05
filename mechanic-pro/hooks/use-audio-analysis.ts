"use client"

import type React from "react"

import { useState } from "react"

interface PotentialIssue {
  issue: string
  probability: string
}

interface RecommendedMechanic {
  name: string
  specialty: string
  rating: number
  distance: string
}

interface AudioAnalysisResult {
  potentialIssues: PotentialIssue[]
  recommendedMechanics: RecommendedMechanic[]
}

export function useAudioAnalysis() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingComplete, setRecordingComplete] = useState(false)
  const [audioAnalysisComplete, setAudioAnalysisComplete] = useState(false)
  const [audioAnalysisResult, setAudioAnalysisResult] = useState<AudioAnalysisResult | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleStartRecording = () => {
    setIsRecording(true)

    // Simulate recording for 5 seconds
    setTimeout(() => {
      setIsRecording(false)
      setRecordingComplete(true)

      // Simulate analysis
      setTimeout(() => {
        setAudioAnalysisComplete(true)
        setAudioAnalysisResult({
          potentialIssues: [
            { issue: "Triger Kayışı Aşınması", probability: "Yüksek (%85)" },
            { issue: "Alternatör Rulman Sorunu", probability: "Orta (%60)" },
            { issue: "Devirdaim Pompası Arızası", probability: "Düşük (%30)" },
          ],
          recommendedMechanics: [
            { name: "Mehmet Usta", specialty: "Motor Uzmanı", rating: 4.9, distance: "3.2 km" },
            { name: "Ali Usta", specialty: "Elektrik ve Motor", rating: 4.7, distance: "2.8 km" },
            { name: "Hasan Usta", specialty: "Triger ve Kayış", rating: 4.8, distance: "4.5 km" },
          ],
        })
      }, 2000)
    }, 5000)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)

      // Dosya yükleme simülasyonu
      setRecordingComplete(true)

      // Analiz simülasyonu
      setTimeout(() => {
        setAudioAnalysisComplete(true)
        setAudioAnalysisResult({
          potentialIssues: [
            { issue: "Enjektör Arızası", probability: "Yüksek (%90)" },
            { issue: "Yakıt Pompası Sorunu", probability: "Orta (%65)" },
            { issue: "Subap Ayarı Bozukluğu", probability: "Düşük (%40)" },
          ],
          recommendedMechanics: [
            { name: "Ahmet Usta", specialty: "Enjektör ve Yakıt Sistemi", rating: 4.9, distance: "2.1 km" },
            { name: "Mehmet Usta", specialty: "Motor Uzmanı", rating: 4.7, distance: "3.2 km" },
            { name: "Hüseyin Usta", specialty: "Dizel Motorlar", rating: 4.8, distance: "3.8 km" },
          ],
        })
      }, 2000)
    }
  }

  const resetAudioAnalysis = () => {
    setIsRecording(false)
    setRecordingComplete(false)
    setAudioAnalysisComplete(false)
    setAudioAnalysisResult(null)
    setSelectedFile(null)
  }

  return {
    isRecording,
    recordingComplete,
    audioAnalysisComplete,
    audioAnalysisResult,
    selectedFile,
    handleStartRecording,
    handleFileUpload,
    resetAudioAnalysis,
  }
}
