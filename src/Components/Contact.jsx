import React, { useEffect } from "react";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://apis.mapmyindia.com/advancedmaps/v1/81980f98579028a0c919bd0ef06ff687/map_load?v=1.5`;
    script.async = true;
    script.onload = () => {
      const map = new window.L.Map("map", {
        center: [22.6924004, 88.4653367], 
        zoom: 15,
      });

      window.L.marker([22.6924004, 88.4653367]).addTo(map); 
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:saugnikaich123@gmail.com" className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <Mail size={24} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">saugnikaich123@gmail.com</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/saugnik-aich-8a4323281" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <Linkedin size={24} className="text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-gray-600">Connect with me</p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg">
            <MapPin size={24} className="text-red-500" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600">Madhyamgram, Uttarayan, Kolkata-700130</p>
            </div>
          </div>

          <a href="tel:+916290716143" className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <Phone size={24} className="text-green-500" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">+91 6290716143</p>
            </div>
          </a>
        </div>

        {/* Map Container */}
        <div id="map" className="w-full h-96 mt-6 border rounded-lg shadow-md"></div>
      </div>
    </section>
  );
};

export default Contact;
