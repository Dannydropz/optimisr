"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
    {
        label: "SPEED.",
        text: "The average company takes hours to respond to a customer inquiry. By then, the opportunity is gone. Speed to resolution is everything in any industry.",
    },
    {
        label: "24/7.",
        text: "Your AI Agent never sleeps, never takes a day off, never drops a ticket. Every inquiry gets an instant, personalized response—day or night.",
    },
    {
        label: "SCALE.",
        text: "More conversations. Faster support. Higher conversion rates. Our AI Agents empower your team to scale operations effortlessly and drive revenue.",
    },
];

const IntroSection: React.FC = () => {
    return (
        <motion.section
            initial={{ y: 100, borderRadius: "200px 200px 0 0" }}
            whileInView={{ y: 0, borderRadius: "100px 100px 0 0" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="section-stack bg-optimisr-black text-white pt-48 pb-64 px-6 md:px-12 xl:px-20 -mt-[100px] overflow-hidden"
        >
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col"
                        >
                            <h2 className="text-[clamp(4rem,10vw,6.5rem)] font-black font-condensed uppercase leading-[0.85] mb-10 tracking-tighter">
                                {item.label}
                            </h2>
                            <p className="text-[18px] lg:text-[21px] leading-[1.3] text-white/50 font-medium max-w-sm">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-64"
                >
                    <h2 className="text-[clamp(3.5rem,9vw,8.5rem)] font-black font-condensed uppercase leading-[0.8] tracking-[-0.05em] text-white mb-24 max-w-[90rem]">
                        AUTOMATE THE ROUTINE. EMPOWER YOUR TEAM.
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">
                        <p className="text-[20px] lg:text-[22px] leading-[1.35] text-white/90 font-medium">
                            Bottlenecks in communication, delayed responses, and manual tasks are slowing down your growth. Legacy software simply isn&apos;t enough to stay competitive.
                        </p>
                        <p className="text-[20px] lg:text-[22px] leading-[1.35] text-white/40 font-medium">
                            Optimisr&apos;s AI Agents resolve issues, qualify leads, navigate complex workflows, and integrate with your existing tech stack—so your human team can focus on strategy and high-value work.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default IntroSection;
