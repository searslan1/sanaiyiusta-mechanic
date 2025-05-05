"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, X, MapPin, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePhotoAnalysis } from "@/hooks/use-photo-analysis"

export default function PhotoTab() {
  const { photoUploaded, photoAnalysisComplete, photoAnalysisResult, handlePhotoUpload, resetPhotoAnalysis } =
    usePhotoAnalysis()

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      {!photoUploaded ? (
        <>
          <div className="w-full max-w-md aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
          <div className="space-y-4 w-full max-w-md">
            <Button className="w-full" onClick={handlePhotoUpload}>
              Fotoğraf Çek
            </Button>
            <Button variant="outline" className="w-full" onClick={handlePhotoUpload}>
              Galeriden Seç
            </Button>
          </div>
          <div className="text-sm text-gray-500 text-center max-w-md">
            <p className="mb-2 font-medium">Hasar Tespiti İçin Fotoğraf Çekin</p>
            <p>
              Aracınızın hasarlı bölgesinin net ve iyi aydınlatılmış bir fotoğrafını çekin. AI sistemimiz hasarı tespit
              edecek ve tahmini onarım maliyetini hesaplayacaktır.
            </p>
          </div>
        </>
      ) : photoAnalysisComplete ? (
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-lg">Hasar Analizi Sonucu</h3>
            <Button variant="ghost" size="sm" onClick={resetPhotoAnalysis}>
              <X className="w-4 h-4 mr-1" /> Kapat
            </Button>
          </div>

          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="w-full aspect-video bg-gray-200 rounded-lg mb-4 relative">
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  AI Analizi Tamamlandı
                </div>
                {/* Burada gerçek bir uygulamada yüklenen fotoğraf gösterilir */}
                <div className="absolute bottom-2 left-2 bg-red-500 bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">
                  Hasar Tespit Edildi
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Hasar Tipi</p>
                  <p className="text-sm font-medium">{photoAnalysisResult?.damageType}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Konum</p>
                  <p className="text-sm font-medium">{photoAnalysisResult?.location}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Şiddet</p>
                  <p className="text-sm font-medium">{photoAnalysisResult?.severity}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Tahmini Maliyet</p>
                  <p className="text-sm font-medium text-blue-600">{photoAnalysisResult?.estimatedCost}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h4 className="font-medium mb-2">Yakınınızdaki Servisler</h4>
          <div className="space-y-2 mb-4">
            {photoAnalysisResult?.nearbyServices.map((service, index) => (
              <Link href={`/mechanic-profile/${service.name.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                <Card className="hover:border-blue-300 transition-colors">
                  <CardContent className="p-3 flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-gray-900">{service.name}</h5>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{service.distance}</span>
                        <span className="mx-1">•</span>
                        <span>{service.rating} ★</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1" onClick={resetPhotoAnalysis}>
              Yeni Fotoğraf
            </Button>
            <Link href="/service-request/new" className="flex-1">
              <Button className="w-full">
                Servis Talebi Oluştur
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <PhotoAnalysisLoading />
      )}
    </div>
  )
}

function PhotoAnalysisLoading() {
  return (
    <div className="w-full max-w-md">
      <div className="w-full aspect-video bg-gray-200 rounded-lg flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-t-blue-600 border-blue-200 animate-spin mb-4"></div>
        <p className="text-gray-600 font-medium">Fotoğraf Analiz Ediliyor...</p>
        <p className="text-xs text-gray-500 mt-1">Bu işlem birkaç saniye sürebilir</p>
      </div>

      <div className="mt-6 space-y-2">
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-blue-600 rounded-full animate-pulse" style={{ width: "60%" }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Hasar tespiti yapılıyor</span>
          <span>60%</span>
        </div>
      </div>
    </div>
  )
}
