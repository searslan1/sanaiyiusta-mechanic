"use client"

import type React from "react"

import Link from "next/link"
import { Home, Calendar, Compass, MessageSquare, Send } from "lucide-react"
import { usePathname } from "next/navigation"

export default function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="sticky bottom-0 z-10 bg-white border-t">
      <div className="grid grid-cols-5 h-16">
        <NavItem icon={<Home className="w-5 h-5" />} label="Ana Sayfa" href="/" active={isActive("/")} />
        <NavItem icon={<Compass className="w-5 h-5" />} label="Keşfet" href="/explore" active={isActive("/explore")} />
        <NavItem
          icon={<MessageSquare className="w-6 h-6" />}
          label="AI Yardım"
          href="/ai-diagnosis"
          active={isActive("/ai-diagnosis")}
          highlight={true}
        />
        <NavItem
          icon={<Calendar className="w-5 h-5" />}
          label="Randevular"
          href="/appointments"
          active={isActive("/appointments")}
        />
        <NavItem
          icon={<Send className="w-5 h-5" />}
          label="Teklif Ver"
          href="/teklif-ver"
          active={isActive("/teklif-ver")}
        />
      </div>
    </nav>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
  highlight?: boolean
}

function NavItem({ icon, label, href, active = false, highlight = false }: NavItemProps) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center">
      {highlight ? (
        <div
          className={`w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center -mt-5 shadow-md ${active ? "bg-blue-700" : ""}`}
        >
          <div className="text-white">{icon}</div>
        </div>
      ) : (
        <div className={`${active ? "text-blue-600" : "text-gray-500"}`}>{icon}</div>
      )}
      <span className={`text-xs mt-1 ${active ? "text-blue-600 font-medium" : "text-gray-500"}`}>{label}</span>
    </Link>
  )
}
