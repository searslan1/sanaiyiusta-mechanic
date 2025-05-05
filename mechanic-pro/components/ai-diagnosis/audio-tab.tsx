"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, X, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useAudioAnalysis } from "@/hooks/use-audio-analysis"

export default function AudioTab() {
  const {
    isRecording,
    recordingComplete,
    audioAnalysisComplete,
    audioAnalysisResult,
    selectedFile,
    handleStartRecording,
    handleFileUpload,
    resetAudioAnalysis,
  } = useAudioAnalysis()

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      {!recordingComplete ? (
        <>
          <div
            className={`w-32 h-32 rounded-full ${isRecording ? "bg-red-100 animate-pulse" : "bg-blue-100"} flex items-center justify-center`}
          >
            <Mic className={`w-12 h-12 ${isRecording ? "text-red-600" : "text-blue-600"}`} />
          </div>

          {isRecording ? (
            <RecordingIndicator />
          ) : (
            <AudioInputOptions onStartRecording={handleStartRecording} onFileUpload={handleFileUpload} />
          )}

          <AudioInstructions />
        </>
      ) : audioAnalysisComplete ? (
        <AudioAnalysisResults
          audioAnalysisResult={audioAnalysisResult}
          selectedFile={selectedFile}
          resetAudioAnalysis={resetAudioAnalysis}
        />
      ) : (
        <AudioAnalysisLoading />
      )}
    </div>
  )
}

function RecordingIndicator() {
  return (
    <div className="text-center">
      <p className="text-red-600 font-medium mb-1">Kayıt Yapılıyor...</p>
      <p className="text-sm text-gray-600">Lütfen motor sesini net bir şekilde kaydedin</p>
      <div className="flex justify-center mt-4 space-x-1">
        <div className="w-1 h-8 bg-red-400 animate-pulse rounded-full"></div>
        <div className="w-1 h-12 bg-red-500 animate-pulse rounded-full"></div>
        <div className="w-1 h-6 bg-red-400 animate-pulse rounded-full"></div>
        <div className="w-1 h-10 bg-red-500 animate-pulse rounded-full"></div>
        <div className="w-1 h-8 bg-red-400 animate-pulse rounded-full"></div>
        <div className="w-1 h-14 bg-red-500 animate-pulse rounded-full"></div>
        <div className="w-1 h-6 bg-red-400 animate-pulse rounded-full"></div>
      </div>
    </div>
  )
}

function AudioInputOptions({ onStartRecording, onFileUpload }) {
  return (
    <div className="space-y-4 w-full max-w-md">
      <Button className="w-full" onClick={onStartRecording}>
        <Mic className="w-4 h-4 mr-2" />
        Ses Kaydı Başlat
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-gray-50 px-2 text-gray-500">veya</span>
        </div>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer relative">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-sm font-medium text-gray-700">Ses Dosyası Yükle</p>
          <p className="text-xs text-gray-500 mt-1">veya sürükleyip bırakın</p>
          <p className="text-xs text-gray-400 mt-2">MP3, WAV veya M4A (max 10MB)</p>
        </div>
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="audio/*"
          onChange={onFileUpload}
        />
      </div>
    </div>
  )
}

function AudioInstructions() {
  return (
    <div className="text-sm text-gray-500 text-center max-w-md">
      <p className="mb-2 font-medium">Motor Sesi ile Arıza Tespiti</p>
      <p>
        Aracınızın çalışırken çıkardığı sesi kaydedin veya önceden kaydettiğiniz bir ses dosyasını yükleyin. AI
        sistemimiz motordan gelen tıkırtı, vuruntu veya anormal sesleri analiz edecektir.
      </p>
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-xs text-blue-800">
          <span className="font-medium">İpucu:</span> En iyi sonuç için, aracınızı rölantide çalıştırın ve telefonu
          motor bölmesine yakın tutun.
        </p>
      </div>
    </div>
  )
}

function AudioAnalysisResults({ audioAnalysisResult, selectedFile, resetAudioAnalysis }) {
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">Ses Analizi Sonucu</h3>
        <Button variant="ghost" size="sm" onClick={resetAudioAnalysis}>
          <X className="w-4 h-4 mr-1" /> Kapat
        </Button>
      </div>

      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Mic className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Motor Sesi Analizi</p>
                <p className="text-xs text-gray-500">{selectedFile ? selectedFile.name : "5 saniyelik kayıt"}</p>
              </div>
            </div>
            <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Analiz Tamamlandı</div>
          </div>

          <h4 className="font-medium mb-2">Potansiyel Sorunlar</h4>
          <div className="space-y-3 mb-4">
            {audioAnalysisResult?.potentialIssues.map((issue, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-sm">{issue.issue}</p>
                <p className="text-xs font-medium text-blue-600">{issue.probability}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              {selectedFile
                ? "Enjektör arızası tespit edildi. En kısa sürede kontrol edilmesi önerilir."
                : "Triger kayışı aşınması tespit edildi. En kısa sürede kontrol edilmesi önerilir."}
            </p>
          </div>
        </CardContent>
      </Card>

      <h4 className="font-medium mb-2">Önerilen Uzman Ustalar</h4>
      <div className="space-y-2 mb-4">
        {audioAnalysisResult?.recommendedMechanics.map((mechanic, index) => (
          <Link href={`/mechanic-profile/${mechanic.name.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
            <Card className="hover:border-blue-300 transition-colors">
              <CardContent className="p-3 flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-gray-900">{mechanic.name}</h5>
                  <p className="text-xs text-gray-600">{mechanic.specialty}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{mechanic.rating} ★</span>
                    <span className="mx-1">•</span>
                    <span>{mechanic.distance}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex space-x-2">
        <Button variant="outline" className="flex-1" onClick={resetAudioAnalysis}>
          Yeni Kayıt
        </Button>
        <Link href="/appointments/new" className="flex-1">
          <Button className="w-full">
            Randevu Al
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

function AudioAnalysisLoading() {
  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-t-blue-600 border-blue-200 animate-spin mb-4"></div>
        <p className="text-gray-600 font-medium">Ses Analiz Ediliyor...</p>
        <p className="text-xs text-gray-500 mt-1">Bu işlem birkaç saniye sürebilir</p>

        <div className="w-full mt-6 space-y-2">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full animate-pulse" style={{ width: "70%" }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Ses örüntüleri analiz ediliyor</span>
            <span>70%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
