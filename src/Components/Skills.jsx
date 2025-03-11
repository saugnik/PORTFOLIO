import React from "react";

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
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
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
