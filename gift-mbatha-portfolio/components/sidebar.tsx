"use client"

import { useState } from "react"
import { User, FolderGit2, Wrench, GraduationCap, Info, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "system-studies", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "experience", label: "Education", icon: GraduationCap },
  { id: "about", label: "About", icon: Info },
  { id: "contact", label: "Contact", icon: Mail },
]

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("profile")

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMobileOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-beige-200 text-foreground hover:bg-forest-500 hover:text-beige-50 transition-colors"
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileOpen}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <nav
        className={cn(
          "fixed left-0 top-0 h-full z-40 flex flex-col items-start py-8 px-3 bg-beige-200/95 backdrop-blur-sm border-r border-beige-300 transition-all duration-300 ease-in-out",
          isExpanded ? "w-52" : "w-16",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onFocus={() => setIsExpanded(true)}
        aria-label="Main navigation"
      >
        {/* Logo/Avatar area */}
        <div className="mb-8 w-full flex justify-center">
          <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center text-beige-50 font-semibold text-lg">
            GM
          </div>
        </div>

        {/* Navigation items */}
        <ul className="flex flex-col gap-2 w-full" role="menubar">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <li key={item.id} role="none">
                <button
                  onClick={() => handleNavClick(item.id)}
                  role="menuitem"
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 focus-visible:ring-offset-beige-200",
                    isActive ? "bg-forest-500 text-beige-50" : "text-foreground hover:bg-beige-300",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    size={20}
                    className={cn(
                      "flex-shrink-0 transition-colors",
                      isActive ? "text-beige-50" : "text-forest-600 group-hover:text-forest-500",
                    )}
                  />
                  <span
                    className={cn(
                      "whitespace-nowrap text-sm font-medium transition-opacity duration-200",
                      isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden",
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* Theme toggle at the bottom of sidebar */}
        <div className="mt-auto pt-4 w-full border-t border-beige-300">
          <ThemeToggle isExpanded={isExpanded} />
        </div>
      </nav>
    </>
  )
}
