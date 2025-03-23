/**
 * Navbar Component
 * 
 * A responsive navigation bar that changes appearance on scroll and provides a 
 * mobile menu for smaller screens. Features transparent background initially,
 * with a dark backdrop appearing on scroll.
 */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export const Navbar = () => {
  // State to track scroll position for navbar styling
  const [isScrolled, setIsScrolled] = useState(false)
  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Effect to add scroll listener for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handlers for mobile menu interaction
  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false)
  }

  // Keyboard accessibility for mobile menu toggle
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMenu()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-950/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Main navbar container */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and brand name */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/ozzy-logo.png" alt="Ozzy Logo" width={48} height={48} className="h-12 w-auto" />
          <span className="text-2xl font-bold text-white">Ozzy</span>
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Features section"
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="How It Works section"
          >
            How It Works
          </Link>
          <Link 
            href="#download" 
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Download section"
          >
            Download
          </Link>
        </nav>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-white"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown (conditionally rendered) */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-950/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={handleMenuItemClick}
              aria-label="Features section"
              tabIndex={0}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={handleMenuItemClick}
              aria-label="How It Works section"
              tabIndex={0}
            >
              How It Works
            </Link>
            <Link
              href="#download"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={handleMenuItemClick}
              aria-label="Download section"
              tabIndex={0}
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

