import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const skills = [
  "Python", "SQL", "Power BI", "Tableau",
  "Scikit-learn", "TensorFlow", "Airflow", "Docker",
  "Azure", "AWS", "GCP", "Git"
];

export default function AboutSection() {
  return (
    <div className="pt-16" id="about">
      <section className="text-center mb-20 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2 backdrop-blur-lg bg-white/10 p-4 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Uchenna Splendor Ejike
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300 backdrop-blur-lg bg-white/5 p-2 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Data Analyst | Research Analyst | Business Intelligence Analyst | SQL Developer | ML & AI Engineer
        </motion.p>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-slate-300 backdrop-blur-lg bg-white/5 p-4 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          End-to-end expertise in analytics, machine learning, and business intelligence. Turning data into decisions that matter.
        </motion.p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-md">
            View Portfolio
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white border border-white hover:bg-slate-800 px-6 py-3 rounded-md font-semibold transition-colors flex items-center shadow-md">
            <Download className="mr-2 w-4 h-4" /> Resume
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto text-center mb-20 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-slate-300 backdrop-blur-lg bg-white/5 p-6 rounded-xl">
          I'm a data professional with a passion for solving complex problems. With years of experience in SQL development, machine learning, business intelligence, and data science, I help businesses transform their data into strategic advantage.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map(skill => (
            <motion.div
              key={skill}
              className="backdrop-blur-lg bg-white/10 rounded-xl shadow-md p-4"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
