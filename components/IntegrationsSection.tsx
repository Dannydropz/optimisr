"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "< 3s", label: "Average answer time", highlight: false },
    { value: "30%+", label: "More leads recovered", highlight: false },
    { value: "24/7", label: "Every call answered — nights, weekends, bank holidays", highlight: false },
    { value: "£2,400+", label: "Average monthly revenue recovered per client", highlight: true },
];

const IntegrationsSection: React.FC = () => {
    return (
        <section className="section-stack bg-[#F4F4F4] pt-20 md:pt-48 pb-24 md:pb-64 px-6 rounded-t-[50px] md:rounded-t-[100px] -mt-[50px] md:-mt-[100px] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl mb-12 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.5rem,6vw,5.5rem)] font-black font-condensed uppercase leading-[0.85] tracking-tighter mb-6 md:mb-8"
                    >
                        THE NUMBERS DON&apos;T LIE.
                    </motion.h2>
                    <p className="text-[21px] leading-[1.4] text-black/50 font-medium">
                        Tradespeople using Optimisr recover leads they were losing every single day. No extra staff, no answering service, no missed jobs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.07, type: "spring", stiffness: 200 }}
                            className={`min-h-48 p-6 flex flex-col items-center justify-center text-center rounded-2xl group cursor-default transition-all ${
                                stat.highlight 
                                    ? 'bg-optimisr-yellow shadow-xl scale-[1.02] md:scale-105 border-2 border-black/5' 
                                    : 'bg-white hover:bg-[#fafafa]'
                            }`}
                        >
                            <motion.span
                                className={`text-[42px] font-black font-condensed transition-transform ${
                                    stat.highlight ? 'text-black group-hover:scale-110' : 'text-black group-hover:scale-110'
                                }`}
                                whileInView={{ scale: [0.5, 1] }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                            >
                                {stat.value}
                            </motion.span>
                            <span className={`text-[14px] font-bold uppercase tracking-widest mt-4 leading-snug ${
                                stat.highlight ? 'text-black/70' : 'text-black/40 group-hover:text-black/60 transition-colors'
                            }`}>
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
