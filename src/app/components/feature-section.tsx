/**
 * Feature Section Component
 * 
 * Displays a grid of cards showcasing Ozzy's key features.
 * Each feature includes:
 *  - An icon
 *  - Title
 *  - Description
 *  - Availability status ("Coming Soon" badge for unavailable features)
 * 
 * Uses Framer Motion for staggered animation effects as cards come into view.
 */
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Mic, MessageSquare, History, User, Moon, Sun, Globe } from "lucide-react"
import { motion } from "framer-motion"

/**
 * Feature data array
 * Contains all feature information including:
 *  - Icon component
 *  - Title
 *  - Description
 *  - Availability status (for "Coming Soon" badges)
 */
const features = [
  {
    icon: <Mic className="h-10 w-10 text-blue-500" />,
    title: "Speech Recognition & Clarification",
    description: "Convert speech to text and enhance clarity for better understanding.",
    available: true,
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
    title: "Text-to-Speech Playback",
    description: "High-quality voice synthesis for clear communication with others.",
    available: true,
  },
  {
    icon: <History className="h-10 w-10 text-blue-500" />,
    title: "Conversation History",
    description: "Save and revisit past conversations for future reference.",
    available: false,
  },
  {
    icon: <User className="h-10 w-10 text-blue-500" />,
    title: "User Profiles",
    description: "Customize settings to individual speech patterns and preferences.",
    available: false,
  },
  {
    icon: <Moon className="h-10 w-10 text-blue-500" />,
    title: "Dark/Light Mode",
    description: "Comfortable viewing in any environment with adaptive theming.",
    available: true,
  },
  {
    icon: <Sun className="h-10 w-10 text-blue-500" />,
    title: "Accessibility-First Design",
    description: "Intuitive interface designed for users of all abilities.",
    available: true,
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: "Multi-language Support",
    description: "Support for multiple languages coming soon to make Ozzy accessible worldwide.",
    available: false,
  },
]

export const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ozzy comes packed with powerful features to make communication easier and more effective.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-[#1f2235] hover:bg-gray-800 transition-all duration-300 relative">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                  {/* Conditional "Coming Soon" badge */}
                  {!feature.available && (
                    <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

