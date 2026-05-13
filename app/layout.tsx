import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimisr | AI-Powered Lead Generation for UK Aesthetic Clinics",
  description:
    "Optimisr plugs the leaks in your clinic's lead pipeline. AI call answering, instant lead response, and skin analysis that turns enquiries into booked consultations — 24/7.",
  openGraph: {
    title: "Optimisr | More Booked Consultations for Your Aesthetic Clinic",
    description: "AI-powered lead capture and follow-up built for UK aesthetic clinics. Never lose a patient enquiry to slow response again.",
    type: "website",
    url: "https://optimisr.com",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
