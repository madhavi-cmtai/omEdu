"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-6 sm:px-10 text-gray-800 mt-16">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8 text-[var(--primary-red)]"
            >
                Privacy Policy
            </motion.h1>

            <div className="space-y-8 text-base leading-relaxed">
                <p>
                    This Privacy Policy describes how <strong>Om Edu</strong> (“we”, “our”, or “us”) collects, uses, and shares your personal information when you visit or interact with our website, mobile application, or any related services (collectively, the “Platform”).
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">1. Information We Collect</h2>
                    <p>We may collect and process the following types of personal information:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li><strong>Personal Identifiers:</strong> Full name, email address, phone number, mailing address, and date of birth.</li>
                        <li><strong>Educational Information:</strong> Course preferences, progress, certifications, and academic interests.</li>
                        <li><strong>Account Credentials:</strong> Username and encrypted passwords for registered users.</li>
                        <li><strong>Payment Information:</strong> Billing address and transaction details processed via secure third-party providers.</li>
                        <li><strong>Technical Data:</strong> IP address, browser type, device ID, operating system, referral source, and browsing behavior.</li>
                        <li><strong>Communication Data:</strong> Messages sent to our support team, feedback, or survey responses.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">2. How We Use Your Information</h2>
                    <p>We use your data to:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Provide access to our courses, learning materials, and services.</li>
                        <li>Personalize your learning experience and recommend relevant courses.</li>
                        <li>Process payments and deliver purchase confirmations.</li>
                        <li>Send notifications, newsletters, and important updates.</li>
                        <li>Improve our platform, monitor usage trends, and detect technical issues.</li>
                        <li>Ensure compliance with legal obligations and educational standards.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">3. Legal Basis for Processing</h2>
                    <p>We process your data under the following legal grounds:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Your consent (e.g., newsletter subscription).</li>
                        <li>Fulfillment of a contract (e.g., course access after payment).</li>
                        <li>Legitimate interest (e.g., improving services, preventing fraud).</li>
                        <li>Legal compliance (e.g., tax and recordkeeping requirements).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">4. Sharing of Information</h2>
                    <p>We may share your information in the following circumstances:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li><strong>With service providers:</strong> Such as payment processors, cloud hosting services, email communication providers, and analytics tools, under strict confidentiality agreements.</li>
                        <li><strong>With legal authorities:</strong> When required to comply with the law, respond to legal processes, or protect the rights and safety of Om Edu and its users.</li>
                        <li><strong>In corporate transactions:</strong> If Om Edu undergoes a merger, acquisition, or asset sale, your data may be transferred as part of that transaction.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">5. Cookies & Analytics</h2>
                    <p>
                        Our platform uses cookies and similar technologies to enhance functionality,
                        track user engagement, and understand usage trends.
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>You can disable cookies via your browser settings.</li>
                        <li>We may use tools like Google Analytics or Hotjar to collect anonymized data.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">6. Data Security</h2>
                    <p>
                        We take appropriate technical and organizational measures to protect your
                        personal information from unauthorized access, disclosure, alteration, or
                        destruction.
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Secure servers with encryption protocols (HTTPS/SSL).</li>
                        <li>Regular backups, access controls, and audit logs.</li>
                        <li>Employee training and awareness on data handling.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">7. Retention Period</h2>
                    <p>
                        We retain your personal data for as long as necessary to fulfill the purposes
                        outlined in this policy, including legal and accounting obligations. You may
                        request deletion of your account and data at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">8. Your Rights</h2>
                    <p>As a user, you may:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>Access and review the personal data we hold about you.</li>
                        <li>Request corrections or updates to your information.</li>
                        <li>Request deletion of your data, subject to legal limitations.</li>
                        <li>Withdraw consent or object to certain processing activities.</li>
                        <li>Request data portability for data you have provided to us.</li>
                    </ul>
                    <p>To exercise any of these rights, contact us at <strong>support@omedu.in</strong>.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">9. Children's Privacy</h2>
                    <p>
                        Om Edu does not knowingly collect personal information from children under the age of 13. If we discover that we have accidentally collected such information, we will delete it immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically to reflect changes in law or business practices. The updated version will be posted on this page with the revised effective date.
                    </p>
                    <p><strong>Last updated:</strong> June 30, 2025</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)] mb-2">11. Contact Information</h2>
                    <p>
                        If you have any questions, concerns, or requests regarding this Privacy Policy,
                        please contact:
                    </p>
                    <p>
                        <strong>Om Edu Support Team</strong><br />
                        Email: <a href="mailto:support@omedu.in" className="text-[var(--primary-red)] underline">omeducom@outlook.com</a><br />
                        Phone: +91 9531170448<br />
                    </p>
                </section>
            </div>
        </div>
    );
}
