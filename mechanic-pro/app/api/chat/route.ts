import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, vehicleInfo } = await req.json()

    // Create a system prompt that incorporates vehicle information if available
    let systemPrompt =
      "Sen bir otomobil ustasısın ve bir araba servis uygulaması için yardım ediyorsun. Adın Usta AI. Konuşma tarzın samimi ve profesyonel olmalı. Bir gerçek usta gibi konuş - teknik terimler kullan ama gerektiğinde açıkla. Araç sorunları, bakım ve tamir konularında yardımcı ol. Cevaplarında Türkçe kullan."

    systemPrompt += "\n\nKonuşma sırasında şunları yap:"
    systemPrompt += "\n- Kullanıcının anlattığı belirtilere göre olası sorunları sırala"
    systemPrompt += "\n- Sorunun ciddiyetini belirt (acil, yakında ilgilenilmeli, rutin bakımda yapılabilir)"
    systemPrompt += "\n- Tahmini maliyet aralığı ver (₺X - ₺Y şeklinde)"
    systemPrompt += "\n- Gerekirse ek sorular sor (ses, titreşim, ne zaman başladı, vb.)"
    systemPrompt += "\n- Kullanıcıya yardımcı olmak için elinden geleni yap"
    systemPrompt +=
      "\n- Üçüncü mesaj değişiminden sonra, kullanıcıya bu sorun için en uygun ustaları önereceğini belirt, ancak önerileri sen listeleme (uygulama bunu otomatik olarak yapacak)"

    // If vehicle information is provided, include it in the system prompt
    if (vehicleInfo) {
      const { make, model, year, fuelType } = vehicleInfo
      systemPrompt += `\n\nKullanıcının ${year} model ${make} ${model} aracı var, ${fuelType} motorlu. Cevaplarını bu araca özgü bilgilerle uyarla. Bu araç modeline özgü yaygın sorunları bil ve ona göre tavsiyelerde bulun.`
    } else {
      systemPrompt += `\n\nEğer kullanıcının sorusu belirli bir araçla ilgiliyse ve araç bilgileri verilmemişse, nazikçe marka, model, yıl ve yakıt tipi sor.`
    }

    // Count user messages to determine if we should mention mechanic recommendations
    const userMessageCount = messages.filter((m) => m.role === "user").length

    // Create a streaming response using the AI SDK
    const result = streamText({
      model: openai("gpt-4o"),
      messages,
      system: systemPrompt,
      temperature: 0.7, // Slightly creative but still focused
      maxTokens: 1000, // Allow for detailed responses
    })

    // Return the streaming response
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(JSON.stringify({ error: "Failed to process your request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
