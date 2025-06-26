"use client";

import Image from "next/image";

export default function WhyChooseUs() {
    const features = [
        {
            title: "Expert Team",
            description:
                "Experienced engineers, visionary architects, and consultants deliver precision-driven solutions for every project.",
            icon: "/images/whyChooseUs/expert-team.jpg",
        },
        {
            title: "End-to-End Solutions",
            description:
                "Complete services from feasibility to post-delivery ensuring seamless flow, cost control, and quality execution.",
            icon: "/images/whyChooseUs/cost-control.webp",
        },
        {
            title: "Client-Centric Approach",
            description:
                "Tailored strategies aligned with your vision and constraints, resulting in lasting relationships and satisfaction.",
            icon: "/images/whyChooseUs/client-satisfaction.jpg",
        },
        {
            title: "Quality Assurance",
            description:
                "Rigorous quality controls, standard adherence, and optimization to ensure durable and precise results.",
            icon: "/images/whyChooseUs/quality.jpg",
        },
        {
            title: "Sustainability Focus",
            description:
                "Eco-conscious practices and green materials to build a better, environmentally responsible tomorrow.",
            icon: "/images/whyChooseUs/sustainability.jpeg",
        },
        {
            title: "Innovative Solutions",
            description:
                "We embrace modern technologies and creative thinking to solve complex challenges delivering results that are both practical and forward-looking.",
            icon: "/images/whyChooseUs/innovation.jpg",
        },
    ];

    return (
        <section className="relative py-20 px-4 sm:px-10 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--primary-green)] mb-4">
                        Our Core Beliefs
                    </h1>
                    <p className="text-[var(--primary-gold)] text-lg">
                        Delivering reliable construction & consultancy services with care.
                    </p>
                </div>

                {/* Grid Layout for Cards */}
                <div className="grid gap-8 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                boxShadow: "0 10px 40px rgba(221, 15, 27, 0.5)",
                                transition: "box-shadow 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "0 6px 24px rgba(121, 15, 27, 0.4)")
                            }
                            onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "0 4px 20px rgba(121, 15, 27, 0.3)")
                            }
                            className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-gray-200 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="sm:w-1/3 w-full h-[220px] relative">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                    sizes="(min-width: 640px) 33vw, 100vw"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="sm:w-2/3 w-full p-6 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
