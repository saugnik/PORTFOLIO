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
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-slate-900 via-black to-slate-950 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16 tracking-wide">
          <span className="underline decoration-blue-500">Work Experience</span>
        </h2>

        <div className="grid gap-14 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group perspective">
              <div
                className="relative bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-8 rounded-2xl transition-transform duration-500 transform group-hover:rotate-[-1deg] group-hover:scale-[1.03] animate-slideFadeIn"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 -z-10" />

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                <p className="text-blue-400 font-semibold">{exp.role}</p>
                <p className="text-sm text-gray-300 italic mb-4">{exp.period}</p>
                <p className="text-gray-200 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-slideFadeIn {
          animation: slideFadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Experience;
