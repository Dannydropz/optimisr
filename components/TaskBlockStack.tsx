"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tasks = [
    { label: "New Lead", type: "brand", bg: "bg-optimisr-yellow", text: "text-black", depth: "bg-optimisr-yellow/80" },
    { label: "Book Appt", type: "stone", bg: "bg-neutral-100", text: "text-neutral-600", depth: "bg-neutral-300" },
    { label: "Follow Up", type: "wood", bg: "bg-[#D2B48C]", text: "text-[#5D4037]", depth: "#A1887F" },
    { label: "Send Quote", type: "dark", bg: "bg-black", text: "text-white", depth: "bg-neutral-800" },
    { label: "Get Review", type: "stone", bg: "bg-neutral-200", text: "text-neutral-700", depth: "bg-neutral-400" },
    { label: "Close Deal", type: "brand", bg: "bg-optimisr-yellow", text: "text-black", depth: "bg-optimisr-yellow/80" },
];

const TaskBlockStack = () => {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev % tasks.length) + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full aspect-[4/5] max-w-[550px] flex items-center justify-center select-none perspective-2000">
            {/* The Stack Container */}
            <div
                className="relative w-[340px] h-[500px] transform-style-3d"
                style={{ transform: "rotateX(25deg) rotateY(-15deg)" }}
            >

                {/* Glow Core */}
                <div className="absolute inset-x-12 top-0 bottom-40 bg-gradient-to-b from-purple-500/20 via-pink-500/10 to-transparent blur-[80px] translate-z-[-100px]" />

                <div className="flex flex-col-reverse items-center justify-start h-full pt-20">
                    {tasks.map((task, i) => {
                        const isVisible = i < index;
                        // Radial fly-in logic
                        const angle = (i * 60) * (Math.PI / 180);
                        const radius = 400;
                        const startX = Math.cos(angle) * radius;
                        const startZ = Math.sin(angle) * radius;

                        return (
                            <AnimatePresence key={task.label + i}>
                                {isVisible && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: startX,
                                            z: startZ,
                                            y: -300,
                                            rotateX: 45,
                                            rotateY: 45
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            z: 0,
                                            y: 0,
                                            rotateX: 0,
                                            rotateY: 0
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 20,
                                            mass: 1,
                                            delay: i * 0.1
                                        }}
                                        className="relative w-[300px] h-[80px] mb-[-10px] transform-style-3d shrink-0"
                                        style={{ zIndex: tasks.length - i }}
                                    >
                                        {/* 3D Block Representation */}
                                        <div className="absolute inset-0 transform-style-3d">
                                            {/* Top Surface */}
                                            <div className={`absolute inset-0 ${task.bg} border border-white/30 rounded-2xl shadow-2xl translate-z-4 flex items-center justify-center overflow-hidden`}>
                                                {/* Material Overlays */}
                                                {task.type === "wood" && (
                                                    <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/wood-pattern-with-fine-lines.png')]" />
                                                )}
                                                {task.type === "stone" && (
                                                    <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />

                                                <span
                                                    className={`text-[20px] font-black uppercase tracking-widest ${task.text}`}
                                                >
                                                    {task.label}
                                                </span>
                                            </div>

                                            {/* Front Side (Thickness) */}
                                            <div
                                                className={`absolute inset-x-0 bottom-0 h-4 ${task.type === 'wood' ? 'bg-[#A1887F]' : task.depth} filter brightness-90 origin-bottom -rotate-x-90 translate-z-0 rounded-b-2xl shadow-lg`}
                                            />

                                            {/* Right Side (Thickness) */}
                                            <div
                                                className={`absolute inset-y-0 right-0 w-4 ${task.type === 'wood' ? 'bg-[#8D6E63]' : task.depth} filter brightness-75 origin-right rotate-y-90 translate-z-0 rounded-r-2xl shadow-lg`}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        );
                    })}
                </div>
            </div>

            {/* Ambient Shadow/Glow on the "Floor" */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-80 h-20 bg-black/10 blur-[40px] rounded-full -z-10" />

            {/* Background floating elements */}
            <motion.div
                animate={{ y: [0, -40, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-0 w-32 h-32 bg-optimisr-yellow/10 blur-[100px] rounded-full"
            />
        </div>
    );
};

export default TaskBlockStack;
