"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-6 sm:px-10 text-gray-800 mt-16">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8 text-[var(--primary-red)]"
            >
                Terms and Conditions
            </motion.h1>

            <div className="space-y-8 text-base leading-relaxed">
                <p>
                    These Terms and Conditions ("Terms") govern your access to and use of the Om Edu website (www.omedu.in) and associated digital services and applications (collectively referred to as the "Platform"). By using or accessing any part of our Platform, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not access or use the Platform.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">1. Eligibility & Acceptance</h2>
                    <p>
                        By registering for or using Om Edu, you affirm that you are at least 13 years old and are legally capable of entering into a binding contract. If you are under 18, you may only use our services under the supervision of a parent or legal guardian. Your use of the platform indicates your full acceptance of these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">2. User Accounts & Responsibilities</h2>
                    <p>
                        To access certain content or services, you may be required to register and create a user account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your password and account. Any activity under your account is your responsibility. Om Edu reserves the right to suspend accounts suspected of misuse or fraud.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">3. Educational Content and Use</h2>
                    <p>
                        All content provided through Om Edu is intended solely for personal, non-commercial educational purposes. The materials provided may include video tutorials, written guides, live sessions, quizzes, and assignments. You may not record, reproduce, distribute, or publicly display any course content without our explicit written permission. Access to specific course material may be time-limited or subscription-based.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">4. Payment Terms and Subscriptions</h2>
                    <p>
                        Some of our courses and features are available on a paid basis. By making a purchase, you agree to pay the listed price, including applicable taxes and transaction fees. Payments are handled by secure third-party gateways. Om Edu is not responsible for errors or issues related to payment platforms. Refund requests will be honored only if they meet the criteria in our official Refund Policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">5. Intellectual Property</h2>
                    <p>
                        All content on the Om Edu platform—including but not limited to videos, logos, branding, illustrations, documents, graphics, and code—is protected by intellectual property laws and remains the property of Om Edu or its licensors. Users may not use any part of the content for commercial gain without explicit consent. Any misuse may result in legal action.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">6. Conduct & Community Guidelines</h2>
                    <p>
                        You agree to behave respectfully when engaging with instructors, staff, and other students. Harassment, bullying, discrimination, spamming, or disruptive conduct will not be tolerated. Violations may result in immediate suspension or termination of access without notice or refund. We strive to maintain a positive learning environment and appreciate your cooperation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">7. Availability & Modifications</h2>
                    <p>
                        Om Edu reserves the right to modify or discontinue any part of the platform at any time without prior notice. While we aim to provide uninterrupted service, we do not guarantee platform uptime and will not be liable for downtime due to maintenance or unexpected technical issues.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">8. External Links</h2>
                    <p>
                        Our platform may include links to third-party websites for informational or partnership purposes. We are not responsible for the content, privacy practices, or services of these external sites. Users are advised to review their respective terms before engagement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">9. Limitation of Liability</h2>
                    <p>
                        Om Edu is not liable for any direct, indirect, incidental, special, or consequential damages that result from the use of or inability to use our services. This includes, but is not limited to, data loss, service interruptions, or educational outcomes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">10. Changes to These Terms</h2>
                    <p>
                        We may update these Terms at any time without prior notice. Significant changes will be posted on this page and may be communicated through user email notifications. Continued use of the platform after updates constitutes acceptance of the modified Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">11. Governing Law</h2>
                    <p>
                        These Terms are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[var(--primary-green)]">12. Contact Information</h2>
                    <p>
                        For questions or concerns about these Terms and Conditions, you may contact us:
                    </p>
                    <p>
                        <strong>Om Edu Support Team</strong><br />
                        Email: <a href="mailto:support@omedu.in" className="text-[var(--primary-red)] underline">omeducom@outlook.com</a><br />
                        Phone: +91 9531170448<br />
                        Website: <a href="https://www.omedu.in" className="text-[var(--primary-red)] underline">www.omedu.in</a>
                    </p>
                </section>
            </div>
        </div>
    );
}