import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Showcase from "./Showcase";
import { workProjects, scripts, motionProjects, infoContent } from "../data";
import reelVideo from "../assets/reel.mp4";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const DummyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Dynamic page title based on route
  useEffect(() => {
    const pageTitleMap = {
      "/": "Dir.by Yung Havy | Portfolio",
      "/work": "Dir.by Yung Havy | Work",
      "/scripts": "Dir.by Yung Havy | Scripts",
      "/art": "Dir.by Yung Havy | Art",
      "/reel": "Dir.by Yung Havy | Reel",
      "/info": "Dir.by Yung Havy | Info",
    };
    document.title = pageTitleMap[location.pathname] || "Dir.by Yung Havy";
  }, [location.pathname]);

  // Determine page-specific content
  const isReelsPage = location.pathname.includes("reel");
  const isInfoPage = location.pathname.includes("info");

  let title = "";
  let description = "";
  let projects = [];
  let linkType = "";

  switch (location.pathname) {
    case "/work":
      title = "Work";
      description = "PROJECTS | COLLABORATIONS | EXPLORATIONS";
      projects = workProjects;
      linkType = "youtubeLink";
      break;
    case "/scripts":
      title = "Idea";
      description = "SCRIPTS | STORY | ARTICLES";
      projects = scripts;
      linkType = "mediumLink";
      break;
    case "/art":
      title = "Art";
      description = "ARTICIAL INTELLIGENCE | CONCEPT ART";
      projects = motionProjects;
      linkType = "behanceLink";
      break;
    case "/info":
      title = "Info";
      description = "BIOGRAPHY | SERVICES | CONTACT";
      break;
    default:
      title = "Portfolio";
      description = "Welcome to our creative space.";
  }

  // Handle navigation back to the homepage
  const handleClose = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="h-full bg-black text-white hide-scrollbar"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.8 }}
    >
       
      {isReelsPage ? (
        <>
          {/* Fullscreen Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-10"
            src={reelVideo}
            autoPlay
            loop
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg z-20"
          >
            X
          </button>
        </>
      ) : (
        <>
          {/* Page Title */}
          <h1
            className="title absolute text-center uppercase z-30 text-[28vh]"
            style={{
              fontFamily: "'Futura PT', sans-serif",
              top: "8vh",
              userSelect: "none",
              color: "rgba(255, 255, 255, .1)",
              width: "100vw",
              pointerEvents: "none",
              margin: "0",
              letterSpacing: "1.3vh",
              textAlign: "center",
              fontSize: "22vh",
              fontWeight: 100,
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <div
            className="subtitle relative text-center z-30"
            style={{
              top: "22vh",
              margin: "0 auto",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, .5)",
              letterSpacing: "0.8vw",
              pointerEvents: "none",
              textAlign: "center",
              fontSize: "1.2vw",
              whiteSpace: "nowrap",
            }}
          >
            <p className="text-xs md:text-base lg:text-lg">{description}</p>
          </div>

          {/* Info Page Content */}
          {isInfoPage && (
            <div className="info-content mt-80 px-4">
              <div
                className="feature-image sixteen-nine relative bg-cover bg-center"
                style={{ backgroundImage: `url(${infoContent.banner})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="bio">
                <h2 className="section-title">[ BIO ]</h2>
                {infoContent.bio.map((paragraph, index) => (
                  <p key={index} className="biop my-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="py-8 text-center">
                <h3 className="section-title">[ BOOKING | CONTACT | CONNECT ]</h3>
                <div className="flex justify-center space-x-12 mt-8 mb-12">
                  {infoContent.contact.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-400 hover:bg-gray-200 rounded-full cursor-pointer"
                    >
                      <img
                        src={item.icon}
                        alt={item.platform}
                        className="social-icon w-4 h-4 hover:scale-110 transition-transform duration-200 ease-in-out"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Showcase Projects */}
          {!isInfoPage && projects.length > 0 && (
            <div className="list mt-72">
              <Showcase projects={projects} linkType={linkType} />
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

export default DummyPage;
