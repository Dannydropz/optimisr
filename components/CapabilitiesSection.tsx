"use client";

import React from "react";
import { motion } from "framer-motion";

const capabilities = [
    {
        title: "NEVER MISS A CALL AGAIN",
        description: "Your AI receptionist answers every call — day, night, weekends, bank holidays. A natural British voice greets callers with your clinic name, answers common questions about your treatments, qualifies the enquiry, and captures their details. You get an instant alert with the caller's name, what they're interested in, and their contact details. No voicemail. No hold music. No lost leads.",
        stat: "24/7",
        statLabel: "Coverage",
        link: "#audit",
    },
    {
        title: "SPEED-TO-LEAD THAT BOOKS CONSULTATIONS",
        description: "When a lead fills in a form, sends a DM, or submits an enquiry on your website, our system responds in seconds — not hours. Automated SMS, email, and WhatsApp follow-up that feels personal. It answers their questions, shares relevant treatment info, and guides them to book a consultation.",
        stat: "60s",
        statLabel: "Response Time",
        link: "#audit",
    },
    {
        title: "AI SKIN ANALYSIS THAT SELLS FOR YOU",
        description: "Give prospective patients a personalised skin assessment before they even walk through the door. They upload a selfie. The AI analyses their skin — fine lines, texture, pigmentation, hydration. They get a personalised report highlighting areas for improvement, matched to treatments your clinic actually offers, with a direct link to book a consultation.",
        stat: "AI",
        statLabel: "Analysis Tool",
        link: "#audit",
    },
];

const CapabilitiesSection: React.FC = () => {
    return (
        <section className="section-stack bg-white px-6 pt-48 pb-64 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto" id="what-we-do">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold font-condensed uppercase leading-[0.9] tracking-tight">
                        <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>HOW OPTIMISR</motion.span>
                        <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>PLUGS THE LEAKS.</motion.span>
                    </h2>
                    <p className="text-[21px] leading-[1.4] text-black/50 font-medium mt-6 max-w-2xl">
                        Three systems that work together to make sure no lead slips through.
                    </p>
                </div>
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
