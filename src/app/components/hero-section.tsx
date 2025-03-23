/**
 * Hero Section Component
 * 
 * The main landing section of the Ozzy application showcasing:
 *  - App branding and logo
 *  - Value proposition and description
 *  - Call-to-action buttons
 *  - Phone mockup with app interface
 * 
 * Uses Framer Motion for animations and Next.js Image for optimized image loading.
 */
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Download, Mic } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export const HeroSection = () => {
  // State to handle client-side rendering to avoid hydration issues
  const [isClient, setIsClient] = useState(false)

  // Effect to update client state after component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Return null during server-side rendering to prevent hydration mismatch
  if (!isClient) {
    return null
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side: Content area */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Logo and brand name */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-10 gap-4 md:gap-0">
              <Image
                src="/images/ozzy-logo.png"
                alt="Ozzy Logo"
                width={160}
                height={160}
                className="h-[160px] w-auto"
                priority
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold md:ml-6 text-white text-center md:text-left">Ozzy</h1>
            </div>

            {/* Headline with animation */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Voice Assistance for Enhanced Communication
            </motion.h2>

            {/* Description with animation */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ozzy helps users with speech difficulties communicate more effectively using advanced AI technology to
              clarify spoken words.
            </motion.p>

            {/* Call-to-action buttons with animation */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" variant="gradient" className="gap-2">
                <Download size={20} />
                Coming Soon on iOS
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-gray-700 text-gray-300 hover:bg-gray-800">
                <Download size={20} />
                Coming Soon on Android
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side: Phone mockup */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Phone device container */}
            <div className="relative w-[280px] h-[560px] md:w-[300px] md:h-[600px]">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[40px] border-8 border-black bg-[#131620] overflow-hidden shadow-2xl">
                {/* Notch area */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-950 flex justify-center items-end pb-1">
                  <div className="w-20 h-1 rounded-full bg-gray-700"></div>
                </div>

                {/* Phone content */}
                <div className="pt-6 h-full flex flex-col">
                  {/* Status bar */}
                  <div className="px-4 py-1 flex justify-between items-center">
                    {/* Time and info */}
                    <div className="text-xs text-white flex items-center">
                      6:51
                      <svg className="h-3 w-3 ml-1 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 19V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Connection and battery */}
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 2L18 12 6 22V2z" />
                        </svg>
                      </div>
                      <div className="h-3 w-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 10a6 6 0 0 1-12 0M6 10a6 6 0 0 1 12 0" />
                        </svg>
                      </div>
                      <div className="text-xs text-white">83%</div>
                    </div>
                  </div>

                  {/* App main content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6">
                    <div className="flex flex-col items-center space-y-6">
                      {/* App logo */}
                      <div className="w-24 h-24">
                        <Image 
                          src="/images/ozzy-logo.png" 
                          alt="Ozzy Logo" 
                          width={96} 
                          height={96} 
                          className="w-full h-full"
                        />
                      </div>
                      
                      {/* App title */}
                      <div className="text-center space-y-1">
                        <h3 className="text-2xl font-bold text-white">Ozzy</h3>
                        <p className="text-sm text-gray-400">AI-powered speech assistant</p>
                      </div>
                      
                      {/* Main action button */}
                      <button className="mt-12 h-14 w-[230px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center gap-2">
                        <Mic className="h-5 w-5 text-white" />
                        <span className="text-white text-lg font-medium">Start Speaking</span>
                      </button>
                    </div>
                  </div>

                  {/* Bottom navigation bar */}
                  <div className="h-16 border-t border-gray-800 flex items-center justify-around px-4">
                    {/* Home tab (active) */}
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <span className="text-xs text-blue-400">Home</span>
                    </div>

                    {/* Speech tab */}
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" y1="19" x2="12" y2="23"></line>
                          <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400">Speech</span>
                    </div>

                    {/* Settings tab */}
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-6 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400">Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

