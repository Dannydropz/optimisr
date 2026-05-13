"use client";

import React from "react";
import { motion } from "framer-motion";

const solutions = [
    { title: "Step 1 — We Audit Your Lead Flow", text: "Where are enquiries coming from? Where are they falling through? We map your entire lead journey — ads, website, phone, social — and find the leaks." },
    { title: "Step 2 — We Build Your System", text: "AI call answering configured with your clinic name, treatment menu, and FAQs. Lead response automation connected to your forms and DMs. Skin analysis tool customised with your branding and treatment offerings." },
    { title: "Step 3 — We Go Live", text: "Your system starts capturing leads from day one. Every call answered. Every form submission responded to in seconds. Every skin analysis leading to a booking link." },
    { title: "Step 4 — We Optimise Monthly", text: "We review your call transcripts, lead flow, and booking rates. We refine scripts, improve responses, and maximise your consultation bookings month on month." },
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
                        FROM SETUP TO BOOKED CONSULTATIONS IN ONE WEEK.
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
