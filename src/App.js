import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import DarkModeToggle from "./components/DarkModeToggle";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white font-sans">
      <Helmet>
        <title>Uchenna Splendor Ejike | Data & BI Portfolio</title>
        <meta name="description" content="Portfolio of Uchenna Splendor Ejike, Data Analyst, BI, ML Engineer" />
        <meta property="og:title" content="Uchenna Splendor Ejike Portfolio" />
        <meta property="og:description" content="End-to-end expertise in analytics, machine learning, and business intelligence." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <section id="about"><AboutSection /></section>
      <section id="education"><EducationSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="blog"><BlogSection /></section>
      <section id="contact"><ContactSection /></section>
      <DarkModeToggle />
    </main>
  );
}
