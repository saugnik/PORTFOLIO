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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4 hover:shadow-lg transition-shadow p-4 rounded">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-blue-600">{exp.role}</p>
              <p className="text-gray-600 text-sm">{exp.period}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;