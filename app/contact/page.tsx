"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-sm sm:text-base" style={{ color: "#a0a0b0" }}>
              Get in touch with our team
            </p>
          </header>

          <div className="space-y-8 sm:space-y-12" style={{ color: "#e0e0ff" }}>
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: "#3b82f6" }}>
                Email
              </h2>
              <p className="text-base sm:text-lg mb-4">For any inquiries or support, please reach out to us at:</p>
              <a
                href="mailto:support@duediligencepro.ai"
                className="text-lg sm:text-xl font-semibold transition-colors duration-300"
                style={{ color: "#3b82f6" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#60a5fa"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#3b82f6"
                }}
              >
                support@duediligencepro.ai
              </a>
            </section>

            <section style={{ borderTopColor: "#3b82f615", paddingTop: "2rem", borderTopWidth: "1px" }}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: "#3b82f6" }}>
                Response Time
              </h2>
              <p className="text-base sm:text-lg">
                We aim to respond to all inquiries within 24 business hours. Thank you for your patience.
              </p>
            </section>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  )
}
