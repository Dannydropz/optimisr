"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA: React.FC = () => {
    return (
        <section className="section-stack bg-[#F4F4F4] px-6 pt-32 md:pt-48 pb-32 md:pb-48 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 shadow-sm">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.5rem,6vw,5rem)] font-bold font-condensed uppercase leading-[0.9] tracking-tight mb-8"
                        >
                            Your Next Customer Is Already Calling.
                        </motion.h2>
                        <p className="text-[21px] font-medium text-black/50">
                            Every missed call is a job your competitor picks up. Get your AI receptionist live in under a week — one flat monthly price, no contracts, cancel anytime.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                        <a
                            href="#"
                            className="w-full sm:w-auto px-12 py-6 bg-optimisr-yellow rounded-2xl text-[19px] font-bold text-center hover:scale-105 transition-all"
                        >
                            Hear a Demo Call
                        </a>
                        <a
                            href="#pricing"
                            className="text-[19px] font-bold underline underline-offset-4 hover:text-optimisr-darkgrey"
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
