"use client"

import LegalLayout from "@/components/legal-layout"

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="20th of November, 2025">
      <p className="leading-relaxed mb-6">
        This Cookie Policy explains how Due Diligence Pro ("we," "us," or "our") uses cookies and similar tracking
        technologies when you access or use our platform.
      </p>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          1. What Are Cookies?
        </h2>
        <p className="mb-3 leading-relaxed">
          Cookies are small text files placed on your device to store and track information. They help us:
        </p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
          <li>Keep the platform secure</li>
          <li>Improve performance</li>
          <li>Remember user preferences</li>
          <li>Understand usage patterns</li>
          <li>Enable core functionality (authentication, sessions, dashboards)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          2. Types of Cookies We Use
        </h2>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: "#e0e0ff" }}>
            A. Essential Cookies (Required)
          </h3>
          <p className="mb-3 leading-relaxed">
            These are necessary for the platform to function. They enable features such as:
          </p>
          <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
            <li>Login authentication</li>
            <li>Security and fraud prevention</li>
            <li>Session management</li>
            <li>Payment processing (Stripe)</li>
          </ul>
          <p className="mt-3 leading-relaxed">You cannot disable essential cookies.</p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: "#e0e0ff" }}>
            B. Functional Cookies
          </h3>
          <p className="mb-3 leading-relaxed">These allow the platform to remember:</p>
          <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
            <li>Your preferences</li>
            <li>Saved settings</li>
            <li>Previously selected options</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          3. Managing Cookies
        </h2>
        <p className="mb-3 leading-relaxed">You can control or delete cookies through your browser settings.</p>
        <p className="leading-relaxed">However, disabling essential cookies may break key platform features.</p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          5. Contact Us
        </h2>
        <p className="leading-relaxed">
          <strong>If you have questions: support@duediligencepro.ai</strong>
        </p>
      </section>
    </LegalLayout>
  )
}
