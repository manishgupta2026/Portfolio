import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // Ensure you have your CSS linked properly
import heroImage from '../assets/photo_2024-11-28_13-09-21.jpg'; // Path is relative to Hero.js
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing social icons

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="highlight">Manish</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="tagline"
        >
          A Frontend Developer and <br /> UI/UX Designer.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-buttons"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>
        
        {/* Social Icons */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="https://www.linkedin.com/in/manish-gupta-150734258/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/manishgupta2026" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/manishgupta2026" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Image Section */}
        <div className="hero-image-container">
          <motion.img
            src={heroImage}
            alt="Your Image"
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
