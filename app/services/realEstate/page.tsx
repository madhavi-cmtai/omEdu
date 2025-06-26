"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RealEstatePage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto text-gray-800 bg-white">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold transition"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/realEstate/real-estate-banner.jpg"
                    alt="Real Estate Services"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Comprehensive Real Estate Solutions
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
                    OM Educom provides end-to-end real estate services—from property development to legal compliance. We support residential, commercial, and industrial real estate projects with advisory, valuation, and project management capabilities.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Property Development:</strong> Planning, design, construction, and turnkey execution of real estate projects.</li>
                    <li><strong>Asset Management:</strong> Ongoing maintenance, leasing support, and ROI optimization.</li>
                    <li><strong>Valuation Services:</strong> Accurate asset valuation for sales, investments, and compliance.</li>
                    <li><strong>Legal & Regulatory:</strong> End-to-end assistance with documentation, approvals, and RERA compliance.</li>
                    <li><strong>Investment Advisory:</strong> Market analysis and ROI forecasting for investors and institutions.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg transition"
                    >
                        Request a Consultation
                    </Link>
                </motion.div>
            </motion.div>

            {/* Key Features */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-10">
                    Key Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            icon: "/images/services/realEstate/real-estate-project-execution.jpg",
                            title: "Turnkey Project Execution",
                            desc: "From layout planning to handover – complete construction & management.",
                        },
                        {
                            icon: "/images/services/realEstate/valuation&Advisory.jpg",
                            title: "Valuation & Advisory",
                            desc: "Reliable pricing models and market insights for buyers & sellers.",
                        },
                        {
                            icon: "/images/services/realEstate/legalcompilance.jpg",
                            title: "Legal Compliance",
                            desc: "Support for land titles, RERA, local municipal clearances, and due diligence.",
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
                className="mb-20"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Use Cases
                </h2>
                <div className="space-y-6">
                    {[
                        "Residential Development: End-to-end execution of housing societies, apartment complexes, and gated communities.",
                        "Commercial Real Estate: Malls, retail parks, and co-working spaces designed with future growth in mind.",
                        "Industrial Parks: Factory zones, logistic hubs, and warehousing infrastructure in compliance with zoning laws.",
                        "Real Estate Investment Advisory: Property portfolio planning and ROI strategies for investors and NRIs.",
                    ].map((line, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{line}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-4">
                    Let’s build your next real estate project together.
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Talk to Our Experts
                </Link>
            </motion.div>
        </div>
    );
}
