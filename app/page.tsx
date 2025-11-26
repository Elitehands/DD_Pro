"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const bgColor = "#0a0e1a"
  const textColor = "#ffffff"
  const primaryColor = "#3b82f6"
  const accentColor = "#06b6d4"

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gradientShift {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(5%, 5%); }
          66% { transform: scale(1.05) translate(-5%, 3%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .gradient-bg {
          position: absolute;
          inset: 0;
          opacity: 0.6;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.18) 0%, transparent 50%),
                      radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%);
          animation: gradientShift 20s ease infinite;
        }
        
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(150px);
          animation: pulse 10s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 700px;
          height: 700px;
          background: rgba(59, 130, 246, 0.2);
          top: -350px;
          right: -350px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 600px;
          height: 600px;
          background: rgba(6, 182, 212, 0.18);
          bottom: -300px;
          left: -300px;
          animation-delay: 4s;
        }
        
        .gradient-text {
          color: #ffffff;
        }
        
        .scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(59, 130, 246, 0.02) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
          opacity: 0.3;
        }
      `,
        }}
      />

      <main
        style={{
          backgroundColor: bgColor,
          color: textColor,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <section
          className="flex-1 flex items-center justify-center"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="gradient-bg"></div>

          <div className="scanline"></div>

          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>

          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={{ position: "relative", zIndex: 10 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              <span className="gradient-text">Due Diligence Pro</span>
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 text-balance leading-relaxed font-light max-w-2xl mx-auto"
              style={{ color: "#e0e0ff" }}
            >
              Where active and aspiring dealmakers coordinate their diligence process — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.duediligencepro.ai/"
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  border: `1px solid ${primaryColor}`,
                  color: "#ffffff",
                  backgroundColor: "transparent",
                  boxShadow: `0 0 10px rgba(59, 130, 246, 0.3)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${primaryColor}20`
                  e.currentTarget.style.borderColor = primaryColor
                  e.currentTarget.style.boxShadow = `0 0 15px rgba(59, 130, 246, 0.4)`
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = primaryColor
                  e.currentTarget.style.boxShadow = `0 0 10px rgba(59, 130, 246, 0.3)`
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                Sign In
              </a>
              <a
                href="https://app.duediligencepro.ai/sign-up/"
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  backgroundColor: primaryColor,
                  color: "#ffffff",
                  boxShadow: `0 0 20px rgba(59, 130, 246, 0.4)`,
                  border: `1px solid ${primaryColor}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = accentColor
                  e.currentTarget.style.boxShadow = `0 0 25px rgba(6, 182, 212, 0.5)`
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor
                  e.currentTarget.style.boxShadow = `0 0 20px rgba(59, 130, 246, 0.4)`
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                Create Account
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
