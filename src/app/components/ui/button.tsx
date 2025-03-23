"use client"

import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "@/app/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
    
    const variantClasses = {
      default: "bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500",
      outline: "border border-gray-300 hover:bg-gray-100 focus-visible:ring-gray-400",
      ghost: "hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400",
      link: "text-blue-500 underline-offset-4 hover:underline focus-visible:ring-blue-500",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white",
    }
    
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10",
    }
    
    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button" 