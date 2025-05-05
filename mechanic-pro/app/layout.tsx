import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AppHeader from "@/components/layout/app-header"
import BottomNav from "@/components/layout/bottom-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OtoServis",
  description: "Araç sahipleri için servis uygulaması",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <AppHeader />
            <main className="flex-1">{children}</main>
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
