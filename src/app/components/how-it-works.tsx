/**
 * How It Works Component
 * 
 * Presents a step-by-step explanation of how the Ozzy app functions.
 * Features:
 *  - Numbered steps with icons
 *  - Vertical timeline design on desktop
 *  - Stacked layout on mobile
 *  - Animated reveal as user scrolls
 *  - Gradient background for visual interest
 */
"use client"

import { motion } from "framer-motion"
import { Mic, MessageSquare, Volume2, Check } from "lucide-react"

/**
 * Step data array
 * Contains the information for each step in the process:
 *  - Icon to visually represent the step
 *  - Title of the step
 *  - Description of what happens in this step
 */
const steps = [
  {
    icon: <Mic className="h-10 w-10 text-white" />,
    title: "Record Speech",
    description:
      "Tap the microphone button and speak naturally. Ozzy captures your voice with advanced audio processing.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-white" />,
    title: "AI Processing",
    description: "Our AI technology analyzes your speech patterns and enhances clarity in real-time.",
  },
  {
    icon: <Volume2 className="h-10 w-10 text-white" />,
    title: "Clear Playback",
    description: "The processed speech is played back with improved clarity, making communication effortless.",
  },
  {
    icon: <Check className="h-10 w-10 text-white" />,
    title: "Effective Communication",
    description: "Enjoy conversations without barriers, building confidence in everyday interactions.",
  },
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-900 via-[#1d2035] to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ozzy makes communication simple with just a few steps, with plans to support multiple languages in the
            future
          </p>
        </div>

        {/* Steps display with timeline */}
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Step icon in circular container */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-blue-500 shadow-lg`}>
                {step.icon}
              </div>

              {/* Step content - title and description */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>

              {/* Vertical timeline connector (visible only on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block h-16 w-0.5 bg-blue-500/30 my-4 md:relative md:left-[-85px] md:top-[50px] md:h-[calc(100%-80px)]"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

