import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      className:"Technical",
      category: "Technical",
      skills: ["Robotics", "IoT", "FPGA/ASIC Design", "Machine Learning", "CFD in Ansys"]
    },
    {
      className:"Development",
      category: "Development",
      skills: ["Website Development", "Python", "JavaScript", "Django", "MongoDB"]
    },
    {
      className:"AI/ML",
      category: "AI/ML",
      skills: ["Gen AI", "LLMs", "Deep Learning", "Object Detection", "Face Detection"]
    }
  ];

  return (
    <section id="skills" className="Skills">
      <div className="Skills-box">
        <h2>Skills</h2>
        <div className="Index">
          {skillCategories.map((category, index) => (
            <div key={index} className="Index box">
              <h3 className="Catagories">{category.category}</h3>
              <div className="Skills-Maping">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="Skill-Key"
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