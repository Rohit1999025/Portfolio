"use client";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

import {
  SiMongodb,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

import { FaBrain, FaNode } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div
      className="pb-12 bg-black border-b lg:pt-10 border-neutral-800"
      id="technologies"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="py-10 text-5xl text-center text-gray-200 font-playwriteCU"
      >
        Technologies
      </motion.h1>

      {/* 1st Layer: Core Skills */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="py-10 text-3xl text-center text-white font-greatVibes"
      >
        Core Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiPython className=" text-7xl" style={{ color: "#306998" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiJavascript className="text-yellow-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiCplusplus className="text-purple-500 text-7xl" />{" "}
          {/* Use appropriate icon */}
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaBrain className="text-green-500 text-7xl" />{" "}
          {/* Use appropriate icon */}
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaNode className="text-7xl" style={{ color: "#8CC84B" }} />{" "}
          {/* General Data */}
        </motion.div>
      </motion.div>

      {/* 2nd Layer: Front-end Skills */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="py-10 text-3xl text-center text-white font-greatVibes"
      >
        Front-end Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiReactjsLine className="text-cyan-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiHtml5 className="text-orange-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiCss3 className="text-blue-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <TbBrandNextjs className="text-white text-7xl" />
        </motion.div>
      </motion.div>

      {/* 3rd Layer: Databases */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="py-10 text-3xl text-center text-white font-greatVibes"
      >
        Databases
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiMongodb className="text-green-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiMysql className="text-blue-400 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
