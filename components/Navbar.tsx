"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
    "AI Employees",
    "Solutions",
    "Industries",
    "Pricing",
    "About",
];

const Navbar: React.FC = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const ctaBg = useTransform(scrollY, [0, 500], ["#000000", "#F9E547"]);
    const ctaColor = useTransform(scrollY, [0, 500], ["#FFFFFF", "#000000"]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 transition-all duration-300 flex items-center justify-between ${isScrolled
                ? "bg-optimisr-grey/90 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-8"
                }`}
        >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/logo.png"
                    alt="optimisr"
                    className={`transition-all duration-300 ${isScrolled ? "h-6 sm:h-8 md:h-10" : "h-7 sm:h-10 md:h-14"} w-auto`}
                />
            </a>

            {/* Nav Pill */}
            <div className={`hidden lg:flex items-center px-6 py-3 rounded-full nav-pill border transition-all duration-300 ${isScrolled
                ? "border-black/5 bg-white/50 backdrop-blur-xl"
                : "border-white/20 bg-white/40 shadow-sm backdrop-blur-xl"
                }`}>
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[17px] font-medium text-optimisr-darkgrey hover:text-black transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <motion.a
                href="#"
                style={{ backgroundColor: ctaBg, color: ctaColor }}
                className={`transition-all duration-300 rounded-xl md:rounded-2xl text-[14px] md:text-[17px] font-bold hover:scale-105 active:scale-95 flex items-center justify-center ${isScrolled ? "px-4 py-2.5 md:px-6 md:py-3" : "px-5 py-3 md:px-8 md:py-4"
                    }`}
            >
                Watch a Demo
            </motion.a>
        </header>
    );
};

export default Navbar;
