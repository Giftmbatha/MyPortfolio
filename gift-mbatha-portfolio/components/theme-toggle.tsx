"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  isExpanded?: boolean
}

export function ThemeToggle({ isExpanded = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-beige-300 transition-all duration-200"
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-5 h-5 flex-shrink-0" />
        <span
          className={cn(
            "whitespace-nowrap text-sm font-medium transition-opacity duration-200",
            isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden",
          )}
        >
          Theme
        </span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-beige-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 focus-visible:ring-offset-beige-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun size={20} className="flex-shrink-0 text-forest-500" />
      ) : (
        <Moon size={20} className="flex-shrink-0 text-forest-600" />
      )}
      <span
        className={cn(
          "whitespace-nowrap text-sm font-medium transition-opacity duration-200",
          isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden",
        )}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  )
}
