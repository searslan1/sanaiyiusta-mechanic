"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, Car, Trash, AlertCircle } from "lucide-react"
import { useChatMessages } from "@/hooks/use-chat-messages"
import { useVehicle } from "@/contexts/vehicle-context"
import VehicleInfoForm from "./vehicle-info-form"
import VehicleInfoDisplay from "./vehicle-info-display"
import MechanicRecommendations from "./mechanic-recommendations"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ChatTab() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    clearChat,
    showRecommendations,
    mechanicRecommendations,
  } = useChatMessages()
  const { vehicleInfo } = useVehicle()
  const [showVehicleForm, setShowVehicleForm] = useState(false)

  return (
    <div className="flex flex-col h-full">
      {/* Vehicle Information Section */}
      {showVehicleForm ? (
        <VehicleInfoForm onClose={() => setShowVehicleForm(false)} />
      ) : vehicleInfo ? (
        <VehicleInfoDisplay onEdit={() => setShowVehicleForm(true)} />
      ) : (
        <Button variant="outline" className="mb-4 flex items-center gap-2" onClick={() => setShowVehicleForm(true)}>
          <Car className="w-4 h-4" />
          Araç Bilgilerini Ekle
        </Button>
      )}

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 bg-gray-50 p-4 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user" ? "bg-blue-600 text-white" : "bg-white border text-gray-800"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-white border text-gray-800">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Mechanic Recommendations */}
        {showRecommendations && !isLoading && (
          <div className="flex justify-start w-full">
            <div className="max-w-full w-full">
              <div className="bg-white border rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-800 mb-2">
                  <strong>Usta AI:</strong> Sorununuza yardımcı olabilecek uzman ustalar aşağıda listelenmiştir. Bu
                  ustalar, belirttiğiniz sorun türüne göre özel olarak seçilmiştir.
                </p>
                <MechanicRecommendations recommendations={mechanicRecommendations} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Controls */}
      <div className="flex flex-col space-y-2">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Sorununuzu yazın..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
          </div>
          <Button type="submit" size="icon" className="rounded-full" disabled={isLoading}>
            <Send className="w-5 h-5" />
          </Button>
        </form>

        {messages.length > 1 && (
          <Button variant="ghost" size="sm" className="text-gray-500 self-end" onClick={clearChat}>
            <Trash className="w-4 h-4 mr-1" />
            Konuşmayı Temizle
          </Button>
        )}
      </div>
    </div>
  )
}
