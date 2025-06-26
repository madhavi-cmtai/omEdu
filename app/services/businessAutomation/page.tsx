/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BusinessAutomationPage() {
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

            {/* Hero Section with Banner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/buisnessAutomation/automation-banner.jpg"
                    alt="Business Automation Banner"
                    width={1200}
                    height={500}
                    priority
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Automating Businesses with Intelligence
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
                    At <span className="font-semibold">OM Educom</span>, our Business Automation solutions
                    harness cutting-edge technologies to streamline operations, reduce manual tasks,
                    and improve productivity. From intelligent software to fully automated workflows,
                    we empower businesses with smart systems.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>AI-Powered Solutions:</strong> Chatbots, recommendation engines, and fraud detection using machine learning.</li>
                    <li><strong>Workflow Automation:</strong> Automate HR, finance, and ops with bots and triggers.</li>
                    <li><strong>Custom Software Development:</strong> Web and mobile apps tailored to your business model.</li>
                    <li><strong>Integration Services:</strong> Connect CRM, ERP, and databases with real-time syncing.</li>
                    <li><strong>Data-Driven Decisions:</strong> Analytics dashboards and predictive systems for insights.</li>
                </ul>
            </motion.div>

            {/* Feature Highlights */}
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
                            icon: "/images/services/buisnessAutomation/AiMl.jpg",
                            title: "AI & Machine Learning",
                            desc: "Deploy predictive models and smart systems to reduce costs and human error.",
                        },
                        {
                            icon: "/images/services/buisnessAutomation/bots.jpeg", 
                            title: "Workflow Bots",
                            desc: "Automate tasks like data entry, approvals, and reporting with zero-code tools.",
                        },
                        {
                            icon: "/images/services/buisnessAutomation/customApp.jpg",
                            title: "Custom Applications",
                            desc: "From admin panels to customer portals, get solutions built just for you.",
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
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
                    Real-world Applications
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Retail & E-commerce: Automate inventory updates, customer support, and billing across channels.",
                        "Finance & Accounting: Reconcile invoices, track expenses, and generate financial reports automatically.",
                        "HR & Recruitment: From onboarding to performance tracking, automate the employee lifecycle.",
                        "Customer Service: Integrate chatbots and AI-driven response systems to improve resolution time.",
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

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">
                    Let's Build a Smarter Business Together
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Schedule a Free Consultation
                </Link>
            </motion.div>
        </div>
    );
}
