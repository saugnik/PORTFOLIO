import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "IEEE-IAS Website",
      description: "Developed college website using React frontend with Python, MongoDB backend.",
      tags: ["JavaScript", "React", "MongoDB"]
    },
    {
      title: "Automatic Attendance Recorder",
      description: "Built with Raspberry Pi 4b, integrating deep learning for face recognition.",
      tags: ["Deep Learning", "Raspberry Pi", "Python"]
    },
    {
      title: "World Robotics Championship",
      description: "Developing an automated farming robot with CAD simulation and IoT automation capabilities.",
      tags: ["Robotics", "IoT", "CAD"]
    },
    {
      title: "URC 2025",
      description: "Participating in URC 2026 with a focus on CAE and ROS2.",
      tags: ["CAE", "ROS2", "SLAM"]
    },
    {
      title: "Aerothon 2024",
      description: "Completed ADAS and CFD in Ansys. AIR 26.",
      tags: ["CFD", "ML", "Raspberry Pi 5"]
    },
    {
      title: "AI: Surveillance Robot",
      description: "Developed a surveillance robot with object detection capabilities and made it autonomous.",
      tags: ["ROS2", "ML", "SLAM"]
    },
    {
      title: "DDC 2024",
      description: "Developed a Fixed-wing plane. AIR 24.",
      tags: ["CAD", "CAE & CFD"]
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
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
