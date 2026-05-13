"use client";

import React from "react";
import { motion } from "framer-motion";

const useCases = [
    {
        title: "Step 1 — Patient takes a selfie.",
        description: "From their phone, anywhere. No app download. Just a link on your website or shared in your ads.",
        stat: "01",
        statLabel: "Capture",
    },
    {
        title: "Step 2 — AI analyses their skin.",
        description: "Fine lines, wrinkles, texture, pigmentation, pores, hydration. The analysis runs in seconds and generates a personalised skin report.",
        stat: "02",
        statLabel: "Analyze",
    },
    {
        title: "Step 3 — Matched to your treatments.",
        description: "The report doesn't just flag concerns — it recommends specific treatments that your clinic offers. Anti-wrinkle injections for dynamic lines. Chemical peels for texture.",
        stat: "03",
        statLabel: "Recommend",
    },
    {
        title: "Step 4 — Direct booking link.",
        description: "The report includes a clear CTA to book a consultation at your clinic. The patient arrives pre-educated, pre-qualified, and ready to commit.",
        stat: "04",
        statLabel: "Convert",
    },
];

const UseCasesSection: React.FC = () => {
    return (
        <section className="section-stack bg-white px-6 pt-48 pb-64 rounded-t-[100px] -mt-[100px] overflow-clip">
            <div className="max-w-7xl mx-auto" id="skin-analysis">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-10">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold font-condensed uppercase leading-none tracking-tight mb-6"
                        >
                            YOUR SECRET WEAPON FOR CONSULTATION BOOKINGS.
                        </motion.h2>
                        <p className="text-[20px] text-black/60 font-medium">
                            Most clinics rely on generic before-and-after galleries to convert browsers into patients. That works — but it&apos;s passive. The Optimisr Skin Analysis is active. It meets the patient where they are, gives them something personalised, and moves them one step closer to booking.
                        </p>
                    </div>
                    <div className="flex gap-4 lg:mt-4">
                        <button className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">←</button>
                        <button className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">→</button>
                    </div>
                </div>

                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 -mx-6 px-6 lg:mx-0 lg:px-0">
                    {useCases.map((uc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-shrink-0 w-[85vw] lg:w-[600px] bg-[#F4F4F4] rounded-[3rem] p-12 transition-all hover:shadow-xl group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-optimisr-yellow/20 via-optimisr-grey to-[#D0D0D0] rounded-2xl mb-12 flex items-center justify-center text-black/20 overflow-hidden relative">
                                {/* Stat Display */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.2, type: "spring" }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-[64px] font-black font-condensed text-black/80">{uc.stat}</span>
                                    <span className="text-[14px] font-bold uppercase tracking-[0.15em] text-black/40">{uc.statLabel}</span>
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent group-hover:from-optimisr-yellow/10 transition-colors duration-700" />
                            </div>
                            <h3 className="text-[32px] font-bold leading-[1.1] mb-6">{uc.title}</h3>
                            <p className="text-[19px] leading-[1.4] text-black/60 font-medium mb-10">{uc.description}</p>
                            <a href="#" className="text-[17px] font-bold underline underline-offset-4">Learn more</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
