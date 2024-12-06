import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/herovideo2.mp4"; 
import { useNavigate } from "react-router-dom";


const Hero = () => {

    const navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
        
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.h1
          className="text-center text-5xl mt-4 uppercase text-gray-500 tracking-[20px] sm:tracking-[30px] md:tracking-45px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          YUNG HAVY
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-center uppercase text-gray-500 pb-2 tracking-[2px] sm:tracking-[6px] md:tracking-[10px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Filmmaker | Editor | Scriptwriter
        </motion.p>
      </div>

      {/* Bottom Text */}
      <motion.div
        className="absolute bottom-16 left-0 w-full text-center z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {["Work", "Scripts", "Reel", "Info", "Art"].map((item) => (
          <span
            key={item}
            className="text-sm uppercase text-gray-500 tracking-[5px] sm:tracking-[10px] md:tracking-[15px] mx-2 cursor-pointer hover:text-white"
            onClick={() => navigateToPage(item)}
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Top and Bottom Cinematic Bars */}
      <div className="absolute top-0 w-full h-16 bg-black z-30 hidden sm:block"></div>
      <div className="absolute bottom-0 w-full h-16 bg-black z-30 hidden sm:block"></div>
    </div>
  );
};

export default Hero;
