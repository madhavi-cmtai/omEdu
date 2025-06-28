"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Replace this with your actual data
const projects = [
    {
        slug: "infra-development",
        title: "Infrastructure Development",
        image: "/images/project-infra.jpg",
        desc: "Large-scale public and private infrastructure projects designed with sustainability.",
    },
    {
        slug: "urban-planning",
        title: "Urban Planning",
        image: "/images/project-urban.jpg",
        desc: "Transforming urban spaces through strategic, human-centered planning.",
    },
    {
        slug: "smart-buildings",
        title: "Smart Buildings",
        image: "/images/project-smart.jpg",
        desc: "Modern, energy-efficient smart buildings for a better tomorrow.",
    },
];

export default function ProjectsPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative bg-[var(--primary-red)] py-50 px-4 sm:px-10 text-white overflow-hidden">
                {/* Blurred Background Image */}
                <div className="absolute inset-0 w-full h-full z-0 justify-center items-center">
                    <Image
                        src="/images/projects-banner.avif" // Replace with your actual path
                        alt="Hero Background"
                        fill
                        className="object-cover w-full h-full opacity-30 blur-[1px]"
                        priority
                    />
                </div>

                {/* Foreground Text */}
                <div className="relative z-10 max-w-7xl mx-auto text-center mt-7">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-6xl font-bold mb-4 mt-10"
                    >
                        Our <span className="text-[var(--primary-gold)]">Projects</span> 
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg sm:text-xl max-w-2xl mx-auto"
                    >
                        Discover how we bring your ideas to life with innovation, precision, and care.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <div className="bg-white py-16 px-4 sm:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <motion.div
                            key={project.slug}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-2xl overflow-hidden transition-all"
                            style={{
                                boxShadow: "0 0 20px 6px rgba(250, 2, 20, 0.3)",
                            }}
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
                                <div className="p-4 bg-white">
                                    <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2 text-center">
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--primary-grey)] text-sm mb-3 text-center">
                                        {project.desc}
                                    </p>
                                    <div className="flex justify-end">
                                        <span className="text-[var(--primary-red)] hover:text-[var(--primary-brown)] hover:underline text-sm font-medium transition">
                                            View Details →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
