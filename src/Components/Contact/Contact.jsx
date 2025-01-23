import React from "react";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="Contact-Text">
        <h2>Get in Touch</h2>
        <div className="Get-In-Touch">
          <a href="mailto:saugnikaich123@gmail.com" className="contact-item">
            <Mail size={24} />
            <div>
              <h3>Email</h3>
              <p>saugnikaich123@gmail.com</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/saugnik-aich-8a4323281"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <Linkedin size={24} />
            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>
          <div className="contact-item">
            <MapPin size={24} />
            <div>
              <h3>Location</h3>
              <p>
                <a
                  href="https://www.google.co.in/maps/place/Madhyamgram,+Kolkata,+West+Bengal/@22.6957039,88.4384812,13z/data=!3m1!4b1!4m6!3m5!1s0x39f89f5960049ae5:0x9d2131345ca95d1!8m2!3d22.6924004!4d88.4653367!16zL20vMDdwMTl2?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Madhyamgram, Uttarayan, Kolkata-700130
                </a>
              </p>
            </div>
          </div>
          <a href="tel:+916290716143" className="contact-item">
            <Phone size={24} />
            <div>
              <h3>Phone</h3>
              <p>+91 6290716143</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
