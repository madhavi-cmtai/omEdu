"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ConstructionPage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto text-gray-800">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Section with Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/construction.jpg"
                    alt="Construction Services"
                    width={1200}
                    height={500}
                    priority
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        End-to-End Construction & Infrastructure Solutions
                    </h1>
                </div>
            </motion.div>

            {/* Overview Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 mb-12"
            >
                <p className="text-lg leading-relaxed">
                    At <span className="font-semibold">OM Educom</span>, we offer full-spectrum construction solutions for residential, commercial, industrial, and public infrastructure projects. From blueprint to buildout, our team ensures precision, quality, and timely delivery.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Residential Projects:</strong> Villas, apartments, and townships with modern amenities.</li>
                    <li><strong>Commercial Builds:</strong> Office complexes, malls, retail outlets, and hotels.</li>
                    <li><strong>Industrial Construction:</strong> Warehouses, plants, logistics hubs, and utility structures.</li>
                    <li><strong>Infrastructure:</strong> Roads, bridges, water systems, and civic parks.</li>
                    <li><strong>Turnkey Execution:</strong> Complete project handling including materials, labour, and timelines.</li>
                </ul>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Core Strengths
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/construction/trunkey-solution.jpeg",
                            title: "Turnkey Solutions",
                            desc: "From design to delivery — all under one roof with a single point of responsibility.",
                        },
                        {
                            icon: "/images/services/construction/expert-engineering.jpeg",
                            title: "Expert Engineering",
                            desc: "Led by certified engineers, architects, and site managers ensuring structural safety.",
                        },
                        {
                            icon: "/images/services/construction/on-time.jpeg",
                            title: "On-Time Delivery",
                            desc: "Time-bound planning and execution, aligned with your project goals.",
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg"
                        >
                            <div className="relative h-48">
                                <Image src={f.icon} alt={f.title} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">{f.title}</h3>
                                <p className="text-gray-700">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Real-world Applications
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Real Estate Projects: Townships and housing societies designed with modern amenities and sustainability.",
                        "Smart Infrastructure: Green-certified public spaces, walkways, parks, and urban civic projects.",
                        "Government Tenders: Roads, flyovers, sewage systems executed under compliance and documentation.",
                        "Corporate Offices: IT campuses and commercial workspaces with HVAC, fire safety, and modular design.",
                    ].map((text, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">
                    Let’s Build Your Vision Together
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Start Your Project
                </Link>
            </motion.div>
        </div>
    );
}
