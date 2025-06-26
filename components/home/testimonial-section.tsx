"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Rohit Sharma",
        message:
            "Working with OM Educom was a turning point for our infrastructure project. From the initial consultation to final execution, their team was consistently proactive, transparent, and meticulous. They ensured that every deadline was met without compromising on quality. Their end-to-end service model saved us time, money, and countless coordination hassles. Highly recommended for anyone seeking reliable execution and expert guidance.",
        image: "/images/testimonials/rohit.jpg",
        background: "/images/testimonials/bg1.jpg",
    },
    {
        id: 2,
        name: "Priya Desai",
        message:
            "OM Educom’s architectural consultancy brought our vision to life with a blend of innovation and eco-conscious design. Their team’s professionalism, creativity, and commitment to quality truly stood out. They understood our requirements down to the finest detail and delivered results that far exceeded our expectations. We’ve received countless compliments on the aesthetics and functionality of the space they designed.",
        image: "/images/testimonials/priya.jpg",
        background: "/images/testimonials/bg2.jpg",
    },
    {
        id: 3,
        name: "Ankit Verma",
        message:
            "The engineering team at OM Educom impressed us with their technical expertise and collaborative spirit. They quickly grasped the complexities of our project and delivered optimized solutions without delays. The level of communication, reporting, and responsiveness they offered ensured we always felt in control. It’s rare to find such a balance of innovation and execution discipline in one place.",
        image: "/images/testimonials/ankit.jpg",
        background: "/images/testimonials/bg3.jpg",
    },
];

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;

    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
    const next = () => setCurrent((prev) => (prev + 1) % total);

    const currentTestimonial = testimonials[current];

    return (
        <section className="py-20 px-4 sm:px-6 relative">
            <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[var(--primary-green)]">
                    Voices of Trust
                </h1>
            </div>
            <div className="mx-auto w-full max-w-5xl relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTestimonial.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col md:flex-row items-center md:items-stretch rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                        style={{
                            height: "400px",
                            backgroundImage: `url(/images/bg-blue.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >

                    
                        {/* Content */}
                        <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center ml-6">
                            <h3 className="text-3xl font-bold text-gray-400 mb-3">
                                {currentTestimonial.name}
                            </h3>
                            <p className="text-gray-200 text-lg leading-relaxed ">
                                “{currentTestimonial.message}”
                            </p>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/3 flex items-center justify-center p-6 ml-10">
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    fill
                                    className="object-cover mr-10"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Left Button */}
                <button
                    onClick={prev}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[var(--primary-green)] text-white w-12 h-24 rounded-r-full shadow-lg hover:bg-[var(--primary-red)] transition"
                >
                    ‹
                </button>

                {/* Right Button */}
                <button
                    onClick={next}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[var(--primary-green)] text-white w-12 h-24 rounded-l-full shadow-lg hover:bg-[var(--primary-red)] transition"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
