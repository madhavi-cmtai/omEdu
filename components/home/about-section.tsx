"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    const count = useMotionValue(1);
    const displayCount = useTransform(count, (latest) => `${Math.round(latest)}+`);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-100px" }); // triggers each time in view

    useEffect(() => {
        if (isInView) {
            count.set(1); // reset before re-animating
            animate(count, 9, {
                duration: 3,
                ease: "easeInOut",
            });
        }
    }, [isInView, count]);

    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-br from-white to-gray-100 py-20 px-6 md:px-10 border-t border-gray-200"
            id="about"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--primary-green)]">
                        Empowering Projects with Innovation & Integrity
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        <strong>OM Educom</strong> is a multidisciplinary engineering and architectural consultancy based in Tezpur, Assam. For nearly a decade, we’ve transformed ideas into reality with a focus on sustainability, cutting-edge innovation, and precision delivery.
                    </p>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        From urban infrastructure to smart digital solutions, our team of architects, engineers, and consultants delivers turnkey services tailored to client needs. We champion collaborative work, future-forward thinking, and honest relationships.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="/about"
                        className="inline-block px-6 py-3 rounded-full text-white text-base font-medium shadow-lg transition bg-[var(--primary-green)] hover:bg-[#AC0214]"
                    >
                        Learn More About Us
                    </motion.a>
                </motion.div>

                {/* Image + Counter Section */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-full flex justify-end"
                >
                    {/* Main Image */}
                    <div className="relative w-[90%] h-[420px] rounded-2xl overflow-hidden border border-gray-300 shadow-md">
                        <Image
                            src="/images/hero/engineering.jpg"
                            alt="Team Banner"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>

                    {/* Sub Image */}
                    <div className="absolute bottom-6 left-6 w-[40%] h-[30%] rounded-xl overflow-hidden shadow-lg border border-white">
                        <Image
                            src="/images/hero/engineering.jpg"
                            alt="Sub Image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Experience Counter Badge */}
                    <motion.div
                        className="absolute top-4 right-6 w-[20%] h-[20%] bg-[var(--primary-green)] rounded-xl flex flex-col items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <span className="text-white text-xs font-medium mb-1 tracking-wide">
                            Experience
                        </span>
                        <motion.span className="text-white text-3xl font-bold">
                            {displayCount}
                        </motion.span>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
