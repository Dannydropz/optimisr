"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
    {
        label: "MORNING.",
        text: "9am. You're mid-consultation. Three Instagram DMs and a missed call. By the time your receptionist checks, they've already booked with the clinic down the road.",
    },
    {
        label: "EVENING.",
        text: "Someone finds your clinic on Google at 8pm. Fills in your contact form. Nobody replies until tomorrow morning. They've already had a consultation booked elsewhere.",
    },
    {
        label: "ALWAYS.",
        text: "You're spending thousands on ads. Leads are coming in. But every slow reply, every missed call, every ignored DM is a consultation you'll never book. Your competitor responded in 30 seconds. You responded in 3 hours. They win.",
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
                                className="text-[clamp(2.5rem,10vw,6.5rem)] font-black font-condensed uppercase leading-[0.85] mb-10 tracking-tighter"
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
                    <h2 className="text-[clamp(2.5rem,9vw,8.5rem)] font-black font-condensed uppercase leading-[0.8] tracking-[-0.05em] text-white mb-12 md:mb-24 max-w-[90rem]">
                        <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>STOP LOSING</motion.span>
                        <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>PATIENTS TO SLOW</motion.span>
                        <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>FOLLOW-UP.</motion.span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">
                        <p className="text-[20px] lg:text-[22px] leading-[1.35] text-white/90 font-medium">
                            Your clinic is generating leads. The problem isn&apos;t traffic &mdash; it&apos;s what happens after they enquire. The average aesthetic clinic loses 30&ndash;40% of leads to slow response times. At &pound;200&ndash;&pound;2,000 per treatment, that&apos;s thousands in lost revenue every single month.
                        </p>
                        <p className="text-[20px] lg:text-[22px] leading-[1.35] text-white/40 font-medium">
                            Optimisr plugs the leaks. We make sure every call is answered, every enquiry gets a response in seconds, and every lead is guided towards a booked consultation &mdash; automatically.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default IntroSection;
