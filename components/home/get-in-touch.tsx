"use client";

import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section
            className="py-16 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/test/bg-red.jpg')" }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Ready to discuss your project requirements?
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-xl [box-shadow:inset_0_0_10px_rgba(255,0,0,0.3)] overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Contact Form */}
                        <div className="lg:w-1/2 p-8">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 ">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:[box-shadow:inset_0_0_10px_rgba(255,0,0,0.3)]"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:[box-shadow:inset_0_0_10px_rgba(255,0,0,0.3)]"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:[box-shadow:inset_0_0_10px_rgba(255,0,0,0.3)]"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="relative btn-sweep w-full text-white font-bold py-3 px-4 rounded-lg overflow-hidden bg-cover bg-center transition duration-300 hover:shadow-xl"
                                    style={{ backgroundImage: "url('/images/test/bg-red.jpg')" }}
                                >
                                    <span className="relative z-10">Send Message</span>

                                    {/* Light sweep effect */}
                                    <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 transform skew-x-[-20deg] transition-all duration-700 hover:left-full"></span>
                                </button>


                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:w-1/2 bg-[#f8f8f8] p-8">
                            <h3 className="text-2xl font-bold text-[var(--primary-red)] mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-[#f3d6d8] p-3 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-[var(--primary-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Email</h4>
                                        <a href="mailto:omeducom@outlook.com" className="text-[var(--primary-red)] hover:underline">omeducom@outlook.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#f3d6d8] p-3 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-[var(--primary-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Phone</h4>
                                        <a href="tel:+919531170448" className="text-[var(--primary-red)] hover:underline">+91 9531170448</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#f3d6d8] p-3 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-[var(--primary-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Location</h4>
                                        <p className="text-gray-600">Tezpur, Assam</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#f3d6d8] p-3 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-[var(--primary-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">GST Number</h4>
                                        <p className="text-gray-600">18BDSPR8406D3Z0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h4 className="font-bold text-[var(--primary-red)] mb-2">OM Educom</h4>
                                <p className="text-gray-600 mb-1">Engineering Excellence</p>
                                <p className="text-gray-600">
                                    Multidisciplinary engineering and architectural consultancy delivering innovative solutions across 22 specialized domains.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}