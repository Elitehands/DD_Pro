"use client"

import LegalLayout from "@/components/legal-layout"

export default function DPAPage() {
  return (
    <LegalLayout title="Data Processing Addendum (DPA)" lastUpdated="20th of November, 2025">
      <p className="leading-relaxed mb-6">
        This Data Processing Addendum ("DPA") forms part of the Terms of Service between the user ("Controller") and Due
        Diligence Pro ("Processor").
      </p>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          1. Definitions
        </h2>
        <div className="space-y-3 leading-relaxed">
          <p>
            <strong>Controller:</strong> The user who uploads or manages deal data (buyer, seller, advisor, analyst, or
            representative).
          </p>
          <p>
            <strong>Processor:</strong> Due Diligence Pro, which stores and processes deal/workflow information on
            behalf of the user.
          </p>
          <p>
            <strong>Sub-Processors:</strong> Third-party CPA firms, attorneys, hosting providers, infrastructure tools,
            payment processors, and integrations engaged to deliver services.
          </p>
          <p>
            <strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          2. Data Processing Purpose
        </h2>
        <p className="mb-3 leading-relaxed">Processor will process data solely for:</p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
          <li>Providing access to the Due Diligence Pro platform</li>
          <li>Enabling workflow, file management, communication, and scheduling</li>
          <li>Facilitating collaboration between users and third-party due diligence partners</li>
          <li>Maintaining platform security and support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          6. Security Measures
        </h2>
        <p className="mb-3 leading-relaxed">Processor will maintain security measures that include:</p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
          <li>Encrypted data transmission (HTTPS)</li>
          <li>Encrypted data at rest</li>
          <li>Access controls</li>
          <li>Logging and monitoring</li>
          <li>Regular backups</li>
          <li>Vendor security audits</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          9. Governing Law
        </h2>
        <p className="leading-relaxed">This DPA is governed by the same jurisdiction as the Terms of Service.</p>
      </section>
    </LegalLayout>
  )
}
