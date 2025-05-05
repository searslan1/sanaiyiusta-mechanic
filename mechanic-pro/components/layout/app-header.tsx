import Link from "next/link"
import { Bell, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        <h1 className="text-xl font-bold text-gray-900">SanaİyiUsta</h1>
        <div className="flex items-center space-x-3">
          <Link href="/ai-diagnosis">
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageSquare className="w-5 h-5 text-gray-600" />
            </Button>
          </Link>
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5 text-gray-600" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
