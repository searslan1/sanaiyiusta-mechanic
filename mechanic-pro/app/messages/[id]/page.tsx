"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MessageThreadPage({ params }: { params: { id: string } }) {
  const mechanicId = params.id
  const mechanicName = mechanicId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "mechanic",
      content:
        "Merhaba! Servis talebinizi aldım. Aracınız için en kaliteli yağ ve filtreleri kullanarak servis sağlayabilirim. İsterseniz aynı gün içinde işlemi tamamlayabilirim.",
      time: "10:30",
    },
    { id: 2, sender: "mechanic", content: "Fiyat teklifim ₺650 ve işlem yaklaşık 1 saat sürecektir.", time: "10:31" },
    { id: 3, sender: "user", content: "Merhaba, teşekkürler. Hangi marka yağ kullanıyorsunuz?", time: "10:45" },
    {
      id: 4,
      sender: "mechanic",
      content:
        "Shell Helix Ultra 5W-30 tam sentetik yağ kullanıyorum. Volkswagen Golf'ünüz için en uygun yağlardan biridir.",
      time: "10:50",
    },
  ])

  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setInputValue("")
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center h-16 px-4">
          <Link href="/messages" className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <div className="flex items-center flex-1">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <h1 className="text-base font-semibold text-gray-900">{mechanicName}</h1>
              <p className="text-xs text-gray-500">Çevrimiçi</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user" ? "bg-blue-600 text-white" : "bg-white border text-gray-800"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-1 text-right ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </Button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Mesajınızı yazın..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
          </div>
          <Button size="icon" className="rounded-full" onClick={handleSendMessage}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
