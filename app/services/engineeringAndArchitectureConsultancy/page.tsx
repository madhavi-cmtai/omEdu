/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EngineeringConsultancyPage() {
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
                    src="/images/services/engineering.jpg"
                    alt="Engineering and Architecture"
                    width={1200}
                    height={500}
                    priority
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Engineering & Architectural Consultancy
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
                    At <span className="font-semibold">OM Educom</span>, we provide end-to-end consultancy services
                    for civil, mechanical, and electrical engineering along with architectural design and
                    project execution. Our team ensures precision, sustainability, and innovation across all phases.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Civil Engineering:</strong> Structural analysis, site supervision, and construction planning.</li>
                    <li><strong>MEP Engineering:</strong> HVAC, fire safety, lighting, and plumbing design services.</li>
                    <li><strong>Architectural Planning:</strong> Smart and efficient designs for residential, commercial, and public spaces.</li>
                    <li><strong>Feasibility Studies:</strong> Site surveys, budgeting, and environmental analysis.</li>
                    <li><strong>Project Management:</strong> From blueprint to handover with time and quality assurance.</li>
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
                    Core Capabilities
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/engineering/3d.jpg",
                            title: "3D Modeling & Visualization",
                            desc: "Architectural walkthroughs and high-resolution renders for better planning.",
                        },
                        {
                            icon: "/images/services/engineering/engineering.jpg",
                            title: "Multidisciplinary Engineering",
                            desc: "Seamless integration of structural, electrical, mechanical, and plumbing services.",
                        },
                        {
                            icon: "/images/services/engineering/execution.png",
                            title: "Turnkey Execution",
                            desc: "Design, procurement, implementation, and delivery under one roof.",
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
                        "Government Infrastructure: Public buildings, roads, and utilities built under full regulatory compliance.",
                        "Real Estate Developers: Residential and commercial projects managed from concept to completion.",
                        "Industrial Plants: Support for layout design, machinery foundations, and technical installations.",
                        "Smart Cities: Urban infrastructure designed for technology-enabled, sustainable living.",
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
                    Let's Build Together with Precision & Innovation
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Book a Consultation
                </Link>
            </motion.div>
        </div>
    );
}
