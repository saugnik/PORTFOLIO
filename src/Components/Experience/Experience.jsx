import React from 'react';
import './Experience.css';


const Experience = () => {
  const experiences = [
    {
      company: "Storyvord",
      role: "Gen AI Intern",
      period: "April 2024 - August 2024",
      description: "Worked with LLMs and RAG models using LangChain technology. Implemented and fine-tuned models for specific tasks."
    },
    {
      company: "NexaWings",
      role: "AI Lead Scraper Intern",
      period: "January 2024 - March 2024",
      description: "Developed Instagram lead scraping solutions using APIs and AI technologies."
    }
  ];

  return (
    <section id="experience" className="Experience">
      <div className="Experience.body">
        <h2 className="Work-experience word">Work Experience</h2>
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="Index">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
              <p>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;