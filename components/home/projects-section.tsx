"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        slug: "infra-development",
        title: "Infrastructure Development",
        image: "/images/project-infra.jpg",
        desc: "Sustainable public and private infrastructure projects that shape the future.",
    },
    {
        slug: "urban-planning",
        title: "Urban Planning",
        image: "/images/project-urban.jpg",
        desc: "Strategic transformation of urban spaces through smart planning.",
    },
    {
        slug: "smart-buildings",
        title: "Smart Buildings",
        image: "/images/project-smart.jpg",
        desc: "Energy-efficient smart buildings designed for future living.",
    },
    // Add more...
];

const chunkSize = 3;
const totalChunks = Math.ceil(projects.length / chunkSize);

export default function ProjectShowcase() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalChunks);
        }, 12000);
        return () => clearInterval(timer);
    }, []);

    const currentChunk = projects.slice(index * chunkSize, index * chunkSize + chunkSize);

    return (
        <section className="relative py-20 px-4 sm:px-10 bg-white w-full">
            <div className="relative max-w-7xl mx-auto w-full rounded-none overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/bg-blue.jpg"
                        alt="Projects Background"
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
                </div>

                <div className="w-full px-4 sm:px-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[var(--primary-green)]">
                        Our Projects
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="wait">
                            {currentChunk.map((project) => (
                                <motion.div
                                    key={project.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-2xl overflow-hidden transition-all bg-white"
                                    style={{
                                        boxShadow: "0 10px 40px rgba(200, 2, 20, 0.3)",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 48px rgba(172, 2, 20, 0.4)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 10px 40px rgba(172, 2, 20, 0.3)")}
                                >
                                    <Link href={`/projects/${project.slug}`}>
                                        <div className="relative w-full h-60">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2 text-center">{project.title}</h3>
                                            <p className="text-[var(--primary-grey)] text-sm mb-3 text-center">{project.desc}</p>
                                            <div className="flex justify-end">
                                                <span className="text-[#790F1B] hover:text-[var(--primary-red)] hover:underline text-sm font-medium transition">
                                                    View Details →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-10 gap-3">
                        {Array.from({ length: totalChunks }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-3 h-3 rounded-full transition ${i === index
                                    ? "bg-[var(--primary-green)]"
                                    : "bg-gray-300 hover:bg-[var(--primary-green)]"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end mt-10">
                        <Link href="/projects">
                            <button className="text-sm font-medium text-white bg-[var(--primary-green)] hover:bg-[var(--primary-red)] transition px-6 py-2 rounded-full">
                                Show All Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
