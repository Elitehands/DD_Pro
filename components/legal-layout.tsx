"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main
      style={{
        backgroundColor: "#0a0e1a",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <div className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
              {title}
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: "#a0a0b0" }}>
              <strong>Last Updated: {lastUpdated}</strong>
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8" style={{ color: "#e0e0ff" }}>
            {children}
          </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
