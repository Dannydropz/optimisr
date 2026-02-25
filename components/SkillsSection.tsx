"use client";

import React, { useRef } from "react";
import { motion, useScroll, MotionValue } from "framer-motion";

const skills = [
    {
        title: "Lead Generation",
        description: "Your AI works 24/7 scanning channels and engaging prospects so your pipeline is always full and your sales team always has interested leads to close.",
        icon: "🎯",
        color: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        title: "Customer Support",
        description: "Resolve tickets automatically, answer FAQs instantly, and route complex issues seamlessly. Provide white-glove service without growing headcount.",
        icon: "🎧",
        color: "bg-green-100",
        textColor: "text-green-600"
    },
    {
        title: "Social Media",
        description: "Engage with your audience across platforms. Auto-reply to comments, manage DMs, and turn social interactions into real business opportunities.",
        icon: "📱",
        color: "bg-purple-100",
        textColor: "text-purple-600"
    },
    {
        title: "Ad Optimization",
        description: "Automatically refine your ad targeting, write compelling copy, and handle A/B testing dynamically to maximize your return on ad spend.",
        icon: "📈",
        color: "bg-rose-100",
        textColor: "text-rose-600"
    },
    {
        title: "Data Analysis",
        description: "Identify trends and pull insights out of your data in real-time. Make smarter, faster decisions without spending hours in spreadsheets.",
        icon: "📊",
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
            className="sticky w-full flex justify-center"
            style={{
                top: '15vh',
                marginBottom: '10vh'
            }}
        >
            <motion.div
                className="relative w-full max-w-5xl h-[70vh] min-h-[500px] max-h-[750px] flex flex-col md:flex-row items-center p-8 md:p-14 lg:p-16 rounded-[3.5rem] shadow-[0_-15px_40px_rgba(0,0,0,0.1)] border border-black/5 bg-white overflow-hidden"
            >
                <div className="w-full md:w-1/2 flex flex-col justify-center h-full pr-0 md:pr-12 relative z-10">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center text-4xl md:text-5xl mb-8 flex-shrink-0 ${skill.color} ${skill.textColor}`}>
                        {skill.icon}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold font-condensed uppercase tracking-tight mb-6 leading-[1.05]">{skill.title}</h3>
                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-md">{skill.description}</p>
                </div>

                <div className="w-full md:w-1/2 h-48 md:h-full mt-8 md:mt-0 flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-full h-full bg-[#f8f8f8] rounded-[2.5rem] border border-black/[0.03] flex items-center justify-center shadow-inner relative overflow-hidden group">
                        {/* Decorative background element */}
                        <div className={`absolute -inset-4 opacity-50 blur-3xl group-hover:opacity-100 transition-opacity duration-700 ${skill.color}`} />
                        <span className="text-[100px] md:text-[180px] relative z-10 drop-shadow-2xl opacity-90 group-hover:scale-110 transition-transform duration-500">{skill.icon}</span>
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
        <section className="section-stack bg-[#F4F4F4] pt-32 lg:pt-48 pb-[20vh] rounded-t-[100px] -mt-[100px]" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold font-condensed uppercase leading-[0.9] tracking-tight text-center md:text-left"
                >
                    EVERY SKILL. ONE AI.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-xl text-black/50 mt-6 max-w-2xl text-center md:text-left font-medium"
                >
                    Your AI Agent learns your business inside and out, mastering every critical function you need to grow and outpace the competition.
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
