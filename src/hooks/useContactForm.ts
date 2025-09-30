"use client";
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { showSuccess, showError } from "@/lib/alerts";

export function useContactForm() {
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

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    loading,
    handleSubmit,
  };
}
