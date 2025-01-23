import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "IEEE-IAS Website",
      description: "Developed college website using JavaScript, CSS, HTML frontend with Python, MongoDB backend",
      tags: ["JavaScript", "React", "MongoDB"]
    },
    {
      title: "Automatic Attendance Recorder",
      description: "Built with Raspberry Pi 4b, integrating deep learning for face recognition",
      tags: ["Deep Learning", "Raspberry Pi", "Python"]
    },
    {
      title: "World Robotics Championship",
      description: "Developing an automated farming robot with CAD simulation and IoT automation capabilities",
      tags: ["Robotics", "IoT", "CAD"]
    },
    {
      title: "URC 2025",
      description: "Participating in URC 2026 with a focus on CAE and ROS2.",
      tags: ["CAE", "ROS2", "SLAM"]
    },
    {
      title: "Aerothon 2024",
      description: "Completed ADAS and CFD in Ansys.",
      tags: ["CFD", "ML", "Raspberry Pi 5"]
    },
    {
      title: "AI: Survillance Robot",
      description: "Developed a survillance robot with object detection capabilities and made it autonomous.",
      tags: ["ROS2", "ML", "SLAM"]
    },
    {
      title: "DDC 2024",
      description: "Developed a Fixed-wing plane ",
      tags: ["CAD", "CAE & CFD"]
    },
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
