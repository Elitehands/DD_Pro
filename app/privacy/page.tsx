"use client"

import LegalLayout from "@/components/legal-layout"

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="20th of November, 2025">
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          1. Introduction
        </h2>
        <p className="leading-relaxed mb-3">
          Due Diligence Pro ("we," "us," or "our") provides a workflow platform that facilitates communication,
          coordination, and information exchange between buyers, sellers, CPA firms, legal professionals, and other
          deal-related participants.
        </p>
        <p className="leading-relaxed mb-3">
          We are committed to protecting your privacy and handling your information responsibly.
        </p>
        <p className="leading-relaxed">
          This Privacy Policy explains how we collect, use, store, disclose, and safeguard information when you use our
          platform and services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          2. Information We Collect
        </h2>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: "#e0e0ff" }}>
            A. Personal Information
          </h3>
          <p className="mb-3 leading-relaxed">We may collect personal information you provide, including:</p>
          <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
            <li>Full name</li>
            <li>Email address and phone number</li>
            <li>Company name, role, and professional profile</li>
            <li>Account login credentials</li>
            <li>Payment and billing information</li>
            <li>Communications and messages exchanged on the platform</li>
          </ul>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: "#e0e0ff" }}>
            B. Deal & Project Information
          </h3>
          <p className="mb-3 leading-relaxed">Users may upload or create information including:</p>
          <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
            <li>Deal documents and financial files</li>
            <li>Legal agreements and corporate records</li>
            <li>Notes, tasks, and project workflows</li>
            <li>Comments and communication logs</li>
            <li>Due diligence checklists</li>
            <li>Stage-by-stage progress and related activities</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: "#e0e0ff" }}>
            C. Technical & Usage Data
          </h3>
          <p className="mb-3 leading-relaxed">We automatically collect:</p>
          <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
            <li>IP address</li>
            <li>Device and browser details</li>
            <li>Log data and usage patterns</li>
            <li>Pages visited and features accessed</li>
            <li>Security and authentication events</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          3. How We Use Your Information
        </h2>
        <p className="mb-3 leading-relaxed">We use the information we collect to:</p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed">
          <li>Provide, maintain, and operate the platform</li>
          <li>Facilitate communication between you and third-party CPA/legal partners</li>
          <li>Deliver booking, scheduling, and payment functionality</li>
          <li>Send administrative notifications, updates, and security alerts</li>
          <li>Improve platform performance and user experience</li>
          <li>Monitor, detect, and prevent fraudulent or unauthorized activity</li>
          <li>Comply with legal, regulatory, and security requirements</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          10. Your Rights
        </h2>
        <p className="mb-3 leading-relaxed">Depending on your region, you may have the right to:</p>
        <ul className="list-disc pl-6 sm:pl-8 space-y-2 leading-relaxed mb-4">
          <li>Access your personal information</li>
          <li>Correct or update inaccurate information</li>
          <li>Request deletion</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent</li>
        </ul>
        <p className="leading-relaxed">
          <strong>Requests can be made via: support@duediligencepro.ai</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "#ffffff" }}>
          14. Contact Us
        </h2>
        <p className="leading-relaxed">
          <strong>Email: support@duediligencepro.ai</strong>
        </p>
      </section>
    </LegalLayout>
  )
}
