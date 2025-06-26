"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GeneralOrderSupplyPage() {
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
                    src="/images/services/generalSupply/general-supply.jpeg"
                    alt="General Order Supply"
                    width={1200}
                    height={500}
                    priority
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        General Order Supply & Procurement Services
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
                    <strong>OM Educom</strong> ensures smooth, compliant, and timely procurement solutions for government, institutions, and enterprises. We manage sourcing, logistics, and delivery across a wide range of categories and regions.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Government Procurement:</strong> DGS&D/GeM-registered with documentation and compliance.</li>
                    <li><strong>Bulk Order Management:</strong> Warehousing, tracking, and dispatch for large quantities.</li>
                    <li><strong>End-to-End Logistics:</strong> From vendor selection to last-mile delivery.</li>
                    <li><strong>Multi-Category Fulfillment:</strong> Electronics, furniture, medical equipment, defense gear, and more.</li>
                    <li><strong>Vendor Management:</strong> Vetted suppliers, consistent quality, and SLA adherence.</li>
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
                    Why Choose OM Educom?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/generalSupply/supply-management.jpg",
                            title: "Procurement and supply chain management",
                            desc: "From cities to remote sites with live tracking and delivery proof.",
                        },
                        {
                            icon: "/images/services/generalSupply/high-order.jpg",
                            title: "High-Volume Orders",
                            desc: "Capability to fulfill large-scale tenders within tight timelines.",
                        },
                        {
                            icon: "/images/services/generalSupply/compliance.jpg",
                            title: "Compliance Ready",
                            desc: "Aligned with e-tendering norms, GST, PAN, MSME, and ISO requirements.",
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
                    Use Cases
                </h2>

                <motion.div className="space-y-6">
                    {[
                        {
                            title: "Public Sector Orders",
                            desc: "Tender-based procurement for ministries, PSUs, and rural schemes with complete documentation.",
                        },
                        {
                            title: "Hospital & Medical Supply",
                            desc: "PPE kits, patient beds, monitors, and consumables supplied to hospitals and care centers.",
                        },
                        {
                            title: "Education Sector Supply",
                            desc: "Desks, smart boards, lab equipment, and IT systems delivered to educational institutions.",
                        },
                        {
                            title: "Defense & Security",
                            desc: "Field supplies, protective gear, and surveillance equipment for armed forces and agencies.",
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-base">{item.desc}</p>
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
                    Need a reliable partner for your supply chain?
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Contact Our Supply Team
                </Link>
            </motion.div>
        </div>
    );
}
