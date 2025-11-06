"use client"

import { Calendar, Layers, Upload, Bell, Lock } from "lucide-react"
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
        className="sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300"
        style={{ backgroundColor: `${bgColor}dd`, borderBottomColor: borderColor }}
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight" style={{ color: textColor }}>
            Due Diligence Pro
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance" style={{ color: mutedColor }}>
            Welcome to your Due Diligence Pro workspace.
          </p>
          <p className="text-lg leading-relaxed text-balance" style={{ color: mutedColor }}>
            This secure platform is where active and aspiring dealmakers coordinate their diligence process — all in one
            place.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Calendar,
                title: "Book Experts",
                description: "Book time with verified CPAs, attorneys, or your account manager.",
              },
              {
                icon: Layers,
                title: "Stage-Based Support",
                description: "Access flexible, stage-based due-diligence support for your active or upcoming deal.",
              },
              {
                icon: Upload,
                title: "Document Hub",
                description: "Upload and track documents, reports, and red-flag findings in one workspace.",
              },
              {
                icon: Bell,
                title: "Stay Connected",
                description: "Stay connected through updates and scheduled check-ins as your deal progresses.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-6 transition-all duration-300 ${visibleCards.includes(idx) ? "fade-in-up" : "opacity-0"}`}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  animationDelay: `${idx * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = primaryColor
                  e.currentTarget.style.boxShadow = `0 4px 12px -2px ${isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(37, 99, 235, 0.08)"}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = borderColor
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <feature.icon className="w-8 h-8 mb-4" style={{ color: primaryColor }} />
                <h3 className="text-lg font-semibold mb-3" style={{ color: textColor }}>
                  {feature.title}
                </h3>
                <p style={{ color: mutedColor }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div
            className="w-full max-w-md rounded-lg p-8 transition-all duration-300"
            style={{
              backgroundColor: cardBg,
              border: `2px solid ${primaryColor}`,
              boxShadow: isDark
                ? "0 20px 25px -5px rgba(59, 130, 246, 0.2)"
                : "0 20px 25px -5px rgba(37, 99, 235, 0.1)",
            }}
          >
            <h2 className="text-3xl font-bold mb-2" style={{ color: textColor }}>
              Standard Plan
            </h2>
            <div className="mb-6">
              <span className="text-5xl font-bold" style={{ color: primaryColor }}>
                $100
              </span>
              <span className="ml-2" style={{ color: mutedColor }}>
                /month
              </span>
            </div>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: mutedColor }}>
              Unlock access to the Due Diligence Pro workspace and onboarding support for your deal. Includes platform
              access, initial intent review, and CPA scheduling for pre-LOI guidance.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Platform access",
                "Initial intent review",
                "CPA scheduling",
                "Pre-LOI guidance",
                "Workspace access",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: primaryColor }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span style={{ color: textColor }}>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://buy.stripe.com/8x29AS30r5Xz2PMg2zawo01"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
              style={{ backgroundColor: primaryColor, color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb"
                e.currentTarget.style.boxShadow = "0 8px 16px -2px rgba(59, 130, 246, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight" style={{ color: textColor }}>
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 text-balance" style={{ color: mutedColor }}>
            Login or create your account to activate access, continue your diligence, or manage your ongoing deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300"
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
            </button>
            <button
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300"
              style={{ backgroundColor: primaryColor, color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb"
                e.currentTarget.style.boxShadow = "0 8px 16px -2px rgba(59, 130, 246, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="transition-colors duration-300"
        style={{ backgroundColor: isDark ? "#0f0f0f" : "#f9fafb", borderTopColor: borderColor, borderTopWidth: "1px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="text-sm" style={{ color: mutedColor }}>
              Powered by Smart DD Collective
            </div>
            <div className="flex items-center justify-center gap-2 text-sm" style={{ color: mutedColor }}>
              <Lock className="w-4 h-4" />
              Secure Stripe Checkout
            </div>
            <div className="text-sm" style={{ color: mutedColor }}>
              For support, contact{" "}
              <a
                href="mailto:support@duediligencepro.ai"
                className="transition-colors duration-300 hover:underline"
                style={{ color: primaryColor }}
              >
                support@duediligencepro.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
