"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ITSupplyAndServicesPage() {
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
                    src="/images/services/itSupply/itsupply-banner.jpeg"
                    alt="IT Supply and Services"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        End-to-End IT Supply & Services
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
                    OM Educom’s IT Supply and Services division delivers comprehensive technology procurement, deployment, and maintenance solutions for businesses, institutions, and government bodies.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Hardware Procurement:</strong> Desktops, laptops, printers, servers, routers, firewalls, and more.</li>
                    <li><strong>Software Licensing:</strong> Genuine OS, productivity suites, antivirus, ERP software, and cloud licenses.</li>
                    <li><strong>IT Infrastructure:</strong> Structured cabling, server rooms, LAN/WAN networks, Wi-Fi setup.</li>
                    <li><strong>Cloud & Virtualization:</strong> Deployment of AWS, Azure, GCP, virtual desktops, and backup services.</li>
                    <li><strong>Cybersecurity:</strong> Endpoint protection, firewall configuration, penetration testing, and audits.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Request IT Quotation
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
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--primary-green)] mb-8">
                    Key Advantages
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/itSupply/quick-turnaround.png",
                            title: "Quick Turnaround",
                            desc: "Rapid sourcing, configuration, and delivery with minimal downtime.",
                        },
                        {
                            icon: "/images/services/itSupply/tech-support.jpeg",
                            title: "Tech Support",
                            desc: "Onsite and remote troubleshooting, AMC, and preventive maintenance.",
                        },
                        {
                            icon: "/images/services/itSupply/security.jpg",
                            title: "Enterprise Security",
                            desc: "Layered protection against cyber threats and data breaches.",
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
                    Who We Serve
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "Educational Institutions",
                            desc: "Smart classrooms, lab equipment, software labs, and centralized administration IT.",
                        },
                        {
                            title: "Corporate Offices",
                            desc: "Full-fledged IT setup from desktops to virtual meeting rooms with VPNs and VoIP.",
                        },
                        {
                            title: "Healthcare Facilities",
                            desc: "Secure medical records systems, diagnostic software, and telemedicine infrastructure.",
                        },
                        {
                            title: "Government Departments",
                            desc: "e-Governance systems, hardware provisioning, and cloud migration for public sector units.",
                        },
                    ].map((u, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <h3 className="text-xl font-semibold text-[var(--primary-green)] mb-2">{u.title}</h3>
                            <p className="text-gray-700">{u.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-2xl font-bold text-[var(--primary-green)]">Need a trusted IT partner for your institution?</h3>
                <Link
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Connect With Us
                </Link>
            </motion.div>
        </div>
    );
}
