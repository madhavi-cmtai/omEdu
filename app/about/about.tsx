/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ExperienceSection from "./experience-section";
import AboutSection from "@/components/home/about-section";
import Link from "next/link";

function useCountAnimation(start: number, end: number, duration: number) {
    const [count, setCount] = useState(start);
    useEffect(() => {
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            setCount(value);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, end, duration]);
    return count;
}

export default function AboutPage() {
    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: false });

    const expCount = useCountAnimation(isInView ? 0 : 0, isInView ? 9 : 0, 1000);
    const servCount = useCountAnimation(isInView ? 0 : 0, isInView ? 22 : 0, 1000);
    const peopleCount = useCountAnimation(isInView ? 10 : 10, isInView ? 1000 : 10, 1200);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full overflow-hidden min-h-[80vh] bg-cover bg-center flex flex-col lg:flex-row items-center justify-between text-white mt-16 px-4 sm:px-8"
                style={{ backgroundImage: "url('/images/banner/about-hero.jpg')" }}
            >
                {/* Brown Overlay */}
                <div className="absolute inset-0 bg-[var(--primary-brown)] bg-opacity-40 z-10" />

                {/* Red diagonal shape */}
                <div
                    className="absolute inset-0 z-20"
                    style={{
                        clipPath: "polygon(100% 0%, 70% 0%, 80% 100%, 100% 100%)",
                        backgroundColor: "#D91111",
                    }}
                />

                {/* ✅ TEXT SECTION — comes first in DOM */}
                <div className="relative z-30 w-full lg:w-1/2 px-4 sm:px-10 mt-10 sm:mt-20 text-left order-1 lg:order-none">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-4">
                        <div>Building Futures,</div>
                        <div className="text-[var(--primary-gold)]">Empowering</div>
                        <div>Communities</div>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                        OM Educom is more than a consultancy—we're a team of passionate engineers,
                        architects, and strategists shaping the landscape of North East India with precision and purpose.
                    </p>
                    <Link
                        href="/services"
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--primary-brown)] font-semibold rounded-md shadow-md hover:bg-[var(--primary-red)] hover:text-white transition-colors duration-300"
                    >
                        Explore Our Services
                        <span className="inline-block transform transition-transform group-hover:translate-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* ✅ IMAGE SECTION — comes second in DOM */}
                <div className="relative z-30 w-full sm:w-auto mt-4 sm:mt-0  flex justify-center lg:justify-end order-2 lg:order-none translate-x-15 md:translate-x-0 lg:mr-15">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl px-4 sm:px-0 lg:h-[600px] flex items-center">
                        <Image
                            src="/images/about/about.webp"
                            alt="Junction Graphic"
                            width={800}
                            height={700}
                            className="w-full h-full object-cover rounded-lg drop-shadow-lg"
                            priority
                        />
                    </div>
                </div>





            </section>




            <AboutSection />

            {/* Image + Counters + Text Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid md:grid-cols-2 items-start gap-12" ref={counterRef}>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="rounded-2xl overflow-hidden shadow-xl mt-5"
                            >
                                <Image
                                    src="/images/about/about-section2.jpg"
                                    alt="OM Educom office or project"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h1 className="text-3xl sm:text-5xl font-bold text-[var(--primary-brown)]">
                                Transforming Vision into Reality
                            </h1>

                            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    Our firm thrives on transforming complex ideas into sustainable infrastructure. From community housing and urban development to institutional planning and structural redesign—we’re known for our versatility, dedication, and innovation.
                                </p>
                                <p>
                                    Our integrated team includes civil engineers, architects, project consultants, and business strategists—each contributing unique expertise to ensure quality delivery and long-term project sustainability.
                                </p>
                                <p>
                                    We bring together traditional values and modern tools like BIM, GIS, and drone surveying to ensure that each design is smart, functional, and built to last. Our strength lies not just in execution, but in collaboration with stakeholders and communities.
                                </p>
                            </div>

                            <div className="w-full flex justify-center mt-8">
                                <div className="flex flex-wrap justify-center gap-6 sm:gap-7">
                                    {[{ label: "Experience", value: `${expCount}+`, sub: "" },
                                    { label: "Services", value: `${servCount}+`, sub: "" },
                                    { label: "Working with", value: `${peopleCount}+`, sub: "people" },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-[var(--primary-red)] border-2 border-[var(--primary-red)] rounded-xl flex flex-col justify-center items-center p-4 sm:p-6 w-36 sm:w-44 h-36 sm:h-44 text-center"
                                        >
                                            <p className="text-xl font-semibold text-white mb-1">{item.label}</p>
                                            <h3 className="text-4xl font-bold text-white mb-1">{item.value}</h3>
                                            {item.sub && <p className="text-sm text-white">{item.sub}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="mb-24">
                <ExperienceSection />
            </div>

            {/* Values Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-20 px-4 sm:px-6"
            >
                <h3 className="text-3xl font-semibold text-[var(--primary-green)] mb-12">
                    What We Stand For
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[{
                        icon: "🔍",
                        title: "Precision",
                        desc: "Every detail matters. We ensure that all plans, designs, and reports are produced with accuracy and purpose to deliver high-performing outcomes."
                    }, {
                        icon: "♻️",
                        title: "Sustainability",
                        desc: "We build with responsibility. Our designs minimize environmental impact, maximizing energy and resource efficiency for long-term sustainability."
                    }, {
                        icon: "🤝",
                        title: "Collaboration",
                        desc: "We believe in teamwork. By engaging clients and communities, we create solutions that reflect shared visions and deliver real-world value."
                    }, {
                        icon: "📐",
                        title: "Innovation",
                        desc: "We embrace technology. From BIM to drone-based surveys, our tools empower smart, future-ready design and execution."
                    }, {
                        icon: "🏗️",
                        title: "Turnkey Execution",
                        desc: "From planning to project completion, our team delivers all-in-one solutions with seamless coordination and reliable timelines."
                    }, {
                        icon: "🚀",
                        title: "Scalability",
                        desc: "We grow with you. Our modular and adaptable systems are designed for long-term evolution across sectors and scales."
                    }].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white w-full max-w-sm mx-auto p-6 rounded-2xl border border-gray-100 shadow-[0_8px_24px_0_rgba(156,18,5,0.25)] hover:shadow-[0_12px_28px_0_rgba(156,18,5,0.3)] transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold text-[var(--primary-green)] mb-3">{item.title}</h4>
                            <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}