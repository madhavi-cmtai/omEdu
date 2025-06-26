"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CoalFieldsPage() {
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
                    src="/images/services/coalFields/coal.jpg"
                    alt="Coal Fields Services"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        End-to-End Coal Field Operations & Consultancy
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
                    OM Educom provides comprehensive coal field solutions including extraction planning, transportation logistics, and safety compliance. Our team ensures that coal operations are optimized, environmentally conscious, and fully compliant with regulatory frameworks.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Coal Extraction & Processing:</strong> Consultation on open-pit and underground mining techniques, with focus on yield optimization and cost-efficiency.</li>
                    <li><strong>Transport & Logistics:</strong> Infrastructure planning for coal handling via road, rail, and conveyor systems. Coordination of bulk movement with safety protocols.</li>
                    <li><strong>Environmental Compliance:</strong> Pollution control, dust suppression, water table impact analysis, and eco-restoration planning.</li>
                    <li><strong>Safety Standards:</strong> Worker safety training, equipment certification, emergency response planning, and audit-ready SOPs.</li>
                    <li><strong>Regulatory Clearances:</strong> Assistance with mining leases, forest clearance, and statutory documentation.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg transition"
                    >
                        Schedule a Consultation
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
                            icon: "/images/services/coalFields/efficient -extraction.png",
                            title: "Efficient Extraction",
                            desc: "Maximized coal recovery using advanced geological mapping and blasting plans.",
                        },
                        {
                            icon: "/images/services/coalFields/rail&road-trans.png",
                            title: "Rail & Road Transport",
                            desc: "Integrated coal movement strategies with rail siding and loading automation.",
                        },
                        {
                            icon: "/images/services/coalFields/safety-check.jpeg",
                            title: "Certified Safety Compliance",
                            desc: "In-depth safety checks and worker training to meet DGMS & MOEF norms.",
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
                className="mb-24"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--primary-green)] mb-12">
                    Use Cases
                </h2>

                <motion.div className="space-y-6 max-w-3xl mx-auto">
                    {[
                        {
                            title: "New Mining Projects",
                            desc: "Support for initial feasibility, site planning, and regulatory approvals.",
                        },
                        {
                            title: "Coal Transportation Network",
                            desc: "Design and optimization of haulage systems and infrastructure.",
                        },
                        {
                            title: "Safety Overhaul",
                            desc: "Implementation of new safety SOPs and compliance systems at existing sites.",
                        },
                        {
                            title: "Environmental Audits",
                            desc: "Periodic audits and mitigation plans for ecological impact reduction.",
                        },
                    ].map((useCase, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-700">{useCase.desc}</p>
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
                <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-4">
                    Need expert support for your coal field operations?
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Speak to Our Mining Consultant
                </Link>
            </motion.div>
        </div>
    );
}
