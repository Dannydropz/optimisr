"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA: React.FC = () => {
    return (
        <section className="section-stack bg-[#F4F4F4] px-6 pt-16 md:pt-24 pb-32 md:pb-48">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 shadow-sm">
                    <div className="max-w-xl">
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold font-condensed uppercase leading-[0.9] tracking-tight mb-8">
                            <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>Your Next Patient</motion.span>
                            <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>Is Already Enquiring.</motion.span>
                        </h2>
                        <p className="text-[21px] font-medium text-black/50">
                            Every missed call, every slow reply, every ignored DM is a consultation your competitor books instead. Get your lead recovery system live in under a week — one flat monthly price, no contracts, cancel anytime.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                        <a
                            href="#audit"
                            className="w-full sm:w-auto px-12 py-6 bg-optimisr-yellow rounded-2xl text-[19px] font-bold text-center hover:scale-105 transition-all whitespace-nowrap"
                        >
                            Book a Free Audit
                        </a>
                        <a
                            href="#pricing"
                            className="text-[19px] font-bold underline underline-offset-4 hover:text-optimisr-darkgrey whitespace-nowrap"
                        >
                            See Pricing
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
