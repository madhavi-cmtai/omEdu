"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
    return (
        <section className="bg-[var(--primary-green)] py-16 px-6 md:px-12 lg:px-20 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <div className="flex-1 text-white">
                    {/* Badge */}
                    <Badge className="bg-white text-[var(--primary-green)] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                        9 Years of Excellence
                    </Badge>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-7xl font-bold leading-[1.05]">
                        <div>Multidisciplinary</div>
                        <div className="text-[var(--primary-gold)]">Engineering</div>
                        <div>Solutions</div>
                    </h1>

                    {/* Subtext */}
                    <p className="text-white text-sm md:text-base mt-6 max-w-md">
                        From EdTech to Construction, we deliver innovative solutions across 22 specialized domains in Tezpur, Assam.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="bg-white text-[var(--primary-green)] hover:bg-[var(--primary-red)] hover:text-white  font-semibold px-6 py-3 rounded-md">
                            Explore Services
                        </button>
                        <button className="border border-white text-white font-semibold px-6 py-3 rounded-md bg-[var(--primary-green)] hover:bg-white hover:text-[var(--primary-red)]">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="flex-1 flex justify-center">
                    <div className="w-[40vw] h-[50vh] bg-white rounded-xl shadow-lg overflow-hidden">
                        <Image
                            src="/images/hero/banner.jpeg"
                            alt="Hero Illustration"
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
