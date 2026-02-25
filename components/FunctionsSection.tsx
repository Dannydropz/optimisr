"use client";

import React from "react";
import { motion } from "framer-motion";

const solutions = [
    { title: "Speed to Lead", text: "Respond to every lead in under 60 seconds—via text, email, or chat. While your competitors take hours, your AI Employee closes the gap instantly." },
    { title: "Appointment Booking", text: "Your AI Employee qualifies leads, checks availability, and books appointments directly into your calendar—no human needed." },
    { title: "24/7 Call Handling", text: "Never miss a call again. Your AI Employee answers, qualifies, and routes calls around the clock—even on weekends and holidays." },
    { title: "Follow-Up Sequences", text: "Automated, personalized follow-ups that re-engage cold leads and nurture warm ones. Consistent outreach without the manual effort." },
    { title: "Review Management", text: "Automatically request reviews after every job, respond to new reviews, and build a 5-star reputation that wins more business." },
];

const FunctionsSection: React.FC = () => {
    return (
        <section className="section-stack bg-[#F4F4F4] px-6 pt-48 pb-64 rounded-t-[100px] -mt-[100px]">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2rem,5vw,4rem)] font-bold font-condensed uppercase leading-none tracking-tight mb-20"
                >
                    EVERYTHING YOUR AI EMPLOYEE CAN DO.
                </motion.h2>

                <div className="flex flex-col gap-10">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={sol.title}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group border-t border-black/10 pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 hover:bg-white/50 transition-all rounded-xl lg:px-6"
                        >
                            <h3 className="text-[32px] font-bold w-full lg:w-1/4 group-hover:text-black transition-colors">{sol.title}</h3>
                            <p className="text-[19px] leading-[1.4] text-black/50 font-medium w-full lg:w-2/4 group-hover:text-black/80 transition-colors">
                                {sol.text}
                            </p>
                            <a href="#" className="text-[17px] font-bold w-full lg:w-1/4 text-right underline underline-offset-4 flex-shrink-0">
                                Learn more
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FunctionsSection;
