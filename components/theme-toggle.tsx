"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const prefersDark = saved ? saved === "dark" : true
    setIsDark(prefersDark)
    // Dispatch custom event so page.tsx can listen
    window.dispatchEvent(new CustomEvent("themechange", { detail: { isDark: prefersDark } }))
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
    // Dispatch custom event to update page
    window.dispatchEvent(new CustomEvent("themechange", { detail: { isDark: newIsDark } }))
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-300 hover:opacity-80"
      style={{
        backgroundColor: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.1)",
        color: isDark ? "#3b82f6" : "#2563eb",
      }}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
