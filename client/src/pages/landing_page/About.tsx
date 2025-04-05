import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";
import {
  Github,
  BadgeCheck,
  ExternalLink,
  FolderKanban,
  UserCheck,
  TerminalSquare,
  Server,
  ShieldCheck,
  Cloud,
} from "lucide-react";

import image from "../../assets/logo/mohammad-rahmani-q1p2DrLBtko-unsplash.jpg";
import chatGPTImage from "../../assets/logo/ChatGPT Image Apr 6, 2025, 12_00_52 AM.png";
import image3 from "../../assets/mohammad-rahmani-EZrVFJUysLk-unsplash.jpg";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const CodingManagerShowcase = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white py-10 px-4 overflow-y-scroll snap-y snap-mandatory space-y-32">
      {/* Section 1 - Header */}
      <motion.section
        className="snap-start max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0)}
      >
        <Fade direction="down" cascade triggerOnce>
          <h1 className="text-5xl font-bold text-purple-400 mb-4">
            🚀 Coding Manager
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A powerful dashboard to track your <strong>LeetCode</strong> progress, 
            <strong> Codeforces</strong> stats, and showcase your <strong>coding projects</strong>. Built 
            for devs, students, and interview preppers!
          </p>
        </Fade>
      </motion.section>

      {/* Section 2 - Image Preview */}
      <motion.section
        className="snap-start max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.2)}
      >
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareColor="#aaa">
          <img
            src={chatGPTImage}
            alt="App Preview"
            className="w-full max-h-[500px] object-cover rounded-3xl shadow-2xl border border-purple-700 hover:scale-[1.02] transition duration-300"
          />
        </Tilt>
      </motion.section>

      {/* Section 3 - Features */}
      <motion.section
        className="snap-start max-w-4xl mx-auto space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.3)}
      >
        <h2 className="text-3xl font-semibold text-purple-300">✨ Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-gray-300">
          {[{
            icon: <BadgeCheck className="text-green-400" size={20} />, text: "Track LeetCode & Codeforces"
          }, {
            icon: <FolderKanban className="text-yellow-400" size={20} />, text: "Manage & Showcase Projects"
          }, {
            icon: <UserCheck className="text-pink-400" size={20} />, text: "Share Your Developer Profile"
          }, {
            icon: <TerminalSquare className="text-blue-400" size={20} />, text: "Beautiful Animated UI"
          }, {
            icon: <ShieldCheck className="text-red-400" size={20} />, text: "Secure JWT Auth"
          }, {
            icon: <Cloud className="text-indigo-400" size={20} />, text: "AWS S3 Image Storage"
          }].map(({ icon, text }, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 p-3 rounded-md bg-white/5 hover:bg-white/10 transition"
              variants={fadeIn(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {icon} {text}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 4 - Tech Stack */}
      <motion.section
        className="snap-start max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.4)}
      >
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">
            🛠️ Tech Stack
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li><strong>Frontend:</strong> React + TypeScript + Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js (Pure) + Express</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Auth:</strong> JWT-based authentication</li>
            <li><strong>Storage:</strong> AWS S3 for project images</li>
          </ul>
        </Fade>
      </motion.section>

      {/* Section 5 - Screenshots */}
      <motion.section
        className="snap-start max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.5)}
      >
        <h2 className="text-3xl font-semibold text-purple-300 mb-4 text-center">📸 Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[image, image3].map((src, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
              <img
                src={src}
                className="rounded-xl border border-white/10 shadow-lg hover:scale-105 transition duration-300"
                alt={`Screenshot ${i + 1}`}
              />
            </Tilt>
          ))}
        </div>
      </motion.section>

      {/* Section 6 - Links */}
      <motion.section
        className="snap-start text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.6)}
      >
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/ezParth/Coding_Manager"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full transition text-white"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 border border-purple-500 hover:bg-purple-800 px-5 py-2 rounded-full transition text-purple-300"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default CodingManagerShowcase;