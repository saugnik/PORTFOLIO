import React, { useState, useEffect } from "react";

const Emails = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch("http://localhost:5000/get-emails");
        const data = await response.json();
        setEmails(data.emails); 
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96 mt-6">
      <h2 className="text-2xl font-bold mb-4">Emails Received</h2>
      <ul>
        {emails.map((email, index) => (
          <li key={index} className="p-2 bg-gray-800 rounded mb-2">
            {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Emails;
