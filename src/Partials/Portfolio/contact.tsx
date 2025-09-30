"use client";
import { useContactForm } from "@/hooks/useContactForm";

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
        <section
            id="contact"
            className="relative py-16 sm:py-20 bg-gray-900 text-white overflow-x-hidden"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-red-600">
                    Contact Me
                </h2>
                <p className="text-center text-gray-400 mb-10 text-sm sm:text-base md:text-lg">
                    Feel free to reach out by filling the form below. I’ll get back to you
                    as soon as possible.
                </p>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-white/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </section>
    );
};

export default ContactSection;
