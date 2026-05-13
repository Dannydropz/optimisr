"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Who is this for?",
        answer: "Optimisr is built for UK aesthetic and cosmetic clinics — Botox, fillers, skin treatments, laser, body contouring, hair removal. Whether you're a solo practitioner or a multi-location clinic, if you're generating leads and losing them to slow follow-up, this is for you."
    },
    {
        question: "Do I need to change my phone system?",
        answer: "No. We set up a forwarding rule on your existing number so unanswered calls route to your AI receptionist. Your team answers when they're available. The AI catches everything they miss."
    },
    {
        question: "How quickly can I go live?",
        answer: "Most clinics are fully set up within 5–7 business days. We configure your AI with your clinic name, treatment menu, pricing guidelines, and FAQs. You approve the script, and we go live."
    },
    {
        question: "What about GDPR?",
        answer: "All data is processed and stored in compliance with UK GDPR. Patient information is encrypted, call recordings are stored securely, and we provide full data processing agreements. We never sell or share patient data."
    },
    {
        question: "Is the AI voice robotic?",
        answer: "No. We use the latest natural British voice technology. Callers consistently mistake it for a real receptionist. We'll send you a demo call before going live so you can hear exactly how it sounds."
    },
    {
        question: "What makes you different from a marketing agency?",
        answer: "Marketing agencies generate traffic. We capture the leads that traffic creates. Most clinics spend heavily on ads but lose 30–40% of enquiries to slow follow-up. We fix that gap. We're not replacing your agency — we're making sure their work actually converts."
    },
    {
        question: "Do you work with clinics outside London?",
        answer: "Yes. We work with aesthetic clinics across the UK. The system is entirely remote — there's nothing to install on-site."
    },
    {
        question: "Can I customise what the AI says?",
        answer: "Absolutely. Every script is tailored to your clinic. You tell us how you want enquiries handled, what questions to ask, what information to share, and what to avoid. We refine it based on real call data every month."
    }
];

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-stack bg-white text-black pt-32 md:pt-48 pb-32 md:pb-48 px-6 rounded-t-[100px] -mt-[100px]" id="faq">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold font-condensed uppercase leading-[0.9] tracking-tight"
                    >
                        COMMON QUESTIONS.
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-2">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`border-b border-black/10 cursor-pointer transition-all ${activeIndex === i ? "pb-6" : "pb-4"}`}
                            onClick={() => toggleFAQ(i)}
                        >
                            <div className="flex items-center justify-between py-4 gap-6">
                                <h3 className="text-[20px] lg:text-[24px] font-bold text-black leading-tight flex-1">
                                    {faq.question}
                                </h3>
                                <motion.span
                                    animate={{ rotate: activeIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl text-black/30 flex-shrink-0"
                                >
                                    ↓
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[17px] leading-[1.5] text-black/60 font-medium pr-4 mt-2">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
