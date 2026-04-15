import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimisr | 24/7 AI Call Answering for UK Tradespeople — Never Miss a Lead",
  description:
    "Optimisr delivers AI employees that respond to leads in seconds, book appointments 24/7, and follow up automatically — turning missed calls into closed deals.",
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
