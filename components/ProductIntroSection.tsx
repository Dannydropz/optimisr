"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        id: "capture",
        icon: "📬",
        title: "Capture every lead.",
        description: "Never miss a lead again—see every call, text, website chat, review, and third-party app message—all from a consolidated inbox.",
    },
    {
        id: "convert",
        title: "Convert more leads.",
        icon: "💰",
        description: "Respond to leads in under 60 seconds with personalized messages. Qualify prospects, answer questions, and book appointments instantly.",
    },
    {
        id: "repeat",
        title: "Drive repeat business.",
        icon: "🔄",
        description: "Automated follow-ups, review requests, and re-engagement campaigns keep customers coming back and referring others.",
    },
    {
        id: "found",
        title: "Get found. Get chosen.",
        icon: "⭐",
        description: "AI-powered review management and SEO optimization help you stand out from the competition and win more searches.",
    },
];

const inboxMessages = [
    { id: 1, avatar: "🌐", name: "New Lead—Website Chat", text: "Hi! I'm interested in your services. Can someone call me?", color: "bg-blue-500" },
    { id: 2, avatar: "✉️", name: "Angela Cortez—New Email", text: "Hello there, I need an estimate. Would someone be able to come and have a...", color: "bg-green-500" },
    { id: 3, avatar: "💬", name: "Mike R.—New Text Message", text: "Hi! Can I schedule a consultation for this Friday?", color: "bg-purple-500" },
    { id: 4, avatar: "📘", name: "Sarah Kim—Facebook", text: "I came in over the weekend and talked to someone about putting in an order for...", color: "bg-[#1877F2]" },
    { id: 5, avatar: "⭐", name: "New Google Review", text: "Amazing service! Responded within minutes and scheduled my appointment same day.", color: "bg-amber-500" },
];

const ProductIntroSection: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="section-stack bg-white text-black pt-48 pb-64 px-6 rounded-t-[100px] -mt-[100px] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-8">
                    <motion.h3
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[17px] font-bold tracking-[0.1em] uppercase text-black/40 mb-10"
                    >
                        YOUR AI EMPLOYEE
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.5rem,6vw,5.5rem)] font-black font-condensed uppercase leading-[0.9] tracking-tighter mb-6"
                    >
                        What Optimisr AI can do for you.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-[20px] lg:text-[22px] leading-[1.35] text-black/50 font-medium max-w-2xl"
                    >
                        Optimisr&apos;s AI is built to talk to more leads, set more appointments, and follow up for your business with little oversight.
                    </motion.p>
                </div>

                {/* Podium-style Feature Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                    {/* Left: Inbox Animation */}
                    <div className="relative">
                        <div className="bg-[#FAFAF8] rounded-[2.5rem] border border-black/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden p-8">
                            {/* Inbox Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-optimisr-yellow rounded-2xl flex items-center justify-center text-2xl shadow-sm">📥</div>
                                <div>
                                    <div className="text-[16px] font-bold text-black">Optimisr Inbox</div>
                                    <div className="flex items-center gap-3 mt-1">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[12px] font-semibold text-green-600">AI Active</span>
                                        </div>
                                        <span className="text-[12px] font-bold text-black/30 bg-black/5 px-2.5 py-0.5 rounded-full">{inboxMessages.length} new</span>
                                    </div>
                                </div>
                            </div>

                            {/* Messages Stack */}
                            <div className="flex flex-col gap-3">
                                {inboxMessages.map((msg, i) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-black/[0.03] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all cursor-pointer group"
                                    >
                                        <div className={`w-10 h-10 ${msg.color} rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                                            {msg.avatar}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[14px] font-bold text-black truncate">{msg.name}</div>
                                            <div className="text-[13px] text-black/40 font-medium truncate">{msg.text}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Accordion Features */}
                    <div className="flex flex-col gap-2">
                        {/* Progress bar */}
                        <div className="h-1.5 bg-black/5 rounded-full mb-6 overflow-hidden">
                            <motion.div
                                className="h-full bg-optimisr-yellow rounded-full"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </div>

                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`border-b border-black/10 cursor-pointer transition-all ${activeFeature === i ? "pb-6" : "pb-4"}`}
                                onClick={() => setActiveFeature(i)}
                            >
                                <div className="flex items-center justify-between py-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${activeFeature === i ? "bg-optimisr-yellow shadow-lg scale-110" : "bg-[#F4F4F4]"}`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-[22px] lg:text-[26px] font-bold text-black leading-tight">{feature.title}</h3>
                                    </div>
                                    <motion.span
                                        animate={{ rotate: activeFeature === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-2xl text-black/30 flex-shrink-0"
                                    >
                                        ↓
                                    </motion.span>
                                </div>

                                <AnimatePresence>
                                    {activeFeature === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[17px] leading-[1.5] text-black/50 font-medium pl-16 pr-4">
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductIntroSection;
