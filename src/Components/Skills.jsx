import React from "react";

const skills = [
  { name: "Python", img: "/public/images/python.jpeg" },
  { name: "Node.js", img: "/public/images/java.jpeg" },
  { name: "LangChain", img: "/images/langchain.png" },
  { name: "MongoDB", img: "/images/mongodb.png" },
  { name: "Django", img: "/images/django.png" },
  { name: "Java", img: "./assets/java.jpeg" },
  { name: "React", img: "/images/react.png" },
  { name: "Arduino", img: "/images/arduino.png" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <div className="absolute w-[600px] h-[600px] animate-spinSlow rounded-full flex items-center justify-center">
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const radius = 240;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          return (
            <div
              key={index}
              className="absolute w-24 h-24 bg-white rounded-xl shadow-xl flex items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="text-center z-10">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 text-lg">
          hardworking helps to grow skills.
        </p>
      </div>

      <style jsx>{`
        .animate-spinSlow {
          animation: spin 25s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
