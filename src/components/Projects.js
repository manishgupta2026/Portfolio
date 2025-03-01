import React from "react";
import "./Projects.css";
import img3 from "../assets/PORTFOLIO.png"
import img2 from "../assets/140786_Adam_Noonan_Thumbnail_Figma_02_400x277px_102417.png"
import img1 from "../assets/img.jpg"

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <p className="projects-description">
        Here are some of the projects I’ve worked on. More to come soon!
      </p>
      <div className="projects-container">
        
        <div className="project-card">
          <div className="project-image">
            <img src={img1} alt="Project 1" />
          </div>
          <h3>CourseHunt</h3>
          <p>🚀 Introducing CourseHunt.tech – Your Gateway to 100% Free Online Courses! 🎓</p>
          <a href="https://coursehunt.tech" target="_blank" className="btn">View Project</a>
        </div>

        
        <div className="project-card">
          <div className="project-image">
            <img src={img2} alt="Project 2" />
          </div>
          <h3>Hackodex</h3>
          <p>Build Ui/Ux for CodeX for Hackodex event.Technologies used: Figma, UI/UX Design.</p>
          <a href="https://www.figma.com/design/WxFbUhgYctSVfSYIRFUqUO/Hackodex?node-id=0-1&t=PBATWgLi8BdzsjBe-1" target="_blank" className="btn">View Project</a>
        </div>

     
        <div className="project-card">
          <div className="project-image">
            <img src={img3} alt="Project 3" />
          </div>
          <h3>Portfolio</h3>
          <p>Build a Portfolio for Myself . Technologies used: React, CSS, HTML.</p>
          <a href="https://github.com/manishgupta2026/Portfolio" className="btn">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
