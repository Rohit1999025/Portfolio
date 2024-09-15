"use client";
import Image from "next/image";
import Link from "next/link";
import book_recommendation_system from "../../public/book_recommendation_system.png";
import vehicle_detection from "../../public/vehicle_detection.jpeg";
import Wild_oasis from "../../public/Wild-oasis.png";
import wild_oasis_Website from "../../public/Website.png";
import worldwise from "../../public/worldwise.png";
import { motion } from "framer-motion";

const TechStack = ({ stack }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {stack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-purple-200 rounded-full bg-neutral-900"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

function Projects() {
  return (
    <div className="pb-4 bg-black" id="projects">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="pt-10 mb-12 text-5xl text-center text-gray-300 font-permanentMarker"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col items-center justify-center px-4 mt-12 md:flex-row">
        {/* Left side: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mt-4 mb-4 md:w-1/2 md:mb-0"
        >
          <Image
            src={book_recommendation_system}
            alt="Book Recommendation System"
            className="object-cover mx-auto rounded-lg shadow-lg"
            height={400} // Adjust height to make it taller
            width={400} // Adjust width to make it narrower
          />
        </motion.div>

        {/* Right side: Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full px-4 md:w-1/2"
        >
          <h2 className="mb-2 text-2xl font-semibold text-center text-gray-200 font-permanentMarker">
            Book Recommendation System
          </h2>
          <p className="mt-4 text-lg font-caveat text-neutral-400">
            A book Recommendation System for the book lovers out there. Built
            using python Streamlit and pandas, this provides users the Top-50
            popular books and the books similar to their taste using the machine
            learning models like collaborative filtering and content based
            filtering.
          </p>
          <TechStack
            stack={["Python ", "StreamLit", "Pandas", "Machine Learning"]}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 mt-12 md:flex-row">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mt-4 mb-4 md:w-1/2 md:mb-0"
        >
          <Image
            src={vehicle_detection}
            alt="Vehicle Detection System"
            className="mx-auto rounded-lg shadow-lg"
            height={275} // Adjust height
            width={275} // Adjust width
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full px-4 md:w-1/2"
        >
          <h2 className="mb-2 text-2xl font-semibold text-center font-permanentMarker">
            Vehicle Detection System
          </h2>
          <p className="text-lg font-caveat text-neutral-400">
            A vehicle detection system built for surveillance images. Using
            YOLOv8 and Python libraries like Ultralytics, this project
            identifies cars, trucks, bikes, and autos in images, facilitating
            robust object detection.
          </p>
          <TechStack
            stack={["Python ", "Ultralytics", "Pandas", "Yolov8", "Roboflow"]}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 mt-12 md:flex-row">
        {/* Left side: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mt-4 mb-4 md:w-1/2 md:mb-0"
        >
          <Image
            src={Wild_oasis}
            alt="Book Recommendation System"
            className="object-cover mx-auto rounded-lg shadow-lg"
            height={400} // Adjust height to make it taller
            width={400} // Adjust width to make it narrower
          />
        </motion.div>

        {/* Right side: Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full px-4 md:w-1/2"
        >
          <h2 className="mb-2 text-2xl font-semibold text-center font-permanentMarker">
            The Wild Oasis
          </h2>
          <p className="text-lg font-caveat text-neutral-400">
            Full-stack hotel management app built for the employees of the hotel
            so that they can manage the bookings and the cabins. React along
            with vite used to build this project using the various hooks that
            react porvide to manage state. The backend was designed in supabase
            which uses PostgreSql.
          </p>
          <TechStack stack={["HTML ", "CSS", "Reactjs", "Vite", "Supabase"]} />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 mt-12 md:flex-row">
        {/* Left side: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mt-4 mb-4 md:w-1/2 md:mb-0"
        >
          <Image
            src={wild_oasis_Website}
            alt="Book Recommendation System"
            className="object-cover mx-auto rounded-lg shadow-lg"
            height={400} // Adjust height to make it taller
            width={400} // Adjust width to make it narrower
          />
        </motion.div>

        {/* Right side: Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full px-4 md:w-1/2"
        >
          <h2 className="mb-2 text-2xl font-semibold text-center font-permanentMarker">
            The Wild Oasis Website
          </h2>
          <p className="text-lg font-caveat text-neutral-400">
            The website for the users to book their cabins. Built on top of
            Nextjs along with supabase for the backend , hosted on vercel.
            Select your cabins suiting your budget, choose the date using the
            date-picker, and book your stay, as easy as it gets. The link for
            demo is provided here :{" "}
            <Link
              className="items-center mt-2 text-center text-gray-200 font-permanentMarker hover:text-gray-300"
              href="https://the-wild-oasis-website-psafmo88w.vercel.app/"
            >
              Wild Oasis Demo
            </Link>
          </p>
          <TechStack stack={["HTML ", "CSS", "Nextjs", "Supabase", "Vercel"]} />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 mt-12 md:flex-row">
        {/* Left side: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mt-4 mb-4 md:w-1/2 md:mb-0"
        >
          <Image
            src={worldwise}
            alt="Book Recommendation System"
            className="object-cover mx-auto rounded-lg shadow-lg"
            height={400} // Adjust height to make it taller
            width={400} // Adjust width to make it narrower
          />
        </motion.div>

        {/* Right side: Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full px-4 md:w-1/2"
        >
          <h2 className="mb-2 text-2xl font-semibold text-center font-permanentMarker">
            Worldwise
          </h2>
          <p className="text-lg font-caveat text-neutral-400">
            A Single page application on react made by a traveller for the
            fellow travellers of the world. Worldwise lets you create your blogs
            of your recent travels. Using React-Leaflet we can pick our place on
            the map and then write our story about it.
          </p>
          <TechStack stack={["HTML ", "CSS", "Reactjs"]} />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
