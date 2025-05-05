"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ChatTab from "@/components/ai-diagnosis/chat-tab"
import PhotoTab from "@/components/ai-diagnosis/photo-tab"
import AudioTab from "@/components/ai-diagnosis/audio-tab"
import CommonSymptoms from "@/components/ai-diagnosis/common-symptoms"
import { VehicleProvider } from "@/contexts/vehicle-context"

export default function AIDiagnosisPage() {
  const [activeTab, setActiveTab] = useState("chat")

  return (
    <VehicleProvider>
      <div className="container px-4 py-6 pb-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">AI Arıza Tespiti</h1>

        <Tabs defaultValue="chat" className="mb-4" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chat">Chatbot</TabsTrigger>
            <TabsTrigger value="photo">Fotoğraf</TabsTrigger>
            <TabsTrigger value="audio">Ses</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex-1">
          {activeTab === "chat" && <ChatTab />}
          {activeTab === "photo" && <PhotoTab />}
          {activeTab === "audio" && <AudioTab />}
        </div>

        {/* Common Symptoms */}
        {activeTab === "chat" && <CommonSymptoms />}
      </div>
    </VehicleProvider>
  )
}
