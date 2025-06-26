"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EmergencyServicesPage() {
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

            {/* Hero Image Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/emergencyServices/emergency-banner.jpeg"
                    alt="Emergency Services"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Emergency Preparedness & Response
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
                    Our Emergency Services division focuses on providing critical planning, resources, and training required to prepare for and respond to disasters effectively. From supply of emergency kits to simulation drills, we equip organizations and governments to act swiftly in times of crisis.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Disaster Management Planning:</strong> Customized response plans for floods, earthquakes, industrial hazards, and pandemics.</li>
                    <li><strong>Rescue Equipment Supply:</strong> High-grade medical, fire safety, and rescue tools for field deployment.</li>
                    <li><strong>Simulation & Mock Drills:</strong> Emergency preparedness training for organizations and frontline teams.</li>
                    <li><strong>Incident Command System Setup:</strong> Frameworks for multi-agency coordination during emergencies.</li>
                    <li><strong>24/7 Emergency Response Consultancy:</strong> Rapid advisory support during active incidents.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg transition"
                    >
                        Talk to Our Emergency Experts
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
                            icon: "/images/services/emergencyServices/rapid-response.jpg",
                            title: "Rapid Response Plans",
                            desc: "Tailored action plans based on risk zone classification and vulnerability mapping.",
                        },
                        {
                            icon: "/images/services/emergencyServices/emergency-kit.jpg",
                            title: "Essential Equipment Kits",
                            desc: "Supply of fire extinguishers, life jackets, first aid kits, oxygen masks, etc.",
                        },
                        {
                            icon: "/images/services/emergencyServices/community-awareness.jpg",
                            title: "Capacity Building",
                            desc: "On-site emergency training, table-top exercises, and community awareness drives.",
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

            {/* Use Cases (EdTech Style) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Use Cases
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Government Disaster Teams: Development of national and state-level disaster response protocols and infrastructure readiness.",
                        "Corporate Industrial Safety: Ensure factory safety and compliance by integrating emergency planning with SOPs.",
                        "Hospitals & Schools: Train staff and students for emergency evacuation, triage, and communication drills.",
                        "Public Events & Gatherings: Crowd control planning, first responder stations, and real-time surveillance integration.",
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
                    Prepare today to protect tomorrow.
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Book a Consultation
                </Link>
            </motion.div>
        </div>
    );
}
