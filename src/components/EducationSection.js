import React from "react";
import { motion } from "framer-motion";

const educationDetails = [
  {
    degree: "Master of Science in Data Science",
    institution: "University of Example",
    years: "2020 - 2022",
    details: [
      "Specialized in machine learning, statistical modeling, and big data analytics.",
      "Thesis: 'Predictive Analytics for Healthcare Outcomes'.",
      "Relevant coursework: Advanced Statistics, Deep Learning, Database Systems."
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Another University",
    years: "2016 - 2020",
    details: [
      "Focused on algorithms, data structures, and software engineering.",
      "Capstone Project: 'Automated Sentiment Analysis Tool'.",
      "Awarded Dean's List for academic excellence."
    ]
  }
];

export default function EducationSection() {
  return (
    <div className="pt-16 min-h-screen" id="education">
      <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
        <div className="space-y-10">
          {educationDetails.map((edu, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-white/5 p-8 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-blue-400 text-lg mb-1">{edu.institution}</p>
              <p className="text-slate-400 text-sm mb-4">{edu.years}</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {edu.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
