"use client";

import React from "react";
import { motion } from "framer-motion";

const tiers = [
    {
        name: "Starter",
        price: "£197",
        setup: "£497",
        period: "/month",
        popular: false,
        bestFor: "Sole traders who want cover when they&apos;re on a job.",
        features: [
            "Up to 50 AI-answered calls/month",
            "Missed call alerts via SMS and email",
            "Custom greeting with your business name",
            "British AI voice",
            "Weekly summary report",
        ],
    },
    {
        name: "Growth",
        price: "£297",
        setup: "£497",
        period: "/month",
        popular: true,
        bestFor: "Busy tradespeople who want leads qualified and booked automatically.",
        features: [
            "Up to 150 AI-answered calls/month",
            "Everything in Starter, plus:",
            "Lead qualification (job type, location, budget, urgency)",
            "Appointment booking into your calendar",
            "SMS follow-up to every caller",
            "Weekly Lead Recovery Report",
        ],
    },
    {
        name: "Pro",
        price: "£497",
        setup: "£497",
        period: "/month",
        popular: false,
        bestFor: "Trade businesses with a team, doing 500k+ and wanting full automation.",
        features: [
            "Unlimited AI-answered calls",
            "Everything in Growth, plus:",
            "Google Review automation",
            "Monthly strategy call",
            "Priority support and script changes",
            "Dashboard showing calls, bookings, and revenue",
        ],
    },
];

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="section-stack bg-[#FAF9F6] px-6 pt-32 md:pt-48 pb-32 md:pb-64 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black font-condensed uppercase leading-[0.9] tracking-tight">
                        SIMPLE PRICING. NO SURPRISES.
                    </h2>
                    <p className="text-[21px] leading-[1.4] text-black/50 font-medium mt-6 max-w-2xl">
                        One flat monthly fee. You know exactly what you&apos;re paying. Your 24/7 receptionist pays for itself with one extra job.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col ${
                                tier.popular
                                    ? "bg-optimisr-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                                    : "bg-white text-black border border-black/5 shadow-sm"
                            }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-optimisr-yellow text-black text-[12px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-[18px] font-bold uppercase tracking-widest mb-4 opacity-60">{tier.name}</h3>
                            </div>

                            <ul className="flex flex-col gap-4 mb-10 flex-grow">
                                {tier.features.map((feature, fi) => (
                                    <li key={fi} className={`flex items-start gap-3 text-[16px] font-medium leading-snug ${
                                        fi === 1 && tier.features[1].includes("plus")
                                            ? tier.popular ? "text-white/40" : "text-black/30"
                                            : tier.popular ? "text-white/80" : "text-black/70"
                                    }`}>
                                        {!feature.includes("plus") && (
                                            <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black ${
                                                tier.popular ? "bg-optimisr-yellow text-black" : "bg-black/10 text-black/60"
                                            }`}>✓</span>
                                        )}
                                        <span className={feature.includes("plus") ? "pl-8" : ""}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <p className={`text-[14px] font-medium leading-snug mb-6 ${tier.popular ? "text-white/40" : "text-black/40"}`}>
                                    Best for: {tier.bestFor}
                                </p>
                                <a
                                    href="#"
                                    className={`block w-full text-center py-4 rounded-xl text-[16px] font-bold transition-all hover:scale-105 active:scale-95 ${
                                        tier.popular
                                            ? "bg-optimisr-yellow text-black"
                                            : "bg-black text-white"
                                    }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Guarantee & ROI lines */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="bg-white rounded-[1.5rem] p-8 border border-black/5">
                        <span className="text-3xl mb-4 block">🛡️</span>
                        <p className="text-[18px] font-semibold leading-snug text-black/80">
                            Try it for 14 days. If you don&apos;t see the value, we&apos;ll refund your setup fee. No questions.
                        </p>
                    </div>
                    <div className="bg-white rounded-[1.5rem] p-8 border border-black/5">
                        <span className="text-3xl mb-4 block">💰</span>
                        <p className="text-[18px] font-semibold leading-snug text-black/80">
                            Your 24/7 receptionist costs less than one missed job per month. Most tradespeople recover that in the first week.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
