import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Requests | Optimisr",
  description: "Meta Data Deletion Request page for Optimisr.",
};

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-48 pb-32">
        {/* Header Section */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <h1 className="text-4xl md:text-6xl font-black font-condensed uppercase tracking-tight text-optimisr-black mb-4">
            Data Deletion Requests
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Optimisr
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none text-optimisr-darkgrey space-y-10 leading-relaxed text-[16px] md:text-[18px]">
          <p>
            If you would like us to delete any personal data we hold about you as a 
            result of interacting with our Facebook, Instagram, or WhatsApp messaging 
            automation (operated on behalf of our business clients), please follow the 
            steps below.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              How to request deletion:
            </h2>
            <ol className="list-decimal pl-5 space-y-3 text-[16px] md:text-[18px]">
              <li>
                Email us at{" "}
                <a 
                  href="mailto:danny@optimisr.com" 
                  className="text-optimisr-black underline hover:text-opacity-80 transition-colors"
                >
                  danny@optimisr.com
                </a>{" "}
                with the subject line &ldquo;Data Deletion Request&rdquo;
              </li>
              <li>
                Include the name, phone number, or email address associated with your 
                interaction with us (so we can locate your records)
              </li>
              <li>We will confirm and complete your deletion request within 30 days</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              What data we may hold:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] md:text-[18px]">
              <li>Contact information you provided via a lead form, DM, or chat conversation</li>
              <li>Message history from conversations with our automated assistant or team</li>
              <li>Booking/appointment information if you scheduled a consultation through us</li>
            </ul>
          </section>

          <p>
            For more information on how we handle data generally, see our{" "}
            <a 
              href="/privacy" 
                  className="text-optimisr-black underline hover:text-opacity-80 transition-colors"
            >
              Privacy Policy
            </a>.
          </p>

          <p className="font-bold border-t border-black/10 pt-8 mt-12">
            &mdash; Optimisr
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
