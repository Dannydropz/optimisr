"use client";

import React, { useRef } from "react";
import { motion, useScroll, MotionValue } from "framer-motion";

const skills = [
    {
        title: "Call Answering",
        description: "Every call picked up on the first ring. Your 24/7 receptionist answers with your business name, in a natural British voice, and handles the enquiry professionally — day, night, weekends, bank holidays.",
        icon: "📞",
        color: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        title: "Lead Qualification",
        description: "The AI asks the right questions: what's the job, where are they, when do they need it, what's the budget. You only get notified about real leads that match your services.",
        icon: "✅",
        color: "bg-green-100",
        textColor: "text-green-600"
    },
    {
        title: "Appointment Booking",
        description: "Qualified leads get booked straight into your calendar. No back-and-forth texts, no missed callbacks. The job is in your diary before you've finished the one you're on.",
        icon: "📅",
        color: "bg-purple-100",
        textColor: "text-purple-600"
    },
    {
        title: "Instant Notifications",
        description: "Get a text and email the moment a new lead comes in — with the caller's name, job details, and contact info. You see everything in real-time, even if you're on the tools.",
        icon: "💬",
        color: "bg-rose-100",
        textColor: "text-rose-600"
    },
    {
        title: "Review Requests",
        description: "After every completed job, your AI texts the customer asking for a Google review. More 5-star reviews = higher on Google = more calls. Runs on autopilot.",
        icon: "⭐",
        color: "bg-amber-100",
        textColor: "text-amber-600"
    },
];

interface CardProps {
    index: number;
    skill: typeof skills[0];
    progress: MotionValue<number>;
}

const SkillCard: React.FC<CardProps> = ({ skill }) => {
    return (
        <div
            className="sticky w-full flex justify-center pb-8 md:pb-[10vh]"
            style={{
                top: '10vh',
            }}
        >
            <motion.div
                className="relative w-full max-w-5xl h-auto md:h-[70vh] min-h-[400px] md:min-h-[500px] max-h-none md:max-h-[750px] flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-14 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_-15px_40px_rgba(0,0,0,0.1)] border border-black/5 bg-white overflow-hidden"
            >
                <div className="w-full md:w-1/2 flex flex-col justify-center h-full pr-0 md:pr-12 relative z-10">
                    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-3xl md:text-5xl mb-6 md:mb-8 flex-shrink-0 ${skill.color} ${skill.textColor}`}>
                        {skill.icon}
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-condensed uppercase tracking-tight mb-4 md:mb-6 leading-[1.05]">{skill.title}</h3>
                    <p className="text-base sm:text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-md">{skill.description}</p>
                </div>

                <div className="w-full md:w-1/2 h-40 sm:h-48 md:h-full mt-6 md:mt-0 flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-full h-full bg-[#f8f8f8] rounded-[2rem] md:rounded-[2.5rem] border border-black/[0.03] flex items-center justify-center shadow-inner relative overflow-hidden group">
                        {/* Decorative background element */}
                        <div className={`absolute -inset-4 opacity-50 blur-3xl group-hover:opacity-100 transition-opacity duration-700 ${skill.color}`} />
                        <span className="text-[80px] sm:text-[100px] md:text-[180px] relative z-10 drop-shadow-2xl opacity-90 group-hover:scale-110 transition-transform duration-500">{skill.icon}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SkillsSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section className="section-stack bg-[#F4F4F4] pt-20 md:pt-32 lg:pt-48 pb-16 md:pb-32 rounded-t-[50px] md:rounded-t-[100px] -mt-[50px] md:-mt-[100px]" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 relative z-10">
                <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold font-condensed uppercase leading-[0.9] tracking-tight text-center md:text-left">
                    <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>EVERYTHING YOUR</motion.span>
                    <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>24/7 RECEPTIONIST</motion.span>
                    <motion.span className="block" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>DOES FOR YOU.</motion.span>
                </h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-xl text-black/50 mt-6 max-w-2xl text-center md:text-left font-medium"
                >
                    Set it up once. It handles your calls, your bookings, and your follow-ups — 24 hours a day, 7 days a week.
                </motion.p>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pb-20">
                {skills.map((skill, index) => {
                    return (
                        <SkillCard
                            key={index}
                            index={index}
                            skill={skill}
                            progress={scrollYProgress}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default SkillsSection;
