"use client"
import { useChat } from "ai/react"
import { useVehicle } from "@/contexts/vehicle-context"
import { useState, useEffect } from "react"
import type { Mechanic } from "@/data/mechanics"
import { getRecommendedMechanics } from "@/utils/mechanic-matcher"

// Replace the MechanicRecommendation interface with this
export type MechanicRecommendation = Mechanic

// Update the useChatMessages function to use the data source
export function useChatMessages() {
  const { vehicleInfo } = useVehicle()
  const [error, setError] = useState<string | null>(null)
  const [messageCount, setMessageCount] = useState(0)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [mechanicRecommendations, setMechanicRecommendations] = useState<MechanicRecommendation[]>([])
  const [lastUserMessage, setLastUserMessage] = useState<string>("")

  // Use the AI SDK's useChat hook to handle chat state and API communication
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat",
    body: { vehicleInfo }, // Pass vehicle info to the API
    initialMessages: [
      {
        role: "assistant",
        content:
          "Merhaba! Ben Usta AI. Aracınızla ilgili yaşadığınız sorunu detaylı anlatırsanız size yardımcı olabilirim. Ses, titreşim veya gördüğünüz belirtileri paylaşmanız teşhis koymamı kolaylaştıracaktır.",
      },
    ],
    onError: (err) => {
      console.error("Chat error:", err)
      setError("Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.")
      setTimeout(() => setError(null), 5000)
    },
    onFinish: () => {
      // Increment message count when AI finishes responding
      setMessageCount((prevCount) => {
        const newCount = prevCount + 1
        // Show recommendations after 3 exchanges
        if (newCount >= 3 && !showRecommendations) {
          setShowRecommendations(true)
          generateMechanicRecommendations()
        }
        return newCount
      })
    },
  })

  // Store the last user message for context-aware recommendations
  useEffect(() => {
    const userMessages = messages.filter((msg) => msg.role === "user")
    if (userMessages.length > 0) {
      setLastUserMessage(userMessages[userMessages.length - 1].content)
    }
  }, [messages])

  // Generate mechanic recommendations based on conversation context
  const generateMechanicRecommendations = () => {
    // Use the last user message and vehicle info to find relevant mechanics
    const relevantMechanics = getRecommendedMechanics(lastUserMessage, vehicleInfo)
    setMechanicRecommendations(relevantMechanics)
  }

  // Create a wrapper function to maintain the same interface
  const sendMessage = (content: string) => {
    handleSubmit(new Event("submit") as any, {
      data: { content },
    })
  }

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Merhaba! Ben Usta AI. Aracınızla ilgili yaşadığınız sorunu detaylı anlatırsanız size yardımcı olabilirim. Ses, titreşim veya gördüğünüz belirtileri paylaşmanız teşhis koymamı kolaylaştıracaktır.",
      },
    ])
    setMessageCount(0)
    setShowRecommendations(false)
    setMechanicRecommendations([])
  }

  return {
    messages,
    sendMessage,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    clearChat,
    showRecommendations,
    mechanicRecommendations,
  }
}
