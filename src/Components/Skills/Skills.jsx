import React from 'react';
import './Skills';

const Skills = () => {
  const skillCategories = [
    {
      category: "Technical",
      skills: ["Robotics", "IoT", "FPGA/ASIC Design", "Machine Learning", "CFD in Ansys"]
    },
    {
      category: "Development",
      skills: ["Website Development", "Python", "JavaScript", "Django", "MongoDB"]
    },
    {
      category: "AI/ML",
      skills: ["Gen AI", "LLMs", "Deep Learning", "Object Detection", "Face Detection"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-white shadow text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
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

export default Skills;