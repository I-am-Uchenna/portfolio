import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", to: "about" },
  { label: "Education", to: "education" },
  { label: "Projects", to: "projects" },
  { label: "Blog", to: "blog" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.to);
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const NavLink = ({ to, children }) => (
    <a
      href={`#${to}`}
      onClick={e => { e.preventDefault(); scrollToSection(to); }}
      className={`
        ${activeSection === to
          ? "bg-blue-700 text-white"
          : "text-slate-300 hover:bg-slate-700 hover:text-white"
        }
        px-3 py-2 rounded-md text-sm font-medium transition-colors
      `}
      aria-label={`Go to ${children} section`}
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter") scrollToSection(to); }}
    >
      {children}
    </a>
  );

  const MobileNavLink = ({ to, children }) => (
    <a
      href={`#${to}`}
      onClick={e => { e.preventDefault(); scrollToSection(to); }}
      className={`
        ${activeSection === to
          ? "bg-blue-700 text-white"
          : "text-slate-300 hover:bg-slate-700 hover:text-white"
        }
        block px-3 py-2 rounded-md text-base font-medium transition-colors
      `}
      aria-label={`Go to ${children} section`}
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter") scrollToSection(to); }}
    >
      {children}
    </a>
  );

  return (
    <nav className="bg-slate-900/80 backdrop-blur-lg fixed w-full z-50 top-0 left-0 shadow-lg rounded-b-xl" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Site Title */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#about" onClick={e => {e.preventDefault(); scrollToSection('about');}} className="text-white text-2xl font-bold rounded-lg p-2 hover:bg-slate-700 transition-colors" aria-label="Home">
              Uchenna Splendor Ejike
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map(link => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map(link => <MobileNavLink key={link.to} to={link.to}>{link.label}</MobileNavLink>)}
        </div>
      </motion.div>
    </nav>
  );
}
