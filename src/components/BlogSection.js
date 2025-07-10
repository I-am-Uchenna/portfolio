import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Blog posts now have links to "Read More", summaries are static for demo.
const blogPosts = [
  {
    title: "The Future of AI in Business Intelligence",
    date: "July 1, 2025",
    snippet: "Exploring how artificial intelligence is revolutionizing BI tools and decision-making processes.",
    fullContent: "AI-powered BI tools are transforming how businesses collect, process, and analyze data, leading to more insightful and actionable outcomes...",
    summary: "AI is revolutionizing BI by automating data preparation, enhancing predictive analytics, and enabling NLP-driven insights, making data-driven decision-making more accessible and effective.",
    link: "https://your-blog.com/future-ai-business-intelligence"
  },
  // Add more blog posts with links and summaries
];

export default function BlogSection() {
  return (
    <div className="pt-16 min-h-screen" id="blog">
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Blog & Articles</h2>
        <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12 backdrop-blur-lg bg-white/5 p-6 rounded-xl">
          Dive into my thoughts on data science, machine learning, and business intelligence through these articles.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-xl bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{post.date}</p>
              <p className="text-slate-300 mb-4 text-sm">{post.snippet}</p>
              <div className="mt-4 p-3 bg-slate-700 rounded-md text-sm text-slate-200">
                <p className="font-semibold mb-1">Summary:</p>
                <p>{post.summary}</p>
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-600 text-sm mt-4 block"
                aria-label={`Read more: ${post.title}`}
              >
                Read More <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
