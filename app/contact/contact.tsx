"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form logic here (e.g., API call)
        console.log("Form submitted:", form);
        alert("Thank you for contacting OM Educom!");
        setForm({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div className="min-h-screen py-16 px-4 sm:px-8 max-w-3xl mx-auto bg-white mt-9">
            <motion.h1
                className="text-4xl sm:text-5xl font-bold text-center text-[var(--primary-green)] mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Us
            </motion.h1>

            <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-xl shadow-lg border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div>
                    <Label htmlFor="name" className="text-[var(--primary-green)] text-[17px] font-medium">
                        Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-9"
                    />
                </div>

                <div>
                    <Label htmlFor="email" className="text-[var(--primary-green)] text-[17px] font-medium">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="h-9"
                    />
                </div>

                <div>
                    <Label htmlFor="phone" className="text-[var(--primary-green)] text-[17px] font-medium">
                        Phone
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="h-9"
                    />
                </div>

                <div>
                    <Label htmlFor="message" className="text-[var(--primary-green)] text-[17px] font-medium">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={7}
                        placeholder="Write your message here..."
                        required
                        
                    />
                </div>

                <Button type="submit" className="bg-[var(--primary-pink)] text-white hover:bg-[var(--primary-brown)]">
                    Submit
                </Button>
            </motion.form>
        </div>
    );
}
