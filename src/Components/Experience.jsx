import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Storyvord",
      role: "Gen AI Intern",
      period: "April 2024 - August 2024",
      description:
        "Worked with LLMs and RAG models using LangChain technology. Implemented and fine-tuned models for specific tasks.",
    },
    {
      company: "NexaWings",
      role: "AI Lead Scraper Intern",
      period: "January 2024 - March 2024",
      description:
        "Developed Instagram lead scraping solutions using APIs and AI technologies.",
    },
  ];

  return (
    <section id="experience" className="py-12 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
              <p className="text-gray-700 font-medium">{exp.role}</p>
              <p className="text-gray-500 italic">{exp.period}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
