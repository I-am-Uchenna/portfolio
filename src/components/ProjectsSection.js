import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const allProjects = [
  {
    title: "Healthcare BI Dashboard",
    description: "A Power BI dashboard analyzing hospital KPIs like gross billings, patient visits, and staff hours.",
    tech: ["Power BI", "SQL Server", "DAX"],
    link: "https://github.com/I-am-Uchenna/healthcare-dashboard",
    image: "/images/project1.png"
  },
  {
    title: "E-commerce Fraud Detection",
    description: "Machine learning model detecting fraudulent transactions using scikit-learn and SMOTE.",
    tech: ["Python", "scikit-learn", "SMOTE"],
    link: "https://github.com/I-am-Uchenna/fraud-detection",
    image: "/images/project2.png"
  },
  // Add more projects as above, with images
];

export default function ProjectsSection() {
  return (
    <div className="pt-16 min-h-screen" id="projects">
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className="backdrop-blur-xl bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-40 object-cover" loading="lazy" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-2 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs bg-slate-700 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-600 text-sm"
                aria-label={`View ${project.title} on GitHub`}
              >
                View on GitHub <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
