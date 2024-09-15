"use client";
import Image from "next/image";
import bg from "../../public/bg.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isWebDev, setIsWebDev] = useState(true);

  // Toggle between the two texts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWebDev((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border-b lg:mb-35 border-neutral-900">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center mt-10 bg-black lg:items-center">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-5 text-xl text-gray-300 font-caveat from-pink-300 via-slate-500 to-purple-500"
            >
              Welcome aboard
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 mb-1 text-5xl tracking-tight text-gray-300 font-poppins bg-gradient-to-r bg-clip-text"
            >
              Hi, I&apos;m{" "}
              <span className="text-red-600  font-spartan">Rohit</span>
            </motion.h1>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl gap-1 py-8 my-2 text-2xl font-light tracking-tighter text-white font-caveat"
            >
              Web developer and a Data Scientist based in India.
            </motion.span>

            {/* Social Media Buttons */}
            <motion.div
              className="flex gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* GitHub */}
              <a
                href="https://github.com/Rohit1999025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-10 h-10 text-white hover:text-gray-400" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rohit-chauhan-a7870b226"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-10 h-10 text-white hover:text-gray-400" />
              </a>
              {/* Email */}
              <a href="mailto:chouhanrohit724@gmail.com">
                <FaEnvelope className="w-10 h-10 text-white hover:text-gray-400" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full pr-10 mt-10 bg-blackt lg:w-1/2 lg:p-8">
          {" "}
          {/* Added bg-transparent */}
          <motion.div
            className="flex justify-center bg-black" // Ensure no background color
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image
              src={bg}
              alt="image"
              width={370}
              height={370}
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      {/* Adjust the margin to avoid overlap between sections */}
      <div className="mt-10 bg-black lg:mt-20"></div>{" "}
      {/* Adjust the margin size */}
    </div>
  );
}
