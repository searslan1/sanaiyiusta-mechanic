"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  Star,
  PenToolIcon as Tool,
  User,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const steps = [
  { id: "service", title: "Servis", icon: Tool },
  { id: "craftsman", title: "Usta", icon: User },
  { id: "datetime", title: "Tarih & Saat", icon: Calendar },
  { id: "location", title: "Konum", icon: MapPin },
  { id: "confirm", title: "Onay", icon: CheckCircle },
]

export default function BookAppointmentPage() {
  const [currentStep, setCurrentStep] = useState("service")
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedCraftsman, setSelectedCraftsman] = useState<string | null>(null)

  const nextStep = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="container px-4 py-6 pb-20 max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href="/appointments" className="mr-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Button>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Randevu Oluştur</h1>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative" onClick={() => setCurrentStep(step.id)}>
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-200",
                  currentStep === step.id
                    ? "bg-blue-600 text-white"
                    : steps.findIndex((s) => s.id === currentStep) > index
                      ? "bg-green-100 text-green-600 border border-green-200"
                      : "bg-gray-100 text-gray-400",
                )}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <span
                className={cn(
                  "text-xs font-medium hidden md:block",
                  currentStep === step.id ? "text-blue-600" : "text-gray-500",
                )}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute top-5 left-10 w-[calc(100%-20px)] h-[2px]",
                    steps.findIndex((s) => s.id === currentStep) > index ? "bg-green-200" : "bg-gray-200",
                  )}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form className="space-y-6">
        {/* Service Selection Step */}
        {currentStep === "service" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 mb-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Servis Bilgileri</h2>
              <p className="text-sm text-blue-700">
                Aracınız için ihtiyaç duyduğunuz servis tipini ve detaylarını belirtin.
              </p>
            </div>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-3">
                  <Label htmlFor="serviceType" className="text-sm font-medium text-gray-700">
                    Servis Tipi
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="serviceType"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <SelectValue placeholder="Servis Tipi Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oil">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                            <span className="text-amber-600">🛢️</span>
                          </div>
                          Yağ Değişimi
                        </div>
                      </SelectItem>
                      <SelectItem value="brake">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                            <span className="text-red-600">🛑</span>
                          </div>
                          Fren Bakımı
                        </div>
                      </SelectItem>
                      <SelectItem value="tire">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                            <span>🛞</span>
                          </div>
                          Lastik Değişimi
                        </div>
                      </SelectItem>
                      <SelectItem value="battery">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                            <span className="text-green-600">🔋</span>
                          </div>
                          Akü Değişimi
                        </div>
                      </SelectItem>
                      <SelectItem value="ac">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <span className="text-blue-600">❄️</span>
                          </div>
                          Klima Bakımı
                        </div>
                      </SelectItem>
                      <SelectItem value="general">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                            <span className="text-purple-600">🔧</span>
                          </div>
                          Genel Bakım
                        </div>
                      </SelectItem>
                      <SelectItem value="other">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                            <span>➕</span>
                          </div>
                          Diğer
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="vehicle" className="text-sm font-medium text-gray-700">
                    Araç
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="vehicle"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <SelectValue placeholder="Araç Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volkswagen">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <Car className="w-4 h-4 text-blue-600" />
                          </div>
                          Volkswagen Golf (34 ABC 123)
                        </div>
                      </SelectItem>
                      <SelectItem value="bmw">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <Car className="w-4 h-4 text-blue-600" />
                          </div>
                          BMW 3 Serisi (34 XYZ 789)
                        </div>
                      </SelectItem>
                      <SelectItem value="add">
                        <div className="flex items-center text-blue-600">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <span className="font-bold">+</span>
                          </div>
                          Yeni Araç Ekle
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="issueDescription" className="text-sm font-medium text-gray-700">
                    Sorun Açıklaması <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="issueDescription"
                    placeholder="Aracınızda yaşadığınız sorunu detaylı bir şekilde açıklayın..."
                    className="min-h-[120px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500">
                    Sorununuzu ne kadar detaylı açıklarsanız, ustamız o kadar iyi hazırlanabilir.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                İleri
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Craftsman Selection Step */}
        {currentStep === "craftsman" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 mb-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Usta Seçimi</h2>
              <p className="text-sm text-blue-700">
                Aracınızın bakımını yapacak uzman ustayı seçin veya sistem tarafından en uygun ustanın atanmasını
                sağlayın.
              </p>
            </div>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-3">
                  <Label htmlFor="craftsman" className="text-sm font-medium text-gray-700">
                    Usta Seçimi
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="craftsman"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <SelectValue placeholder="Usta Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mehmet">Mehmet Usta - Motor ve Şanzıman Uzmanı</SelectItem>
                      <SelectItem value="ali">Ali Usta - Fren ve Süspansiyon Sistemleri</SelectItem>
                      <SelectItem value="hasan">Hasan Usta - Elektrik ve Elektronik Sistemler</SelectItem>
                      <SelectItem value="ahmet">Ahmet Usta - Genel Bakım Uzmanı</SelectItem>
                      <SelectItem value="osman">Osman Usta - Klima ve Soğutma Sistemleri</SelectItem>
                      <SelectItem value="any">Fark Etmez - En Uygun Ustayı Atayın</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Önerilen Ustalar</Label>
                  <div className="space-y-3">
                    {[
                      {
                        id: "mehmet",
                        name: "Mehmet Usta",
                        specialty: "Motor ve Şanzıman Uzmanı",
                        rating: 4.8,
                        reviewCount: 124,
                        available: true,
                      },
                      {
                        id: "ali",
                        name: "Ali Usta",
                        specialty: "Fren ve Süspansiyon Sistemleri",
                        rating: 4.6,
                        reviewCount: 98,
                        available: true,
                      },
                      {
                        id: "hasan",
                        name: "Hasan Usta",
                        specialty: "Elektrik ve Elektronik Sistemler",
                        rating: 4.7,
                        reviewCount: 112,
                        available: false,
                      },
                    ].map((craftsman) => (
                      <div
                        key={craftsman.id}
                        className={cn(
                          "p-4 border rounded-lg flex items-center transition-all duration-200",
                          selectedCraftsman === craftsman.id
                            ? "border-blue-400 bg-blue-50 shadow-sm"
                            : craftsman.available
                              ? "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                              : "border-gray-200 bg-gray-50 opacity-60",
                        )}
                        onClick={() => {
                          if (craftsman.available) {
                            setSelectedCraftsman(craftsman.id)
                          }
                        }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                          {craftsman.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{craftsman.name}</h4>
                            <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                              <span className="text-xs font-medium text-yellow-700">{craftsman.rating}</span>
                              <span className="text-xs text-yellow-600 ml-1">({craftsman.reviewCount})</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{craftsman.specialty}</p>
                          <div className="mt-1">
                            <span
                              className={cn(
                                "text-xs px-2 py-0.5 rounded-full",
                                craftsman.available ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                              )}
                            >
                              {craftsman.available ? "Müsait" : "Meşgul"}
                            </span>
                          </div>
                        </div>
                        <div className="ml-2">
                          <input
                            type="radio"
                            name="craftsman"
                            value={craftsman.id}
                            checked={selectedCraftsman === craftsman.id}
                            onChange={() => {
                              if (craftsman.available) {
                                setSelectedCraftsman(craftsman.id)
                              }
                            }}
                            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                            disabled={!craftsman.available}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Geri
              </Button>
              <Button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                İleri
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Date and Time Selection Step */}
        {currentStep === "datetime" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 mb-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Tarih ve Saat Seçimi</h2>
              <p className="text-sm text-blue-700">Size en uygun randevu tarih ve saatini seçin.</p>
            </div>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-3">
                  <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                    Tarih
                  </Label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { date: "15", day: "Pzt", month: "Mayıs", available: true },
                      { date: "16", day: "Sal", month: "Mayıs", available: true },
                      { date: "17", day: "Çar", month: "Mayıs", available: false },
                      { date: "18", day: "Per", month: "Mayıs", available: true },
                      { date: "19", day: "Cum", month: "Mayıs", available: true },
                      { date: "20", day: "Cmt", month: "Mayıs", available: true },
                      { date: "21", day: "Paz", month: "Mayıs", available: false },
                      { date: "22", day: "Pzt", month: "Mayıs", available: true },
                    ].map((date, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-3 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200",
                          selectedDate === `${date.date} ${date.month}`
                            ? "border-blue-400 bg-blue-50 shadow-sm"
                            : date.available
                              ? "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                              : "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed",
                        )}
                        onClick={() => {
                          if (date.available) {
                            setSelectedDate(`${date.date} ${date.month}`)
                          }
                        }}
                      >
                        <span className="text-xs text-gray-500">{date.day}</span>
                        <span className="text-lg font-bold text-gray-900">{date.date}</span>
                        <span className="text-xs text-gray-500">{date.month}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      Daha Fazla Tarih
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Uygun Saatler</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                      <div
                        key={time}
                        className={cn(
                          "p-3 border rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200",
                          selectedTime === time
                            ? "border-blue-400 bg-blue-50 shadow-sm"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50",
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        <Clock className="w-4 h-4 mr-1 text-gray-500" />
                        <span className="text-sm font-medium">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Geri
              </Button>
              <Button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                İleri
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Location Step */}
        {currentStep === "location" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100 mb-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Konum Bilgileri</h2>
              <p className="text-sm text-blue-700">
                Servisin gerçekleşeceği konumu belirtin. Servis noktasında veya adresinizde hizmet alabilirsiniz.
              </p>
            </div>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-3">
                  <Label htmlFor="serviceLocation" className="text-sm font-medium text-gray-700">
                    Servis Tipi
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 bg-blue-50 border-blue-300">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Servis Noktasında</h4>
                          <p className="text-xs text-gray-500">Aracınızı servise getirin</p>
                        </div>
                        <input
                          type="radio"
                          name="serviceType"
                          value="mechanic"
                          defaultChecked
                          className="ml-auto w-5 h-5 text-blue-600"
                        />
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <p className="text-sm font-medium">Acıbadem Otomotiv</p>
                        <p className="text-xs text-gray-500">Kadıköy, İstanbul</p>
                        <p className="text-xs text-blue-600 mt-1">2.3 km uzaklıkta</p>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <MapPin className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Ev/İş Adresimde</h4>
                          <p className="text-xs text-gray-500">Servis size gelsin</p>
                        </div>
                        <input type="radio" name="serviceType" value="home" className="ml-auto w-5 h-5 text-blue-600" />
                      </div>
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <p className="text-sm text-gray-500">Adres seçmek için tıklayın</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Adres (Ev/İş Adresimde seçeneği için)
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Servisin geleceği tam adresi girin..."
                    className="min-h-[80px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Tahmini Servis Süresi</h4>
                      <p className="text-sm text-gray-600">2-3 saat</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Geri
              </Button>
              <Button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                İleri
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Confirmation Step */}
        {currentStep === "confirm" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100 mb-6">
              <h2 className="text-lg font-semibold text-green-800 mb-2">Randevu Onayı</h2>
              <p className="text-sm text-green-700">
                Randevu bilgilerinizi kontrol edin ve onaylayın. Onayladıktan sonra randevunuz oluşturulacaktır.
              </p>
            </div>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 border-b pb-2">Randevu Özeti</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">Servis Tipi</p>
                      <p className="text-sm font-medium">Yağ Değişimi</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">Araç</p>
                      <p className="text-sm font-medium">Volkswagen Golf (34 ABC 123)</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">Usta</p>
                      <div className="flex items-center">
                        <p className="text-sm font-medium mr-2">Mehmet Usta</p>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs ml-1">4.8</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">Tarih ve Saat</p>
                      <p className="text-sm font-medium">15 Mayıs 2023, 14:00</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">Konum</p>
                      <p className="text-sm font-medium">Acıbadem Otomotiv, Kadıköy</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">Tahmini Süre</p>
                      <p className="text-sm font-medium">2-3 saat</p>
                    </div>
                  </div>

                  <div className="space-y-1 mt-2">
                    <p className="text-xs text-gray-500">Sorun Açıklaması</p>
                    <p className="text-sm">
                      Aracımın yağ değişimi ve genel kontrollerinin yapılması gerekiyor. Son zamanlarda motor çalışırken
                      hafif bir ses geliyor, bunun da kontrol edilmesini istiyorum.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">Tahmini Maliyet</h4>
                        <p className="text-sm text-gray-600">₺750 - ₺1,200</p>
                        <p className="text-xs text-gray-500 mt-1">
                          *Fiyat tahminidir, gerçek maliyet servis sonrası belirlenecektir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-sm">Randevu şartlarını ve koşullarını okudum ve kabul ediyorum.</span>
                    </Label>
                    <Label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-sm">
                        Randevu saatinden 30 dakika önce SMS ile hatırlatma almak istiyorum.
                      </span>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Geri
              </Button>
              <Link href="/appointments/book-confirmation">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
                  Randevuyu Onayla
                  <CheckCircle className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
