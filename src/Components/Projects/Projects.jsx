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
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
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