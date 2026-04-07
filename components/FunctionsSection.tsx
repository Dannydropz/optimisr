"use client";

import React from "react";
import { motion } from "framer-motion";

const solutions = [
    { title: "Step 1 — Your Phone Rings", text: "A potential customer calls your business number. Instead of voicemail, your 24/7 receptionist picks up instantly with a friendly, natural greeting using your business name." },
    { title: "Step 2 — The AI Qualifies the Lead", text: "It asks the key questions — what job they need, their location, timing, and any details you want captured. No scripts that sound robotic. Natural conversation, tailored to your trade." },
    { title: "Step 3 — The Job Gets Booked", text: "If the lead matches your services, the AI checks your availability and books them straight into your calendar. The caller gets a confirmation. You get a notification." },
    { title: "Step 4 — You Get the Full Picture", text: "Instant text and email alert with the caller's name, number, job details, and booking time. Plus a full transcript of the call so you know exactly what was discussed." },
    { title: "Step 5 — Follow-Up on Autopilot", text: "Missed the booking window? The AI sends a polite follow-up text. Job completed? It sends a review request. No lead falls through the cracks." },
];

const FunctionsSection: React.FC = () => {
    return (
        <section className="section-stack bg-[#F4F4F4] px-6 pt-32 md:pt-48 pb-16 md:pb-24 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2rem,5vw,4rem)] font-bold font-condensed uppercase leading-none tracking-tight mb-12 md:mb-20"
                >
                    HOW OPTIMISR WORKS — STEP BY STEP.
                </motion.h2>

                <div className="flex flex-col gap-10">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={sol.title}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group border-t border-black/10 pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 hover:bg-white/50 transition-all rounded-xl lg:px-6"
                        >
                            <h3 className="text-[32px] font-bold w-full lg:w-1/4 group-hover:text-black transition-colors">{sol.title}</h3>
                            <p className="text-[19px] leading-[1.4] text-black/50 font-medium w-full lg:w-3/4 group-hover:text-black/80 transition-colors">
                                {sol.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunctionsSection;
