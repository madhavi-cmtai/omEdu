"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BusinessManagementPage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto text-gray-800">
            {/* Back Button */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold"
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
                    src="/images/services/businessManagement/business-management.jpg"
                    alt="Business Management Banner"
                    width={1200}
                    height={500}
                    priority
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Business Management & Strategy
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
                    At <span className="font-semibold">OM Educom</span>, our strategic business solutions
                    empower organizations to evolve, adapt, and lead. From growth consulting to leadership development, we support startups, enterprises, NGOs, and institutions at every stage of their journey.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Strategic Advisory:</strong> Align your business for sustainable long-term growth.</li>
                    <li><strong>Market Analysis:</strong> Leverage insights to identify gaps, risks, and new opportunities.</li>
                    <li><strong>Organizational Development:</strong> Strengthen internal systems and team productivity.</li>
                    <li><strong>Leadership Consulting:</strong> Nurture visionary leaders and foster innovation.</li>
                    <li><strong>Change Management:</strong> Implement transitions with clarity and impact.</li>
                </ul>
            </motion.div>

            {/* Core Services */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Core Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/businessManagement/consulting.jpg",
                            title: "Strategic Consulting",
                            desc: "Develop goal-oriented roadmaps for sustainable growth and competitiveness.",
                        },
                        {
                            icon: "/images/services/businessManagement/market-entry-plan.jpg",
                            title: "Market Entry Planning",
                            desc: "Define go-to-market strategies with competitor and demand insights.",
                        },
                        {
                            icon: "/images/services/businessManagement/leadership-training.jpg",
                            title: "Leadership Training",
                            desc: "Strengthen leadership skills for innovation, agility, and accountability.",
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Real-world Applications */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Real-world Applications
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Enable startups and MSMEs to establish clear roadmaps, pitch confidently to investors, and streamline operations.",
                        "Drive enterprise-wide transformation through KPI-driven strategies, leadership development, and agile systems.",
                        "Support public sector & NGOs in optimizing workflows, crafting impactful policies, and building cross-sector collaborations.",
                        "Assist educational institutions in structuring governance, faculty development, and strategic institutional expansion.",
                    ].map((text, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{text}</p>
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
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">
                    Let’s Scale Your Business Smartly
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Schedule a Strategy Call
                </Link>
            </motion.div>
        </div>
    );
}
