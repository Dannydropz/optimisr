"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA: React.FC = () => {
    return (
        <section className="section-stack bg-[#F4F4F4] px-6 pt-48 pb-48 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-[3rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.5rem,6vw,5rem)] font-bold font-condensed uppercase leading-[0.9] tracking-tight mb-8"
                        >
                            Your AI Employee is Ready to Clock In.
                        </motion.h2>
                        <p className="text-[21px] font-medium text-black/50">
                            Stop losing leads to slow responses. See how Optimisr can convert more leads, book more appointments, and grow your revenue—starting today.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                        <a
                            href="#"
                            className="w-full sm:w-auto px-12 py-6 bg-optimisr-yellow rounded-2xl text-[19px] font-bold text-center hover:scale-105 transition-all"
                        >
                            Watch a Demo
                        </a>
                        <a
                            href="#"
                            className="text-[19px] font-bold underline underline-offset-4 hover:text-optimisr-darkgrey"
                        >
                            Talk to Sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
