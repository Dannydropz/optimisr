"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
    {
        label: "MONDAY MORNING.",
        text: "8am. Phone's ringing off the hook. You're under a boiler in Croydon. Three missed calls before 9. Two of them already called someone else.",
    },
    {
        label: "SATURDAY EVENING.",
        text: "Emergency leak. Homeowner finds you on Google. Straight to voicemail. They scroll to the next result and book them instead.",
    },
    {
        label: "EVERY SINGLE DAY.",
        text: "You're on the tools earning money — but every unanswered call is a job you'll never know you lost. Your competitor answered in 30 seconds. You answered in 3 hours. Game over.",
    },
];

const IntroSection: React.FC = () => {
    return (
        <motion.section
            initial={{ y: 100, borderRadius: "200px 200px 0 0" }}
            whileInView={{ y: 0, borderRadius: "100px 100px 0 0" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-stack bg-optimisr-black text-white pt-32 md:pt-48 pb-32 md:pb-64 px-6 md:px-12 xl:px-20 -mt-[100px] overflow-clip"
        >
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {items.map((item, i) => (
                        <div key={item.label} className="flex flex-col">
                            <motion.h2
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1, margin: "-60px" }}
                                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(4rem,10vw,6.5rem)] font-black font-condensed uppercase leading-[0.85] mb-10 tracking-tighter"
                            >
                                {item.label}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.1, margin: "-60px" }}
                                transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
                                className="text-[18px] lg:text-[21px] leading-[1.3] text-white/50 font-medium max-w-sm"
                            >
                                {item.text}
                            </motion.p>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-32 md:mt-64"
                >
                    <h2 className="text-[clamp(3.5rem,9vw,8.5rem)] font-black font-condensed uppercase leading-[0.8] tracking-[-0.05em] text-white mb-12 md:mb-24 max-w-[90rem]">
                        YOU DON&apos;T NEED MORE LEADS. YOU NEED TO STOP LOSING THE ONES YOU ALREADY GET.
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">
                        <p className="text-[20px] lg:text-[22px] leading-[1.35] text-white/90 font-medium">
                            The average tradesperson misses 30&ndash;40% of incoming calls. Each missed call could be worth &pound;500 to &pound;5,000.
                        </p>
                        <p className="text-[20px] lg:text-[22px] leading-[1.35] text-white/40 font-medium">
                            You&apos;re not losing work because your marketing isn&apos;t working. You&apos;re losing it because you&apos;re too busy doing the work to answer the phone. Optimisr gives you a 24/7 receptionist that picks up every call, qualifies the lead, books the job into your calendar, and sends you a notification &mdash; all before the caller even thinks about ringing your competitor.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default IntroSection;
