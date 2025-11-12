"use client"

export default function Home() {
  const bgColor = "#1a1a1a"
  const textColor = "#ffffff"
  const primaryColor = "#3b82f6"

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
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          animation: gradientShift 15s ease infinite;
        }
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
        }
        
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 8s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(59, 130, 246, 0.2);
          top: -200px;
          right: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 300px;
          height: 300px;
          background: rgba(139, 92, 246, 0.15);
          bottom: -150px;
          left: -150px;
          animation-delay: 3s;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #93c5fd 50%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 8s ease infinite;
          background-size: 200% auto;
        }
      `,
        }}
      />

      <main style={{ backgroundColor: bgColor, color: textColor }}>
        {/* Header */}
        <header
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
          style={{ backgroundColor: `${bgColor}dd`, borderBottomColor: "#404040" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <span className="font-bold text-lg" style={{ color: textColor }}>
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
              className="text-xl md:text-2xl mb-12 text-balance leading-relaxed font-medium"
              style={{ color: primaryColor }}
            >
              where active and aspiring dealmakers coordinate their diligence process — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.duediligencepro.ai/"
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
                href="https://app.duediligencepro.ai/sign-up/"
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
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
