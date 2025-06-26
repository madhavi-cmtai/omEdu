/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TradingPage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto bg-white text-gray-800">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold transition"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Image Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/trading/import-export-banner.jpg"
                    alt="Trading Services"
                    width={1200}
                    height={500}
                    className="w-full h-74 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Global Trading & Import-Export Services
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
                    OM Educom's Trading division specializes in seamless import-export operations, commodity trade facilitation, and international logistics. Our services ensure compliance with all relevant documentation, legal protocols, and trade regulations for smooth global operations.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Import-Export Services:</strong> Support in global procurement, customs clearance, and shipment handling.</li>
                    <li><strong>Commodity Trading:</strong> Buying and selling of essential goods including agricultural, industrial, and consumer commodities.</li>
                    <li><strong>Trade Documentation:</strong> Preparation of invoices, certificates of origin, bill of lading, and export-import licenses.</li>
                    <li><strong>Market Research:</strong> Identifying demand and sourcing opportunities across global markets.</li>
                    <li><strong>Regulatory Compliance:</strong> Adherence to international trade laws and customs duties.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg transition"
                    >
                        Connect for Trade Support
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
                            icon: "/images/services/trading/global-reach.jpg",
                            title: "Global Reach",
                            desc: "Trade across continents with our wide logistics and distribution network.",
                        },
                        {
                            icon: "/images/services/trading/full-compliance.jpg",
                            title: "Full Compliance",
                            desc: "Meet international legal, tax, and certification requirements hassle-free.",
                        },
                        {
                            icon: "/images/services/trading/commodity-expertise.jpg",
                            title: "Commodity Expertise",
                            desc: "Deep insights into global commodity trends and trading strategies.",
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
                        "Import-Export Startups: We assist startups in launching compliant import/export businesses with ease.",
                        "Bulk Commodity Trade: Facilitating large-scale B2B and government commodity distribution.",
                        "Manufacturer Distribution: Helping local manufacturers find buyers and expand internationally.",
                        "Compliance Support: Assisting businesses in staying aligned with evolving trade laws.",
                    ].map((text, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                        >
                            <p className="text-gray-700">{text}</p>
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
                    Need assistance with global trading operations?
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Get in Touch with Our Trade Team
                </Link>
            </motion.div>
        </div>
    );
}
