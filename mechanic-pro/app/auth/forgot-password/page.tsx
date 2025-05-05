"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="container flex items-center h-16 px-4">
        <Link
          href="/auth/login"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6 flex flex-col items-center justify-center">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <motion.h1
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Şifrenizi mi Unuttunuz?
                </motion.h1>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim
                </motion.p>
              </div>

              <Card className="border-none shadow-lg">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">Şifre Sıfırlama</CardTitle>
                  <CardDescription className="text-center">Hesabınızla ilişkili e-posta adresini girin</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          E-posta
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="ornek@email.com"
                            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Gönderiliyor...
                          </div>
                        ) : (
                          "Sıfırlama Bağlantısı Gönder"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <div className="text-center text-sm">
                    <Link
                      href="/auth/login"
                      className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors"
                    >
                      Giriş sayfasına dön
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">E-posta Gönderildi</h2>
              <p className="text-gray-600 mb-6">
                {email} adresine şifre sıfırlama bağlantısı gönderdik. Lütfen gelen kutunuzu kontrol edin.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                E-postayı alamadıysanız, spam klasörünüzü kontrol edin veya tekrar deneyin.
              </p>
              <div className="flex flex-col space-y-3">
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
                  Tekrar Dene
                </Button>
                <Link href="/auth/login" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Giriş Sayfasına Dön</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>

      {/* Footer with branding */}
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© 2023 OtoServis. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}
