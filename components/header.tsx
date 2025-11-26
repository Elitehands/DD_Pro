"use client"

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: "#0a0e1af5", borderBottomColor: "#3b82f615" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-bold text-lg transition-all duration-300 hover:text-blue-400"
          style={{ color: "#ffffff" }}
        >
          Due Diligence Pro
        </a>
      </div>
    </header>
  )
}
