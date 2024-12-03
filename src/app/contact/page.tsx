"use client"
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form or show a success message
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
      <div className="container mx-auto max-w-xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-600"
              placeholder="Your Message"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Connect with me</h3>

          <div className="flex justify-center space-x-4">

            <a href="https://github.com/aiman wajid" target="_blank"  
            className="hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105"  
            rel="noopener noreferrer">
              <Image src="/github.png" alt="GitHub" width={30} height={30} />
            </a>

            <a href="https://linkedin.com/in/Aiman wajid" target="_blank" 
            className="hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105" 
            rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>

           

           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;