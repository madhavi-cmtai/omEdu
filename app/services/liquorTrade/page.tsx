/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LiquorTradePage() {
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

            {/* Hero Banner with Gradient Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/liquorTrade/liquor-banner.jpg"
                    alt="Liquor Trade Banner"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Liquor Trade Compliance & Distribution Expertise
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
                    OM Educom empowers liquor businesses to operate with full regulatory compliance, efficient logistics, and effective retail strategy. From licensing to smart inventory, we bring deep expertise to the alcohol distribution domain.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Licensing & Legal Setup:</strong> Assistance with all licensing tiers—production, wholesale, retail.</li>
                    <li><strong>Retail Setup:</strong> Store planning, branding, and POS integration tailored to liquor outlets.</li>
                    <li><strong>Distribution Strategy:</strong> Region-wise logistics, distributor onboarding, cold-chain support.</li>
                    <li><strong>Inventory Intelligence:</strong> Real-time tracking, restocking alerts, and forecasting analytics.</li>
                    <li><strong>Excise Compliance:</strong> Staff training, documentation support, and audit readiness.</li>
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
                            icon: "/images/services/liquorTrade/Licenses.webp",
                            title: "Regulatory Licensing",
                            desc: "Get help with all approvals, renewals, and legal structure setup.",
                        },
                        {
                            icon: "/images/services/liquorTrade/cold-chain.jpg",
                            title: "Cold-Chain Logistics",
                            desc: "Transport alcohol under controlled conditions with compliance support.",
                        },
                        {
                            icon: "/images/services/liquorTrade/smart-inventory.jpg",
                            title: "Smart Inventory",
                            desc: "Automated reorder alerts, theft detection, and real-time tracking.",
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
                        "Retail Setup: From outlet design and compliance to customer experience planning.",
                        "Excise Audit Prep: Comprehensive documentation and compliance readiness training.",
                        "Distributor Network: Optimize supply chains with region-wise distribution mapping.",
                        "Alcohol Delivery: Legally guided support for launching app-based liquor delivery.",
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

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">
                    Ready to streamline your liquor operations?
                </h3>
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
