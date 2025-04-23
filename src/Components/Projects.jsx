import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "IEEE-IAS Website",
      description: "Developed college website using React frontend with Python, MongoDB backend.",
      tags: ["JavaScript", "React", "MongoDB"],
    },
    {
      title: "Automatic Attendance Recorder",
      description: "Built with Raspberry Pi 4b, integrating deep learning for face recognition.",
      tags: ["Deep Learning", "Raspberry Pi", "Python"],
    },
    {
      title: "World Robotics Championship",
      description: "Developing an automated farming robot with CAD simulation and IoT automation capabilities.",
      tags: ["Robotics", "IoT", "CAD"],
    },
    {
      title: "URC 2025",
      description: "Participating in URC 2026 with a focus on CAE and ROS2.",
      tags: ["CAE", "ROS2", "SLAM"],
    },
    {
      title: "Aerothon 2024",
      description: "Completed ADAS and CFD in Ansys. AIR 26.",
      tags: ["CFD", "ML", "Raspberry Pi 5"],
    },
    {
      title: "AI: Surveillance Robot",
      description: "Developed a surveillance robot with object detection capabilities and made it autonomous.",
      tags: ["ROS2", "ML", "SLAM"],
    },
    {
      title: "DDC 2024",
      description: "Developed a Fixed-wing plane. AIR 24.",
      tags: ["CAD", "CAE & CFD"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0d1117] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 underline decoration-blue-500">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 transition hover:shadow-blue-500/50 hover:-translate-y-2 duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
