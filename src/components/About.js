import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function AboutUs() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          Hi! I’m <span className="highlight">Manish</span>, a passionate
          <span className="highlight"> Frontend Developer</span> and
          <span className="highlight"> UI/UX Designer</span>. With a knack for creating
          clean and responsive designs, I bring ideas to life using modern
          technologies like React, Node.js, and Figma.
        </p>
        <p>
          I thrive on solving complex problems and building intuitive user
          experiences. My goal is to deliver <span className="highlight">high-quality</span> solutions
          that delight users and exceed expectations.
        </p>
        <a href="#contact" className="btn-primary">Let's Connect</a>
      </motion.div>
    </section>
  );
}

export default AboutUs;
