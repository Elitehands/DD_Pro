"use client"

export default function Home() {
  const bgColor = "#0a0a0f"
  const textColor = "#e8e8f0"
  const primaryColor = "#00d9ff"
  const accentColor = "#0099cc"

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
        
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .gradient-bg {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background: radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(0, 153, 204, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 40% 20%, rgba(0, 217, 255, 0.05) 0%, transparent 50%);
          animation: gradientShift 20s ease infinite;
        }
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          opacity: 0.4;
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
          background: rgba(0, 217, 255, 0.12);
          top: -350px;
          right: -350px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 600px;
          height: 600px;
          background: rgba(0, 153, 204, 0.1);
          bottom: -300px;
          left: -300px;
          animation-delay: 4s;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #00d9ff 0%, #00a3cc 50%, #0099cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 10s ease infinite;
          background-size: 200% auto;
          filter: drop-shadow(0 0 30px rgba(0, 217, 255, 0.4));
        }
        
        .scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(0, 217, 255, 0.02) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
          opacity: 0.3;
        }
      `,
        }}
      />

      <main style={{ backgroundColor: bgColor, color: textColor }}>
        {/* Header */}
        <header
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
          style={{ backgroundColor: `${bgColor}f5`, borderBottomColor: "#00d9ff15" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <span className="font-bold text-lg" style={{ color: primaryColor, textShadow: "0 0 8px rgba(0, 217, 255, 0.3)" }}>
              Due Diligence Pro
            </span>
          </div>
        </header>

        <section
          className="min-h-screen flex items-center justify-center pt-20"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Animated gradient background */}
          <div className="gradient-bg"></div>

          {/* Grid overlay */}
          <div className="grid-overlay"></div>
          
          {/* Scanline effect */}
          <div className="scanline"></div>

          {/* Glow orbs */}
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>

          <div
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={{ position: "relative", zIndex: 10 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-balance leading-tight">
              <span className="gradient-text">Due Diligence Pro</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-12 text-balance leading-relaxed font-light"
              style={{ color: "#8b9dc3" }}
            >
              where active and aspiring dealmakers coordinate their diligence process — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.duediligencepro.ai/"
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
                style={{
                  border: `1px solid ${primaryColor}`,
                  color: primaryColor,
                  backgroundColor: "transparent",
                  boxShadow: `0 0 15px rgba(0, 217, 255, 0.2)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${primaryColor}15`
                  e.currentTarget.style.borderColor = primaryColor
                  e.currentTarget.style.boxShadow = `0 0 15px rgba(0, 217, 255, 0.25)`
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = primaryColor
                  e.currentTarget.style.boxShadow = `0 0 15px rgba(0, 217, 255, 0.2)`
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
                  color: bgColor,
                  boxShadow: `0 0 25px rgba(0, 217, 255, 0.3)`,
                  border: `1px solid ${primaryColor}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = accentColor
                  e.currentTarget.style.boxShadow = `0 0 20px rgba(0, 217, 255, 0.35)`
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor
                  e.currentTarget.style.boxShadow = `0 0 25px rgba(0, 217, 255, 0.3)`
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                Create Account
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}