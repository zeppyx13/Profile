"use client";
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { showSuccess, showError } from "@/lib/alerts";

const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !message.trim()) {
            showError("Error", "All fields are required!");
            return;
        }

        try {
            setLoading(true);
            await apiFetch("/Contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            showSuccess("Success", "Your message has been sent!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error("Error sending message:", err);
            showError("Error", "Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-900 text-white relative">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-4 text-red-600">
                    Contact Me
                </h2>
                <p className="text-center text-gray-400 mb-10">
                    Feel free to reach out by filling the form below. I’ll get back to you as soon as possible.
                </p>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 placeholder-gray-400 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 placeholder-gray-400 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Message</label>
                            <textarea
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Enter your message"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 placeholder-gray-400 transition"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-6 rounded-lg font-semibold text-white shadow-lg transition 
                ${loading
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-red-600 hover:bg-red-700"
                                }`}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Glow efek di belakang */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-600/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/30 blur-3xl rounded-full"></div>
        </section>
    );
};

export default ContactSection;
