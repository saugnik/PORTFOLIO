import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I am your chatbot about Saugnik. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What would you like to know?",
    "hey": "Hey! Feel free to ask me anything about Saugnik.",
    "good morning": "Good morning! How can I help you today?",
    "good afternoon": "Good afternoon! What would you like to learn about Saugnik?",
    "good evening": "Good evening! Ask me anything about Saugnik.",

    "who are you?": "I am a chatbot designed to provide you with information about Saugnik.",
    "what is your name?": "I'm Saugnik's chatbot! Ask me anything about him.",

    "who is saugnik?": "Saugnik is a skilled developer with expertise in machine learning, web development, and robotics.",
    "what does saugnik do?": "Saugnik study in IEM Kolkata and has extensive experience in AI, robotics, and software development.",
    "tell me about saugnik?": "Saugnik is an innovative engineer specializing in machine learning, web development, and robotics. He is passionate about bridging the gap between hardware and software.",
    "what is saugnik's background?": "He has a background in electrical engineering, with hands-on experience in various tech domains.",
    "what motivates saugnik?": "He is driven by a passion for technology and innovation, constantly learning and experimenting with new ideas.",
    "what are saugnik's strengths?": "His strengths include problem-solving, creativity, and a deep understanding of both hardware and software.",

    "tell me about saugnik's projects": "He has worked on AI surveillance robots, e-learning platforms, speech recognition models, and many other innovative projects.",
    "what are your skills?": "His skills include React, Node.js, Python, Machine Learning, robotics, and modern web development.",
    "what technologies do you use?": "Saugnik primarily uses React, Tailwind, Node.js, Python, and various AI/ML frameworks.",
    "what projects has saugnik completed?": "He has completed projects ranging from interactive web applications to advanced AI and robotics solutions.",

    "where are you based?": "Saugnik is based in Kolkata, India.",
    "tell me about your education?": "He has a strong academic background in engineering and computer science, having studied at reputable institutions.",
    "what are your hobbies?": "He enjoys coding, reading tech blogs, exploring new technologies, and occasionally gaming.",
    "what is your experience?": "He has several years of experience in software development, AI, and robotics, working on diverse projects.",
    "do you have a blog?": "Yes, Saugnik occasionally writes about his projects and tech insights on his personal blog.",


    "what are your future plans?": "He aims to further develop his skills in AI and robotics and lead innovative projects that push the boundaries of technology.",
    "what inspires you?": "He is inspired by technology's potential to transform lives and the challenges that drive innovation.",


    "how can i contact saugnik?": "You can reach out via email at saugnikaich123@gmail.com or connect on LinkedIn.",


    "bye": "Goodbye! Have a great day!",
    "goodbye": "Goodbye! It was nice chatting with you.",

    "thank you": "You're welcome! I'm here to help.",
    "thanks": "Anytime! Let me know if you have more questions.",

    "default": "I'm sorry, I don't have an answer for that. Can you ask something else?"
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    const lowerInput = input.toLowerCase().trim();
    const botReply = responses[lowerInput] || responses["default"];
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    }, 1000);
    setInput("");
  };

  return (
    <div>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg border">
          <div className="bg-blue-600 text-white p-2 flex justify-between items-center rounded-t-lg">
            <span className="font-bold">Chatbot</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="p-2 h-60 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-2 py-1 rounded ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-2 flex">
            <input
              type="text"
              className="flex-grow border rounded-l px-2 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask me something..."
            />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white px-3 py-1 rounded-r">
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
