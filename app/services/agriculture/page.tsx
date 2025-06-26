/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AgriculturePage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto text-gray-800 bg-white">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/agriculture/agri-banner.jpeg"
                    alt="Agriculture Banner"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Advancing Agriculture with Modern Solutions
                    </h1>
                </div>
            </motion.div>

            {/* Overview */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 mb-12"
            >
                <p className="text-lg leading-relaxed">
                    OM Educom is committed to revolutionizing agriculture by integrating advanced technologies, sustainable practices, and expert guidance. We support farmers, agripreneurs, and institutions through modern equipment, quality supplies, and end-to-end advisory.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Modern Farming Techniques:</strong> Precision farming, hydroponics, drip systems, and greenhouse setup.</li>
                    <li><strong>Agri Inputs Supply:</strong> Certified seeds, fertilizers, pesticides, and smart equipment.</li>
                    <li><strong>Farm Advisory Services:</strong> Crop planning, disease management, and productivity boosts.</li>
                    <li><strong>Training Programs:</strong> Rural innovation workshops—online and offline.</li>
                    <li><strong>Govt. Scheme Access:</strong> Help with PM-Kisan, crop insurance, and subsidy integration.</li>
                </ul>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-[var(--primary-pink)] mt-10 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Get Agri Support
                </Link>
            </motion.div>

            {/* Core Features */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Core Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/agriculture/irrigation.jpg",
                            title: "Precision Irrigation",
                            desc: "Drip & sprinkler systems for optimized water usage.",
                        },
                        {
                            icon: "/images/services/agriculture/certified-seed.jpg",
                            title: "Certified Seeds",
                            desc: "High-yield, disease-resistant seeds sourced ethically.",
                        },
                        {
                            icon: "/images/services/agriculture/agri-trainning.jpg",
                            title: "Agri Training",
                            desc: "Hands-on training for farmers and rural entrepreneurs.",
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
                    Where We Add Value
                </h2>

                <motion.div className="space-y-6">
                    {[
                        "Small Farmers: Support with subsidies, crop planning, and drip system installation.",
                        "Agri Ventures: Setup of greenhouse, mechanization, and agri-export support.",
                        "Educational Institutes: Demo farms, hydroponic kits, and hands-on agri-tech training.",
                        "Farmer Groups: FPO coordination, shared resources, and cooperative funding.",
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{item}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-6">
                    Let's Cultivate a Sustainable Farming Future
                </h3>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Connect with Agri Experts
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
