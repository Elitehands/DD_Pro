"use client"

export default function Footer() {
  const links = [
    { label: "Privacy", href: "https://app.duediligencepro.ai/privacy/" },
    { label: "Terms & Conditions", href: "https://app.duediligencepro.ai/terms/" },
    { label: "Cookie Policy", href: "https://app.duediligencepro.ai/cookie-policy/" },
    { label: "DPA", href: "https://app.duediligencepro.ai/dpa/" },
    { label: "Contact", href: "mailto:support@duediligencepro.ai" },
  ]

  return (
    <footer
      className="w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-8 border-t"
      style={{
        backgroundColor: "#0a0e1af5",
        borderTopColor: "#3b82f615",
        color: "#a0a0b0",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mb-3">
          {links.map((link, index) => (
            <div key={link.label} className="flex items-center gap-3 sm:gap-5">
              <a
                href={link.href}
                className="text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap"
                style={{ color: "#a0a0b0" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#3b82f6"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#a0a0b0"
                }}
              >
                {link.label}
              </a>
              {index < links.length - 1 && (
                <span className="hidden sm:inline" style={{ color: "#3b82f615" }}>
                  |
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center text-xs" style={{ color: "#606070" }}>
          <p>&copy; {new Date().getFullYear()} Due Diligence Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
