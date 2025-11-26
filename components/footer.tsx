"use client"

export default function Footer() {
  const links = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "DPA", href: "/dpa" },
    { label: "Contact", href: "mailto:support@duediligencepro.ai" }, // Updated email to .ai domain
  ]

  return (
    <footer
      className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t"
      style={{
        backgroundColor: "#0a0e1af5",
        borderTopColor: "#3b82f615",
        color: "#a0a0b0",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6">
          {links.map((link, index) => (
            <div key={link.label} className="flex items-center gap-4 sm:gap-6">
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

        {/* Copyright */}
        <div className="text-center text-xs" style={{ color: "#606070" }}>
          <p>&copy; {new Date().getFullYear()} Due Diligence Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
