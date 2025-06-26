/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FinTechPage() {
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

            {/* Hero Section with Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/fintech.jpg"
                    alt="FinTech Banner"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Innovative FinTech for the Digital Economy
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
                    OM Educom empowers financial institutions, startups, and enterprises with secure and scalable FinTech solutions. From mobile banking to real-time analytics, our tools transform how businesses manage and move money.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Custom Platforms:</strong> Wallets, ledgers, and mobile-first banking solutions.</li>
                    <li><strong>Payment Integrations:</strong> UPI, cards, and wallet integrations with ease.</li>
                    <li><strong>RegTech Compliance:</strong> Secure KYC, AML, and auditing modules.</li>
                    <li><strong>Customer Analytics:</strong> Risk insights, transaction patterns, and fraud alerts.</li>
                    <li><strong>Blockchain Capabilities:</strong> Smart contracts, tokenization & decentralization support.</li>
                </ul>
            </motion.div>

            {/* Key Features */}
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
                            icon: "/images/services/fintech/secure.webp",
                            title: "Secure Architecture",
                            desc: "Built with multi-layer encryption and real-time threat monitoring.",
                        },
                        {
                            icon: "/images/services/fintech/realTime.jpg",
                            title: "Data-Driven Insights",
                            desc: "Real-time behavioral analytics and risk prediction models.",
                        },
                        {
                            icon: "/images/services/fintech/multi-payment.jpeg",
                            title: "Multi-Payment Gateways",
                            desc: "Integrates UPI, cards, wallets, and net banking seamlessly.",
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
                        "Hotels & Resorts: End-to-end consulting from property launch to full operational SOPs and customer experience audits.",
                        "Cafés & Restaurants: From kitchen design and menu engineering to staff grooming and service workflows.",
                        "Event Venues: Help optimize event spaces with sound, seating, and crowd management solutions.",
                        "Healthcare Hospitality: Setup and manage front desk and patient care operations for hospitals and wellness centers.",
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


            {/* Final CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">Let's build your FinTech future</h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Talk to Our Experts
                </Link>
            </motion.div>
        </div>
    );
}
