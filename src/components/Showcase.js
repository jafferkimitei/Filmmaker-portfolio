import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Showcase = ({ projects = [], linkType }) => {
  if (!projects.length) {
    return <div>No projects to display</div>;
  }

  // State to track which projects are in view
  const [inView, setInView] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newInView = projects.map((_, index) => {
        const element = document.getElementById(`project-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight && rect.bottom >= 0;
        }
        return false;
      });
      setInView(newInView);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  return (
    <div className="list flex flex-wrap justify-center items-start gap-6 mt-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          id={`project-${index}`}
          className="list-item relative overflow-hidden flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView[index] ? 1 : 0,
            y: inView[index] ? 0 : 50,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <a href={project[linkType]} target="_blank" rel="noopener noreferrer">
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="list-item-img"
            />
            {/* Title at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-center">
              <h2 className="text-md font-semibold">{project.title}</h2>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Showcase;
