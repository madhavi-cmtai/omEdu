"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    const pathname = usePathname();
    const isAboutPage = pathname === "/about";

    const count = useMotionValue(1);
    const displayCount = useTransform(count, (latest) => `${Math.round(latest)}+`);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            count.set(1);
            animate(count, 9, {
                duration: 3,
                ease: "easeInOut",
            });
        }
    }, [isInView, count]);

    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-br from-white to-gray-100 py-20 px-4 sm:px-6 md:px-10 border-t border-gray-200"
            id="about"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center lg:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--primary-green)]">
                        Empowering Projects with Innovation & Integrity
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        <strong>OM Educom</strong> is a leading multidisciplinary engineering and architectural consultancy firm based in Tezpur, Assam. For nearly a decade, we have delivered tailored, reliable, and future-ready solutions to public and private sector clients across the region.
                    </p>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Our firm thrives on transforming complex ideas into sustainable infrastructure. From community housing and urban development to institutional planning and structural redesign—we’re known for our versatility, dedication, and innovation.
                    </p>

                    {/* Show only on homepage */}
                    {!isAboutPage && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="/about"
                            className="inline-block px-6 py-3 rounded-full text-white text-base font-medium shadow-lg transition bg-[var(--primary-green)] hover:bg-[#AC0214]"
                        >
                            Learn More About Us
                        </motion.a>
                    )}
                </motion.div>

                {/* Image + Counter Section */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-auto flex justify-center lg:justify-end"
                >
                    {/* Main Image */}
                    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[300px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden border border-gray-300 shadow-md">
                        <Image
                            src="/images/hero/engineering.jpg"
                            alt="Engineering Team"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>

                    {/* Sub Image */}
                    <div className="absolute bottom-4 left-4 w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 rounded-xl overflow-hidden shadow-lg border border-white">
                        <Image
                            src="/images/hero/engineering.jpg"
                            alt="Sub Image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Counter Badge */}
                    <motion.div
                        className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 bg-[var(--primary-green)] rounded-xl flex flex-col items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <span className="text-white text-xs font-medium mb-1 tracking-wide">
                            Experience
                        </span>
                        <motion.span className="text-white text-2xl sm:text-3xl font-bold">
                            {displayCount}
                        </motion.span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
