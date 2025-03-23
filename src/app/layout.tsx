import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ozzy - Voice Assistance for Enhanced Communication",
  description: "Ozzy helps users with speech difficulties communicate more effectively using advanced AI technology.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}

