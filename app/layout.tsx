import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CultSoda",
  description: "인플루언서 굿즈 및 경매 플랫폼",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <main className="flex-1 pb-16 max-w-md mx-auto w-full">{children}</main>
        <BottomNavigation />
        <Toaster />
      </body>
    </html>
  )
}
