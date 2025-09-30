"use client";
import { useContactForm } from "@/hooks/useContactForm";
import { motion } from "framer-motion";

const ContactSection = () => {
    const {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        loading,
        handleSubmit,
    } = useContactForm();

    return (
        <section id="contact" className="relative py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-extrabold text-[#6F4E37]">
                        Contact <span className="text-[#D4A373]">Me</span>
                    </h2>
                    <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
                        Feel free to reach out by filling the form below. I’ll get back to
                        you as soon as possible.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:ring-2 focus:ring-[#6F4E37] focus:border-[#6F4E37] 
                  placeholder-gray-400 transition text-gray-950"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:ring-2 focus:ring-[#6F4E37] focus:border-[#6F4E37] 
                  placeholder-gray-400 transition text-gray-950"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-[#6F4E37] focus:border-[#6F4E37] 
                placeholder-gray-400 transition text-gray-950"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 px-6 rounded-lg font-semibold text-white shadow-md transition 
              ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#6F4E37] hover:bg-[#5a3c2c]"}`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactSection;
