"use client";

import React from "react";
import { motion } from "framer-motion";

const capabilities = [
    {
        title: "Increases Operational Output",
        description: "Focused on execution and precision, our AI Agents increase your team's output by automating routine digital tasks. They respond instantly, process data, and execute workflows asynchronously.",
        stat: "30%",
        statLabel: "Capacity Increase",
        link: "#",
    },
    {
        title: "Adapts To Any Data Structure",
        description: "Train our Agents on your internal docs, CRM, or knowledge base. It learns the exact context of your company and applies nuanced logic to customer requests seamlessly.",
        stat: "100%",
        statLabel: "Custom Knowledge",
        link: "#",
    },
    {
        title: "Deploys In Minutes",
        description: "Built for true plug-and-play. Connect your data sources, establish the guardrails, and your customized AI Agent is live across multiple channels in record time.",
        stat: "48h",
        statLabel: "Average Setup",
        link: "#",
    },
];

const CapabilitiesSection: React.FC = () => {
    return (
        <section className="section-stack bg-white px-6 pt-48 pb-64 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="group bg-[#F4F4F4] rounded-[2.5rem] p-12 min-h-[500px] flex flex-col justify-between hover:bg-optimisr-yellow transition-all duration-500 cursor-pointer"
                        >
                            <div>
                                <div className="mb-8">
                                    <motion.span
                                        className="text-[64px] font-black font-condensed leading-none text-black/10 group-hover:text-black/20 transition-colors"
                                        whileInView={{ scale: [0.8, 1] }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    >
                                        {cap.stat}
                                    </motion.span>
                                    <div className="text-[13px] font-bold uppercase tracking-[0.15em] text-black/30 group-hover:text-black/50 mt-1 transition-colors">{cap.statLabel}</div>
                                </div>
                                <h3 className="text-[clamp(2.5rem,3vw,3.5rem)] font-bold font-condensed uppercase leading-[1.1] mb-8 group-hover:text-black transition-colors break-words">
                                    {cap.title}
                                </h3>
                                <p className="text-[18px] lg:text-[20px] leading-[1.3] text-black/60 group-hover:text-black/80 transition-colors font-medium">
                                    {cap.description}
                                </p>
                            </div>
                            <div className="text-[17px] font-bold underline underline-offset-4 group-hover:text-black">
                                Learn more
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
