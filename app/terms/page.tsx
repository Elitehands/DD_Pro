"use client"

import LegalLayout from "@/components/legal-layout"

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="Effective Date: The date the User creates an account on the Platform"
    >
      <p className="leading-relaxed mb-6">These Terms govern your use of "Due Diligence Pro" (the "Platform").</p>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          1. Definitions
        </h2>
        <div className="space-y-3 leading-relaxed">
          <p>
            <strong>Platform:</strong> The Due Diligence Pro platform, including the website, client dashboard,
            scheduling tools, and associated services.
          </p>
          <p>
            <strong>User / You:</strong> Any individual or entity accessing or using the platform.
          </p>
          <p>
            <strong>Deal Team:</strong> Independent CPAs, attorneys, legal practitioners, operational partners, or
            consultants engaged to provide due diligence-related services.
          </p>
          <p>
            <strong>Stages:</strong> The four-stage due diligence structure (Support, Scan, Check, Verify).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          2. Nature of Our Service (Facilitator Only)
        </h2>
        <p className="mb-3 leading-relaxed">
          Due Diligence Pro operates solely as a facilitator connecting users with independent professionals.
        </p>
        <p className="mb-3 leading-relaxed">We do not provide:</p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
          <li>Legal advice</li>
          <li>Financial advice</li>
          <li>Tax, investment, or regulated advisory services</li>
          <li>Warranties regarding expert work or outcomes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          10. Payments, Fees, & Chargebacks
        </h2>
        <p className="mb-3 leading-relaxed">Users acknowledge:</p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
          <li>Monthly membership fees are non-refundable</li>
          <li>Stage fees are non-refundable once work begins</li>
          <li>Success Fee is mandatory upon transaction completion</li>
          <li>Chargebacks are not allowed for completed work</li>
          <li>Chargebacks automatically trigger debt-collection proceedings</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          16. Governing Law & Dispute Resolution
        </h2>
        <p className="mb-3 leading-relaxed">These Terms are governed by the laws of England & Wales.</p>
        <p className="mb-6 leading-relaxed">
          All disputes must first be resolved via binding arbitration prior to court action.
        </p>
        <p className="pt-6 border-t leading-relaxed" style={{ borderTopColor: "#3b82f615" }}>
          <strong>
            Legal Notice: Due Diligence Pro is operated by Bimbi Philips Ltd (UK). Registered entity details available
            upon request.
          </strong>
        </p>
      </section>
    </LegalLayout>
  )
}
