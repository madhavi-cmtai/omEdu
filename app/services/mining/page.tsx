"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MiningPage() {
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
                    src="/images/services/mining/mining-banner.jpeg"
                    alt="Mining Services"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Comprehensive Mining Solutions
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
                    OM Educom offers end-to-end mining consultancy and support, from geological studies to supply of specialized equipment and ensuring all environmental guidelines are followed. Our goal is to provide responsible and efficient mining services.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Exploration & Feasibility:</strong> Geological surveys, sampling, and technical feasibility assessments.</li>
                    <li><strong>Equipment Sourcing:</strong> Procurement and supply of mining machinery and safety gear.</li>
                    <li><strong>Compliance & Licensing:</strong> Support with mining licenses, permits, and environmental clearances.</li>
                    <li><strong>Site Management:</strong> Monitoring and supervising site operations for safety and efficiency.</li>
                    <li><strong>Green Mining:</strong> Eco-friendly practices and technologies for sustainable resource extraction.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg transition"
                    >
                        Start Your Mining Project
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
                            icon: "/images/services/mining/geological-expert.webp",
                            title: "Geological Expertise",
                            desc: "Detailed site evaluation using modern geophysical tools.",
                        },
                        {
                            icon: "/images/services/mining/advanceEquip.jpg",
                            title: "Advanced Equipment",
                            desc: "Supply of drills, excavators, and mining safety gear.",
                        },
                        {
                            icon: "/images/services/mining/sustainable-mining.jpg",
                            title: "Sustainable Mining",
                            desc: "Eco-conscious practices and reduced environmental impact.",
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
                        "Coal & Mineral Extraction: Resource identification, mining plan development, and permit acquisition.",
                        "Mine Site Setup: On-site infrastructure setup including roads, storage, and security.",
                        "Safety & Compliance Audits: Routine checks to ensure operations follow legal and safety norms.",
                        "Environmental Restoration: Post-mining land restoration and reforestation strategies.",
                    ].map((line, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
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
                    Need mining advisory or operations support?
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
