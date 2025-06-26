/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GreenFuelsAndEnergyPage() {
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
                    src="/images/services/greenFuel/banner.jpg"
                    alt="Green Energy"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Empowering Tomorrow with Clean Energy
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
                    OM Educom offers sustainable and scalable solutions in renewable energy. From solar and wind infrastructure to biofuel consulting, we help clients transition to a greener, more efficient energy model.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Solar & Wind Installations:</strong> Turnkey EPC services for rooftop and large-scale projects.</li>
                    <li><strong>Biofuel Projects:</strong> Setup and advisory for biodiesel, bioethanol, and biomass-based systems.</li>
                    <li><strong>Energy Audits:</strong> Analysis and optimization of energy usage in commercial and industrial setups.</li>
                    <li><strong>Carbon Footprint Assessments:</strong> Reporting and certification for sustainability goals.</li>
                    <li><strong>Smart Grid & IoT Integration:</strong> Monitoring and automation for renewable energy systems.</li>
                </ul>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition mt-7"
                >
                    Start Your Green Transition
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
                            icon: "/images/services/greenFuel/solar-energy.jpg",
                            title: "Solar EPC Solutions",
                            desc: "Design and deployment of solar energy systems from panel to grid.",
                        },
                        {
                            icon: "/images/services/greenFuel/bioFuel.jpg",
                            title: "Biofuel Expertise",
                            desc: "End-to-end consultancy for setting up sustainable biofuel operations.",
                        },
                        {
                            icon: "/images/services/greenFuel/energy-optimization.jpeg",
                            title: "Energy Optimization",
                            desc: "Reduce consumption and carbon output with smart monitoring tools.",
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
                        "Commercial Buildings: Install rooftop solar and manage power through smart metering.",
                        "Industrial Zones: Conduct energy audits and reduce electricity bills through efficient systems.",
                        "Rural Electrification: Deploy microgrids and solar kits in remote villages and tribal areas.",
                        "Government Projects: Support green mission targets with certified renewable projects and audits.",
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
                    Let's Build a Cleaner, Smarter Future Together
                </h3>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Schedule a Consultation
                    </Link>
                    
                </div>
            </motion.div>
        </div>
    );
}
