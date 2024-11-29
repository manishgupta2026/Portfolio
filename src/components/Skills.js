import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p className="skills-description">
        A showcase of my expertise in design, development, and technology.
      </p>
      <div className="skills-container">
        {/* Skill categories */}
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skill-list">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>UI/UX Design</h3>
          <div className="skill-list">
            <span className="skill">Figma</span>
            <span className="skill">Wireframing</span>
            <span className="skill">Prototyping</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Backend Development</h3>
          <div className="skill-list">
            <span className="skill">Node.js</span>
            <span className="skill">Express</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
