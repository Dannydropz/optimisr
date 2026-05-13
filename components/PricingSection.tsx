"use client";

import React from "react";
import { motion } from "framer-motion";

const tiers = [
    {
        name: "Essentials",
        price: "£297",
        setup: "£997",
        period: "/month",
        popular: false,
        bestFor: "Clinics that want 24/7 phone coverage and no more missed calls.",
        features: [
            "AI call answering — up to 75 calls/month",
            "Natural British AI voice with your clinic name",
            "Missed call alerts via SMS and email",
            "Lead capture and instant notifications",
            "Weekly summary report",
        ],
    },
    {
        name: "Growth",
        price: "£497",
        setup: "£997",
        period: "/month",
        popular: true,
        bestFor: "Clinics running ads who want leads qualified and consultations booked automatically.",
        features: [
            "Up to 200 AI-answered calls/month",
            "Everything in Essentials, plus:",
            "Lead qualification (treatment interest, budget, urgency)",
            "Automated SMS/email/WhatsApp follow-up",
            "Consultation booking into your calendar",
            "Weekly Lead Recovery Report",
        ],
    },
    {
        name: "Premium",
        price: "£697",
        setup: "£997",
        period: "/month",
        popular: false,
        bestFor: "Established clinics doing £30k+/month who want the full lead recovery and conversion system.",
        features: [
            "Unlimited AI-answered calls",
            "Everything in Growth, plus:",
            "AI Skin Analysis tool — white-labelled to your clinic",
            "Google Review automation after treatments",
            "Monthly optimisation call",
            "Performance dashboard — calls, leads, bookings, revenue recovered",
            "Priority support and script changes",
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
                        <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>SIMPLE PRICING.</motion.span>
                        <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>BUILT FOR CLINICS.</motion.span>
                    </h2>
                    <p className="text-[21px] leading-[1.4] text-black/50 font-medium mt-6 max-w-2xl">
                        One flat monthly fee. No contracts. Your system pays for itself with one extra consultation.
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
                                <div className="flex items-end gap-1 mb-2">
                                    <span className="text-[40px] md:text-[48px] font-black font-condensed leading-none">{tier.price}</span>
                                    <span className="text-[16px] font-bold opacity-60 mb-2">{tier.period}</span>
                                </div>
                                <div className="text-[15px] font-bold opacity-50">{tier.setup} one-time setup</div>
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
                                    href="#audit"
                                    className={`block w-full text-center py-4 rounded-xl text-[16px] font-bold transition-all hover:scale-105 active:scale-95 ${
                                        tier.popular
                                            ? "bg-optimisr-yellow text-black"
                                            : "bg-black text-white"
                                    }`}
                                >
                                    Book a Free Audit
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
                            14-day money-back guarantee. If Optimisr doesn&apos;t capture real leads in your first two weeks, we refund your setup fee. No questions asked.
                        </p>
                    </div>
                    <div className="bg-white rounded-[1.5rem] p-8 border border-black/5">
                        <span className="text-3xl mb-4 block">💰</span>
                        <p className="text-[18px] font-semibold leading-snug text-black/80">
                            One extra consultation pays for your entire month. A single Botox patient is worth £500–2,000/year. Most clinics recover their investment in the first week.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
