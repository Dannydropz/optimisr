import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Optimisr",
  description: "Learn how Optimisr collects, uses, and safeguards data for our aesthetic clinic growth systems.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-48 pb-32">
        {/* Header Section */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <h1 className="text-4xl md:text-6xl font-black font-condensed uppercase tracking-tight text-optimisr-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Last updated: June 24, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none text-optimisr-darkgrey space-y-10 leading-relaxed text-[16px] md:text-[18px]">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              1. Introduction
            </h2>
            <p>
              Optimisr AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of our users, clients, and their patients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our lead management platforms, and utilize our AI-powered call and automation services (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p>
              By accessing or using our Services, you consent to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              2. Information We Collect
            </h2>
            <p>
              To deliver our automated services, we collect information about clinic operations and details regarding patient enquiries.
            </p>
            
            <div className="pl-4 border-l-2 border-black/10 space-y-4 my-6">
              <div>
                <h3 className="text-lg font-bold text-optimisr-black">A. Information Provided by Clinics</h3>
                <p className="text-sm text-gray-500 mb-2">Details provided by aesthetic clinics during onboarding and system configuration:</p>
                <ul className="list-disc pl-5 space-y-1 text-[16px]">
                  <li><strong>Business Information:</strong> Clinic name, location, staff contact details, and calendar synchronization credentials.</li>
                  <li><strong>Communications:</strong> Any correspondence between your clinic and our support or sales team.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-optimisr-black">B. Patient Enquiry Data</h3>
                <p className="text-sm text-gray-500 mb-2">Details processed on behalf of clinics to automate patient scheduling and follow-ups:</p>
                <ul className="list-disc pl-5 space-y-1 text-[16px]">
                  <li><strong>Contact Information:</strong> Patient name, phone number, and email address submitted via lead forms, chatbots, or capture during inbound phone calls.</li>
                  <li><strong>Enquiry Details:</strong> Requested treatment times, specific treatment interests, message contents, and call transcripts processed by our AI call answering system.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-optimisr-black">C. Technical &amp; Usage Data</h3>
                <p className="text-sm text-gray-500 mb-2">Automated system logs and analytics tools:</p>
                <ul className="list-disc pl-5 space-y-1 text-[16px]">
                  <li><strong>Log Data:</strong> IP addresses, browser type, operating system, referring pages, and timestamps.</li>
                  <li><strong>Cookies:</strong> Tracking technologies to monitor website usage and optimize performance.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              3. How We Use Your Information
            </h2>
            <p>
              We process information to facilitate clinic growth, optimize call-answering flows, and improve lead management efficiency:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Service Delivery:</strong> To operate, maintain, and optimize our 24/7 AI Call Answering, Instant SMS responses, and Consultation Booking system.</li>
              <li><strong>Integration Support:</strong> Synchronizing booking data directly with clinic calendars and electronic health record (EHR) integrations.</li>
              <li><strong>Product Improvement:</strong> Analyzing aggregated, anonymized call transcripts and lead conversions to train and refine our AI systems for better accuracy and user experience.</li>
              <li><strong>Customer Relations:</strong> Providing customer support, resolving technical issues, and sharing updates about our platform.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              4. Data Sharing &amp; Subprocessors
            </h2>
            <p>
              We do not sell user or patient data. Data is shared only under strict confidentiality agreements with trusted partners:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Aesthetic Clinics:</strong> Any patient lead data collected is immediately transferred to the respective clinic with which the patient initiated contact.</li>
              <li><strong>Service Providers:</strong> We share data with third-party subprocessors for essential infrastructure services (such as cloud hosting, SMS/email delivery gateways, calendar integrations, and generative AI API providers).</li>
              <li><strong>Legal Compliance:</strong> When required by law, we may disclose personal data to UK law enforcement or regulatory authorities.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              5. GDPR &amp; UK Data Protection Compliance
            </h2>
            <p>
              If you reside in the United Kingdom or the European Economic Area (EEA), you are protected by the General Data Protection Regulation (GDPR) and the Data Protection Act 2018. Under these regulations, you have rights to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to, rectification of, or erasure of your personal data.</li>
              <li>Object to or restrict the processing of your personal data.</li>
              <li>Receive a copy of your personal data in a structured, machine-readable format.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p>
              Patients wishing to exercise these rights should contact the relevant aesthetic clinic directly, as they act as the Data Controller, while Optimisr AI acts as the Data Processor. If you wish to contact us directly regarding our data handling, please reach out via the email listed below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              6. Data Security &amp; Retention
            </h2>
            <p>
              We employ advanced industry-standard physical, administrative, and technological security measures to protect data from unauthorized access, loss, or alteration. Lead data and AI conversation histories are retained only as long as necessary to fulfill the business purposes outlined in this policy, or in compliance with legal retention periods.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              7. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <p className="font-bold mt-2">
              Email:{" "}
              <a href="mailto:hello@optimisr.com" className="text-optimisr-black underline hover:text-opacity-80 transition-colors">
                hello@optimisr.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
