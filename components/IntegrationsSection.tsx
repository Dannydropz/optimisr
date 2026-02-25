"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "78%", label: "Cost Reduction" },
    { value: "24/7", label: "Availability" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "< 60s", label: "Lead Response" },
    { value: "30%", label: "Revenue Boost" },
    { value: "100x", label: "Productivity" },
    { value: "5x", label: "More Appointments" },
    { value: "0", label: "Missed Calls" },
];

const IntegrationsSection: React.FC = () => {
    return (
        <section className="section-stack bg-[#F4F4F4] pt-20 md:pt-48 pb-24 md:pb-64 px-6 rounded-t-[50px] md:rounded-t-[100px] -mt-[50px] md:-mt-[100px] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl mb-12 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.5rem,6vw,5.5rem)] font-black font-condensed uppercase leading-[0.85] tracking-tighter mb-6 md:mb-8"
                    >
                        THE NUMBERS DON&apos;T LIE.
                    </motion.h2>
                    <p className="text-[21px] leading-[1.4] text-black/50 font-medium">
                        Businesses using Optimisr AI Employees see measurable results from day one. No payroll, no sick days, no missed leads—just consistent, around-the-clock performance.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07, type: "spring", stiffness: 200 }}
                            className="h-40 bg-white flex flex-col items-center justify-center rounded-2xl hover:bg-optimisr-yellow transition-colors group cursor-default"
                        >
                            <motion.span
                                className="text-[36px] font-black font-condensed text-black group-hover:scale-110 transition-transform"
                                whileInView={{ scale: [0.5, 1] }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                            >
                                {stat.value}
                            </motion.span>
                            <span className="text-[13px] font-bold text-black/30 group-hover:text-black/60 transition-colors uppercase tracking-widest mt-2">
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
