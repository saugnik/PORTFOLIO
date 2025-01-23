import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "IEEE-IAS Website",
      description: "Developed college website using JavaScript, CSS, HTML frontend with Django, Python, MongoDB backend",
      tags: ["JavaScript", "Django", "MongoDB"]
    },
    {
      title: "Automatic Attendance Recorder",
      description: "Built with Raspberry Pi 5, integrating deep learning for face recognition in Circuit Analysis lab",
      tags: ["Deep Learning", "Raspberry Pi", "Python"]
    },
    {
      title: "World Robotics Championship",
      description: "Developing an automated farming robot with CAD simulation and IoT automation capabilities",
      tags: ["Robotics", "IoT", "CAD"]
    },
    {
      title: "URC 2025",
      description: "Participating in URC 2025 with a focus on CAE simulation and Ansys.",
      tags: ["CAE", "Simulation", "Ansys"]
    },
    {
      title: "Aerothon 2024",
      description: "Completed ADAS and CFD simulation in Ansys.",
      tags: ["Ansys", "TensorFlow", "Raspberry Pi 5"]
    }
  ];

  return (
    <section id="projects" className="Projects">
      <div className="Total-body">
        <h2>Projects</h2>
        <div className="Project_box">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
