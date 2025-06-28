"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experienceData = [
    { year: "2015", milestone: "Founded in Tezpur, Assam with a vision to innovate and consult." },
    { year: "2016", milestone: "Started offering Engineering & Architecture services across Assam." },
    { year: "2017", milestone: "Ventured into full-scale Construction Projects & Project Execution." },
    { year: "2018", milestone: "Expanded into EdTech, BizTech, and Business Management sectors." },
    { year: "2019", milestone: "Introduced IT Supply, General Order Supply & Automation Solutions." },
    { year: "2020", milestone: "Initiated Hospitality, Emergency Services & Fire Safety domains." },
    { year: "2021", milestone: "Added Water & Land Management, Telecom, and Agriculture Services." },
    { year: "2022", milestone: "Entered FinTech, Mining, Trading, Real Estate, and Coal Fields." },
    { year: "2023", milestone: "20+ Services & Projects delivered pan India across industries." },
];

export default function ExperienceSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-150px" });

    return (
        <section
            ref={ref}
            id="experience"
            className="bg-gradient-to-br from-gray-50 to-white py-24 px-4 sm:px-8"
        >
            <div className="max-w-6xl mx-auto text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-4xl sm:text-5xl font-bold text-[var(--primary-green)] mb-4"
                >
                    Our 9-Year Growth Timeline
                </motion.h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Journey of innovation, excellence, and industry expansion from Tezpur to nationwide.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative mx-auto max-w-5xl">
                {/* Central vertical line - now visible even on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--primary-pink)] z-0" />

                {/* Cards */}
                <div className="relative z-10 space-y-11 sm:space-y-4">

                    {experienceData.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className={`flex flex-col sm:flex-row items-center ${isLeft ? "sm:justify-start" : "sm:justify-end"
                                    } relative`}
                            >
                                {/* Dot on line - always visible */}
                                <div className="absolute left-1/2 top-8 sm:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--primary-red)] border-4 border-white shadow z-10" />

                                <div
                                    className={`w-full sm:w-1/2 px-4 ${isLeft ? "sm:pr-12 text-right" : "sm:pl-12 text-left"}`}
                                >
                                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-[0_10px_30px_var(--primary-green)]">
                                        <div className="text-center mb-3">
                                            <div className="inline-block text-white bg-[var(--primary-green)] px-4 py-1 rounded-full text-lg font-bold shadow">
                                                {item.year}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-base leading-relaxed">{item.milestone}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="absolute bottom-[-8rem] left-1/2 transform -translate-x-1/2 z-10"
                >
                    <div className="bg-[var(--primary-green)] text-white px-8 py-5 rounded-xl shadow-lg text-center w-56">
                        <div className="text-4xl font-bold mb-1">9+</div>
                        <div className="text-sm font-medium tracking-wide">Years of Industry Experience</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
