/**
 * Download Section Component
 * 
 * A call-to-action section that:
 *  - Announces upcoming app availability
 *  - Shows platform-specific download buttons
 *  - Provides an email signup form for launch notifications
 * 
 * Uses Framer Motion for animation effects and Lucide icons.
 */
"use client"

import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

export const DownloadSection = () => {
  /**
   * Handles the form submission for email notification signup
   * Currently a placeholder for future implementation
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <section id="download" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Coming Soon to App Stores</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ozzy is currently in development. Sign up to be notified when it launches on iOS and Android.
          </p>

          {/* Download buttons for different platforms */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* iOS download button */}
            <Button size="lg" variant="gradient" className="gap-2">
              <Download size={20} />
              <span>Coming Soon on iOS</span>
            </Button>
            {/* Android download button */}
            <Button size="lg" variant="outline" className="gap-2 border-gray-700 text-gray-300 hover:bg-gray-800">
              <Download size={20} />
              <span>Coming Soon on Android</span>
            </Button>
          </div>

          {/* Email signup form */}
          <div className="mt-8">
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Email address"
                required
              />
              <Button type="submit" variant="gradient">
                Get Notified
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

