"use client";

import React from "react";
import { motion } from "framer-motion";

const useCases = [
    {
        title: "Omnichannel Support — Resolve Issues Faster Than Ever.",
        description: "Your AI Agent handles inquiries via web chat, SMS, email, and social media seamlessly. It understands intent and provides accurate, instant resolutions 24/7.",
        stat: "< 60s",
        statLabel: "Response Time",
    },
    {
        title: "Workflow Automation — Your Operations, Running on Autopilot.",
        description: "Let your AI Agent qualify prospects, update CRM records, or manage scheduling. It handles the repetitive back-and-forth so your team stays focused on complex tasks.",
        stat: "10x",
        statLabel: "Efficiency Gain",
    },
    {
        title: "Smart Insights — Turn Interactions Into Actionable Data.",
        description: "Analyze every conversation to identify trends, extract feedback, and optimize performance. Turn unstructured communication into clear paths for growth.",
        stat: "85%",
        statLabel: "Data Utilization",
    },
];

const UseCasesSection: React.FC = () => {
    return (
        <section className="section-stack bg-white px-6 pt-48 pb-64 rounded-t-[100px] -mt-[100px] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold font-condensed uppercase leading-none tracking-tight"
                    >
                        How Optimisr Works For You.
                    </motion.h2>
                    <div className="flex gap-4">
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
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-shrink-0 w-[85vw] lg:w-[600px] bg-[#F4F4F4] rounded-[3rem] p-12 transition-all hover:shadow-xl group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-optimisr-yellow/20 via-optimisr-grey to-[#D0D0D0] rounded-2xl mb-12 flex items-center justify-center text-black/20 overflow-hidden relative">
                                {/* Stat Display */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
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
