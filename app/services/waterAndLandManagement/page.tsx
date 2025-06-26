"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WaterLandManagementPage() {
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
                    src="/images/services/land&watermanagement/water&land-banner.jpeg"
                    alt="Water and Land Management"
                    width={1200}
                    height={500}
                    className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                        Sustainable Water & Land Management
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
                    Our Water and Land Management services are designed to promote sustainable resource use, prevent degradation, and ensure optimal land and water utilization. We work closely with communities, businesses, and governments to create eco-conscious solutions that support agriculture, urban planning, and conservation.
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li><strong>Irrigation & Watershed Development:</strong> Design and implementation of micro-irrigation, drip systems, and community watershed projects.</li>
                    <li><strong>Land Surveying & GIS Mapping:</strong> High-precision tools for terrain analysis, zoning, and development planning.</li>
                    <li><strong>Soil & Water Testing:</strong> Scientific assessments to guide agricultural or construction suitability and sustainability.</li>
                    <li><strong>Environmental Impact Assessments:</strong> Detailed EIA reports and strategies for eco-compliance and clearance.</li>
                    <li><strong>Rehabilitation & Conservation:</strong> Projects for degraded land restoration, rainwater harvesting, and afforestation.</li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                        href="/contact"
                        className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Consult Water & Land Experts
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
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "/images/services/land&watermanagement/smart-irrigation.jpg",
                            title: "Smart Irrigation",
                            desc: "Efficient water use for agriculture using IoT-based drip and sprinkler systems.",
                        },
                        {
                            icon: "/images/services/land&watermanagement/gis.jpg",
                            title: "GIS-Based Mapping",
                            desc: "Accurate land data using satellite imagery and drone surveying.",
                        },
                        {
                            icon: "/images/services/land&watermanagement/eco-restoration.jpg",
                            title: "Eco Restoration",
                            desc: "Rainwater harvesting, green cover enhancement, and erosion control systems.",
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

            {/* Use Cases (EdTech format) */}
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
                        "Agricultural Villages: Modernize irrigation practices and prevent soil salinization with scientifically designed layouts.",
                        "Smart Cities & Urban Planning: Support planning bodies with land usage classification, stormwater planning, and zoning insights.",
                        "Infrastructure Projects: Conduct land feasibility studies and EIA reports for dams, roads, and utilities.",
                        "Eco-Zones & Forests: Manage biodiversity zones and promote afforestation through community-based conservation models.",
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
                    Partner with us for sustainable water and land solutions.
                </h3>
                <Link
                    href="/contact"
                    className="inline-block mt-4 px-8 py-3 bg-[var(--primary-pink)] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
                >
                    Book a Free Consultation
                </Link>
            </motion.div>
        </div>
    );
}
