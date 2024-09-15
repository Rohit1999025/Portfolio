"use client";
import Image from "next/image";
import about from "../../public/about.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      className="pb-4 bg-black border-b lg:pt-20 border-neutral-900 "
      id="about"
    >
      {/* Header */}
      <motion.h1 className="text-5xl text-center text-white font-playwriteCU opacity-90">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center px-4 lg:px-0">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.75 }}
          className="w-full lg:p-8 lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <Image
              src={about}
              alt="About me"
              className="shadow-lg rounded-2xl"
              width={350}
              height={300}
              objectFit="cover"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl my-2 text-lg text-neutral-300 font-caveat">
              Hello! I&apos;m Rohit, a passionate web developer with experience
              in React and modern JavaScript frameworks.I also happen to be a
              Data enthusiast which made me learn the field of data science.
            </p>
          </div>
          <p className="max-w-xl py-6 my-2 text-lg text-neutral-300 font-caveat">
            I code and bring my ideas into reality and in my free time i travel
            the world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
