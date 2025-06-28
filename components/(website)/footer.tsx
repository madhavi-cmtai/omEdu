"use client";

import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#1D1D22] text-[#D4D7D4] pt-16 pb-10 px-6 mt-16 border-t border-gray-200">
            {/* Top Social Section */}
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary-red)]">Connect with us</h3>
                <div className="flex justify-center gap-6">
                    <a href="https://wa.me/919531170448" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 hover:text-green-600 transition" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-5 h-5 hover:text-blue-600 transition" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 hover:text-sky-600 transition" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
                    </a>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
                {/* OM Educom */}
                <div>
                    <h4 className="text-lg font-bold text-[var(--primary-red)] mb-3">OM Educom</h4>
                    <p className="text-gray-300 leading-relaxed">
                        Empowering education and enterprise through technology, training, and turnkey services across India.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold text-[var(--primary-red)] mb-3">Contact</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start hover:text-red-600">
                            <MapPin className="w-4 h-4 mr-2 text-red-600" />
                            Tezpur, Assam, India
                        </li>
                        <li className="flex items-start hover:text-red-600">
                            <Phone className="w-4 h-4 mr-2 text-red-500" />
                            +91 9531170448
                        </li>
                        <li className="flex items-start hover:text-red-600">
                            <Mail className="w-4 h-4 mr-2 text-red-500" />
                            omeducom@outlook.com
                        </li>
                        <li className="text-xs text-gray-400 mt-1">
                            <strong>GST:</strong> 18BDSPR9406D3Z0
                        </li>
                        <li className="text-xs text-gray-400">
                            <strong>Experience:</strong> 9+ Years
                        </li>
                    </ul>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-bold text-[var(--primary-red)] mb-3">Navigation</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                        <li><Link href="/about" className="hover:text-red-600">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-red-600">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-red-600">Contact</Link></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h4 className="text-lg font-bold text-[var(--primary-red)] mb-3">Legal</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link href="/privacy-policy" className="hover:text-red-600">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className="hover:text-red-600">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} <span className="font-bold text-red-600">CMT AI</span> — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
