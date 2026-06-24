import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Deauthorization | Optimisr",
  description: "Meta App Deauthorization Callback information page for Optimisr.",
};

export default function DeauthorizePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-48 pb-32">
        {/* Header Section */}
        <div className="border-b border-black/10 pb-8 mb-12">
          <h1 className="text-4xl md:text-6xl font-black font-condensed uppercase tracking-tight text-optimisr-black mb-4">
            App Deauthorization
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Optimisr
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none text-optimisr-darkgrey space-y-10 leading-relaxed text-[16px] md:text-[18px]">
          <p>
            If you&rsquo;ve removed Optimisr&rsquo;s access to your Facebook Page, Instagram account, 
            or WhatsApp Business Account through Meta&rsquo;s settings, this confirms that 
            action has been received.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-condensed uppercase text-optimisr-black tracking-tight">
              What happens next:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] md:text-[18px]">
              <li>We will no longer be able to send or receive messages on your behalf</li>
              <li>Any automation we had configured for your account will stop running</li>
              <li>
                Your data associated with our service will be handled according to our{" "}
                <a 
                  href="/privacy" 
                  className="text-optimisr-black underline hover:text-opacity-80 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <p>
            If you removed our access by mistake, or have any questions, please contact 
            us at{" "}
            <a 
              href="mailto:danny@optimisr.com" 
              className="text-optimisr-black underline hover:text-opacity-80 transition-colors"
            >
              danny@optimisr.com
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
