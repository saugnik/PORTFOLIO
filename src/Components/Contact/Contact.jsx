import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import './Contact.css';


const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          <a 
            href="mailto:saugnikaich123@gmail.com" 
            className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <Mail className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">saugnikaich123@gmail.com</p>
            </div>
          </a>
          <a 
            href="https://linkedin.com/in/saugnik-aich-8a4323281" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <Linkedin className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-600">Connect with me</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
            <MapPin className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Kolkata, West Bengal, India</p>
            </div>
          </div>
          <a 
            href="tel:+916290716143"
            className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <Phone className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 6290716143</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;