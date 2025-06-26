/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BizTechPage() {
    return (
        <div className="py-16 px-6 sm:px-10 max-w-5xl mx-auto bg-white text-gray-800">
            {/* Back Navigation */}
            <div className="mb-8">
                <Link
                    href="/services"
                    className="inline-flex items-center text-[var(--primary-pink)] hover:text-[var(--primary-red)] font-semibold"
                >
                    ← Back to All Services
                </Link>
            </div>

            {/* Hero Banner with Title Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                    src="/images/services/biztech/biztech-banner.jpeg"
                    alt="BizTech Banner"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Smart Tech to Power Your Business
                    </h1>
                </div>
            </motion.div>

            {/* Intro & Feature List */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 mb-12"
            >
                <p className="text-lg leading-relaxed">
                    OM Educom's BizTech services empower companies to automate, analyze, and accelerate operations. From real-time insights to modular ERP, we help organizations digitally transform and grow with confidence.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Interactive Dashboards:</strong> For KPIs, sales, and workforce data.</li>
                    <li><strong>Unified ERP & CRM:</strong> Seamless integration of business processes and customer data.</li>
                    <li><strong>Automation Workflows:</strong> Intelligent process mapping using AI and RPA.</li>
                    <li><strong>Cloud or On-Premise:</strong> Deploy securely where your business needs it.</li>
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
                    Key Capabilities
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/biztech/real-time-analytics.jpeg",
                            title: "Live Analytics",
                            desc: "Visualize key business metrics in real-time with automated dashboards.",
                        },
                        {
                            icon: "/images/services/biztech/erp.jpg",
                            title: "Modular ERP",
                            desc: "Adaptable modules for sales, HR, finance, and warehouse control.",
                        },
                        {
                            icon: "/images/services/biztech/process-automation.jpg",
                            title: "Workflow Automation",
                            desc: "Eliminate bottlenecks with intelligent task and process automation.",
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
                className="mb-16 mt-20"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Real-world Applications
                </h2>
                <motion.div className="space-y-6">
                    {[
                        "Enable real-time analytics for retail & e-commerce to track inventory, sales, and customer engagement.",
                        "Streamline manufacturing with automated ERP systems for production, maintenance, and resource planning.",
                        "Empower consulting firms to manage projects, client interactions, and performance with CRM tools.",
                        "Modernize healthcare operations through digital patient records, appointment scheduling, and compliance workflows.",
                    ].map((desc, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <p className="text-gray-700">{desc}</p>
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
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">
                    Ready to automate and accelerate your business?
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Let’s Talk
                </Link>
            </motion.div>
        </div>
    );
}
