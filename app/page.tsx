"use client"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    setIsDark(saved !== "light")

    const handleThemeChange = (e: Event) => {
      const event = e as CustomEvent
      setIsDark(event.detail.isDark)
    }
    window.addEventListener("themechange", handleThemeChange)

    // Stagger animation for feature cards
    const timings = [0, 100, 200, 300]
    timings.forEach((timing, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, idx])
      }, timing)
    })

    return () => window.removeEventListener("themechange", handleThemeChange)
  }, [])

  const bgColor = isDark ? "#1a1a1a" : "#ffffff"
  const cardBg = isDark ? "#262626" : "#f3f4f6"
  const borderColor = isDark ? "#404040" : "#e5e7eb"
  const textColor = isDark ? "#ffffff" : "#1f2937"
  const mutedColor = isDark ? "#9ca3af" : "#6b7280"
  const primaryColor = "#3b82f6"

  return (
    <main style={{ backgroundColor: bgColor, color: textColor }} className="transition-colors duration-300">
      {/* Header with Theme Toggle */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300 border-b"
        style={{ backgroundColor: `${bgColor}dd`, borderBottomColor: isDark ? "#404040" : "#e5e7eb" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <span className="font-bold text-lg" style={{ color: textColor }}>
            Due Diligence Pro
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight" style={{ color: textColor }}>
            Due Diligence Pro
          </h1>
          <p className="text-lg md:text-xl mb-12 text-balance leading-relaxed" style={{ color: mutedColor }}>
            This secure platform is where active and aspiring dealmakers coordinate their diligence process — all in one
            place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.duediligencepro.ai"
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
              style={{
                border: `2px solid ${primaryColor}`,
                color: primaryColor,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = primaryColor
              }}
            >
              Sign In
            </a>
            <a
              href="https://app.duediligencepro.ai"
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
              style={{ backgroundColor: primaryColor, color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor
              }}
            >
              Create Account
            </a>
            <a
              href="https://buy.stripe.com/8x29AS30r5Xz2PMg2zawo01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
              style={{ backgroundColor: primaryColor, color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor
              }}
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
