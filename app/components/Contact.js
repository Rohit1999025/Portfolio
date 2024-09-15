"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aakyl8n",
        "template_2fzzfyi",
        e.target,
        "lLU4vME2SXuBDIHt8"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          toast.success("Message Sent!"); // Show success toast
          // Reset form data state
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          // Reset the form fields
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error.text); // Log the error details
          toast.error("Message Failed to Send."); // Show error toast
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pb-20 bg-black border-b border-neutral-950" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75 }}
        className="pt-16 text-4xl text-center text-white font-permanentMarker"
      >
        Get in touch
      </motion.h1>

      {/* Introduction */}
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.75 }}
        className="mt-4 text-lg text-center text-gray-200 font-caveat"
      >
        Feel free to reach out for collaborations, project inquiries, or just a
        friendly chat.
      </motion.p>

      {/* Contact Section */}
      <div className="flex flex-col mt-12 lg:flex-row lg:justify-center lg:items-center lg:gap-16">
        {/* Contact Details */}
        <div className="flex flex-col items-center lg:w-1/3 lg:items-start lg:pr-8">
          <div className="ml-6 text-center lg:text-left">
            <h2 className="pl-4 mb-4 text-3xl text-yellow-400 font-spartan">
              Contact Details
            </h2>
            <p className="mt-4 ml-4 text-lg text-neutral-400 font-poppins">
              Email:{" "}
              <a
                href="mailto:chouhanrohit724.com"
                className="text-purple-400 font-greatVibes"
              >
                chouhanrohit724.com
              </a>
            </p>
            <p className="mt-2 ml-4 text-lg text-neutral-400 font-poppins">
              Phone:{" "}
              <a href="tel:+916283144758" className="text-purple-400">
                +91 6283144758
              </a>
            </p>
          </div>
          <div className="flex justify-center gap-4 pl-20 mt-8">
            <a
              href="https://github.com/Rohit1999025"
              className="text-lg text-neutral-400 hover:text-white"
            >
              <i className="fab fa-github font-caveat"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-chauhan-a7870b226"
              className="text-lg text-neutral-400 hover:text-white"
            >
              <i className="fab fa-linkedin font-caveat"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center w-full mt-8 lg:w-1/3 lg:mt-0 lg:items-start">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 mb-4 text-white rounded bg-neutral-900"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 text-white rounded bg-neutral-900"
              onChange={handleChange}
              value={formData.email}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 mb-4 text-white rounded bg-neutral-900"
              rows="5"
              onChange={handleChange}
              value={formData.message}
            />
            <button className="w-full p-2 mt-4 text-black bg-purple-400 rounded hover:bg-purple-600">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
