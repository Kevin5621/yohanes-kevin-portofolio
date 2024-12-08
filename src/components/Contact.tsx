import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Contact Information</h3>
            
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-lg shadow-neumorph">
                <MailIcon className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-700">Email</h4>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-lg shadow-neumorph">
                <PhoneIcon className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-700">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-lg shadow-neumorph">
                <MapPinIcon className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-700">Location</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg shadow-neumorph-inset bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg shadow-neumorph-inset bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg shadow-neumorph-inset bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-gray-100 text-gray-700 shadow-neumorph hover:shadow-neumorph-hover active:shadow-neumorph-inset transition-shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;