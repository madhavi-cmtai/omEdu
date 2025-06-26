"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FireSafetyPage() {
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

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/fireSafety/fireSafety-banner.jpeg"
                    alt="Fire Safety"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Comprehensive Fire Safety Solutions
                    </h1>
                </div>
            </motion.div>

            {/* Description Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 mb-12"
            >
                <p className="text-lg leading-relaxed">
                    We provide end-to-end fire safety solutions for commercial, residential, and industrial establishments. From consultation and system design to implementation and training, our services ensure your premises meet all safety standards and are well-prepared in emergencies.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Fire Detection Systems:</strong> Installation of advanced smoke, gas, and heat detectors integrated with alarms.</li>
                    <li><strong>Suppression Systems:</strong> Design and deployment of sprinklers, CO₂, FM-200, and clean agent systems.</li>
                    <li><strong>Risk Assessment:</strong> Detailed on-site audits, hazard identification, and mitigation planning.</li>
                    <li><strong>Compliance Services:</strong> Fire safety certifications, legal documentation, and periodic inspections.</li>
                    <li><strong>Emergency Response Training:</strong> On-site drills, evacuation plans, and staff safety workshops.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Get Fire Safety Consultation
                    </Link>
                </motion.div>
            </motion.div>

            {/* Key Features Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-10">
                    Key Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/fireSafety/24-7-Monitoring.jpg",
                            title: "24/7 Monitoring",
                            desc: "Intelligent alarm systems and monitoring stations to respond instantly to threats.",
                        },
                        {
                            icon: "/images/services/fireSafety/regulatory-compliance.jpeg",
                            title: "Regulatory Compliance",
                            desc: "Ensure adherence to local and national safety codes with our certified services.",
                        },
                        {
                            icon: "/images/services/fireSafety/Fire-safety-training.jpg",
                            title: "Staff Training",
                            desc: "Practical evacuation drills and emergency readiness programs for your team.",
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

            {/* Use Cases (One-liner EdTech format) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Use Cases
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Commercial Complexes: Fire detection, evacuation drills, and equipment installation for malls, offices, and co-working spaces.",
                        "Factories & Warehouses: Specialized solutions for high-risk environments including chemical and manufacturing units.",
                        "Hospitals & Institutions: Zero-downtime suppression systems and smoke evacuation planning for sensitive areas.",
                        "Residential Societies: Cost-effective protection systems, AMC services, and awareness programs for gated communities.",
                    ].map((line, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{line}</p>
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
                <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-4">
                    Secure your space with certified fire safety experts.
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Request a Free Safety Audit
                </Link>
            </motion.div>
        </div>
    );
}
