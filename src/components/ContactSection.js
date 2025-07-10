import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center" id="contact">
      <section className="text-center max-w-2xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-slate-300 mb-8 text-lg backdrop-blur-lg bg-white/5 p-6 rounded-xl">
          I'm open to freelance work, full-time roles, and collaborations. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out!
        </p>
        <ContactForm />
        <div className="flex justify-center gap-8 text-white mt-10">
          <motion.a
            href="mailto:uchenna@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://github.com/I-am-Uchenna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-800 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/uchenna-ejike"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-4 rounded-full bg-blue-800 hover:bg-blue-900 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
        </div>
        <p className="text-slate-400 text-sm mt-12">
          &copy; {new Date().getFullYear()} Uchenna Splendor Ejike. All rights reserved.
        </p>
      </section>
    </div>
  );
}
