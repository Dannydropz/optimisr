"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
    {
        label: "ATTRACT.",
        icon: "🎯",
        title: "1. Attract",
        text: "We build the systems that put your clinic in front of the right patients — the ones ready to book, not just browse. More high-value enquiries flowing in on autopilot.",
    },
    {
        label: "OPTIMISE.",
        icon: "⚡",
        title: "2. Optimise",
        text: "Every lead gets a response in seconds, not hours. AI answers your calls 24/7, follows up instantly via SMS and email, and books consultations straight into your calendar.",
    },
    {
        label: "WIN.",
        icon: "🏆",
        title: "3. Win",
        text: "More consultations booked. Higher show rates. Automated review requests after every treatment. A system that compounds — the longer it runs, the stronger your clinic grows.",
    },
];

const IntroSection: React.FC = () => {
    return (
        <motion.section
            initial={{ y: 100, borderRadius: "200px 200px 0 0" }}
            whileInView={{ y: 0, borderRadius: "100px 100px 0 0" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-stack bg-optimisr-black text-white pt-32 md:pt-48 pb-32 md:pb-64 px-6 md:px-12 xl:px-20 -mt-[100px] overflow-clip"
        >
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {items.map((item, i) => (
                        <div key={item.label} className="flex flex-col">
                            <motion.h2
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1, margin: "-60px" }}
                                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(2.5rem,10vw,6.5rem)] font-black font-condensed uppercase leading-[0.85] mb-10 tracking-tighter"
                            >
                                {item.label}
                            </motion.h2>

                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 h-full"
                            >
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] leading-[1.5] text-white/60 font-medium">
                                    {item.text}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default IntroSection;
