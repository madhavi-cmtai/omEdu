"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TelecommunicationPage() {
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
                    src="/images/services/telecommunication/telecom-banner.jpg"
                    alt="Telecommunication Services"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Cutting-Edge Telecommunication Solutions
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
                    OM Educom delivers robust telecommunication services that power the digital backbone of smart cities, enterprises, and rural networks. From 5G tower installation to IoT-enabled infrastructure, we build reliable, scalable, and future-ready telecom systems.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Network Planning & Installation:</strong> Design and deployment of fiber optics, broadband, and wireless networks.</li>
                    <li><strong>IoT Integration:</strong> Smart devices and sensors for home automation, agriculture, and industrial use cases.</li>
                    <li><strong>Tower Infrastructure:</strong> End-to-end support for cellular towers including site acquisition, erection, and testing.</li>
                    <li><strong>Maintenance & Troubleshooting:</strong> 24/7 SLA-based support for performance monitoring and issue resolution.</li>
                    <li><strong>Rural & Remote Connectivity:</strong> Projects for last-mile access, satellite link setups, and VSAT systems.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg transition"
                    >
                        Connect with Our Telecom Team
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
                            icon: "/images/services/telecommunication/high-speed.jpg",
                            title: "High-Speed Connectivity",
                            desc: "Fiber, 5G, and LTE deployment for urban and rural networks.",
                        },
                        {
                            icon: "/images/services/telecommunication/smart-device.jpg",
                            title: "IoT & Smart Devices",
                            desc: "Solutions for smart cities, buildings, homes, and agriculture.",
                        },
                        {
                            icon: "/images/services/telecommunication/tech-support.jpeg",
                            title: "24x7 Technical Support",
                            desc: "Remote and on-site support for minimal downtime.",
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

            {/* Use Cases (Compact style) */}
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
                        "Smart Cities: Telecom infrastructure for connected urban living with smart poles, public Wi-Fi, and surveillance systems.",
                        "Rural Connectivity: Bridging the digital divide with VSAT and wireless broadband in remote areas.",
                        "Industrial IoT: Real-time monitoring, automation, and predictive maintenance via connected machines.",
                        "Education & Health: Tele-education and telemedicine networks in schools and healthcare centers.",
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
                    Ready to build a connected tomorrow?
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Request a Proposal
                </Link>
            </motion.div>
        </div>
    );
}
