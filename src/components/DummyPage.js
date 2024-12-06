import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Showcase from "./Showcase";
import { workProjects, scripts, motionProjects, infoContent} from "../data";
import { storage, ref, listAll, getDownloadURL } from "../firebase";
import reelVideo from "../assets/reel.mp4";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const DummyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);


  // Dynamic page title based on route
  useEffect(() => {
    const pageTitleMap = {
      "/": "Dir.by Yung Havy | Portfolio",
      "/work": "Dir.by Yung Havy | Work",
      "/scripts": "Dir.by Yung Havy | Scripts",
      "/art": "Dir.by Yung Havy | Art",
      "/reel": "Dir.by Yung Havy | Reel",
      "/info": "Dir.by Yung Havy | Info",
      "/photos": "Dir.by Yung Havy | Photos",
    };
    document.title = pageTitleMap[location.pathname] || "Dir.by Yung Havy";
  }, [location.pathname]);

   // Fetch photos from Firebase Storage
   useEffect(() => {
    const fetchPhotos = async () => {
      const photosRef = ref(storage, "photos/"); // Reference to your "photos" folder in Firebase Storage
      try {
        const res = await listAll(photosRef); // List all files in the photos folder
        const urls = await Promise.all(
          res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef); // Get download URL for each image
            return {
              id: itemRef.name,
              image: url,
            };
          })
        );
        setPhotos(urls); // Set photos state
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching photos:", error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);


  // Determine page-specific content
  const isReelsPage = location.pathname.includes("reel");
  const isInfoPage = location.pathname.includes("info");
  const isPhotoPage = location.pathname.includes("photos");

  let title = "";
  let description = "";
  let projects = [];
  let linkType = "";

  switch (location.pathname) {
    case "/work":
      title = "PCE";
      description = "PROJECTS | COLLABORATIONS | EXPLORATIONS";
      projects = workProjects;
      linkType = "youtubeLink";
      break;
    case "/scripts":
      title = "SSA";
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
      title = "BSC";
      description = "BIOGRAPHY | SERVICES | CONTACT";
      break;
    case "/photos":
      title = "PRV";
      description = "PHOTOGRAPHY | RETOUCH | VISUALS";
      projects = photos;
      break;
    default:
      title = "Portfolio";
      description = "Welcome to our creative space.";
  }

  // Handle navigation back to the homepage
  const handleClose = () => {
    navigate("/");
  };
  const columnCount = window.innerWidth > 1200 ? 4 : window.innerWidth > 768 ? 2 : 1;

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
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg z-50 hover:bg-opacity-80 transition-opacity"
            style={{
              pointerEvents: "auto",
            }}
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
              color: "#F3C623",
              letterSpacing: "0.8vw",
              pointerEvents: "none",
              textAlign: "center",
              fontSize: "1.2vw",
              whiteSpace: "nowrap",
            }}
          >
            <p className="text-xs md:text-base lg:text-lg">{description}</p>
          </div>


          {isPhotoPage && (
  <div
    className="masonry-container"
    style={{
      columnCount: columnCount,
       // Adjust columns for responsiveness
      columnGap: '1rem',
    }}
  >
    {photos.map((photo) => (
      <div
        key={photo.id}
        style={{
          breakInside: 'avoid', // Prevent items from breaking across columns
          marginBottom: '1rem',
        }}
        className="rounded-lg overflow-hidden bg-gray-800 shadow-lg"
      >
        <img
          src={photo.image}
          alt={photo.id}
          loading="lazy"
          className="w-full"
          style={{
            display: 'block', // Ensure no inline spacing issues
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </div>
    ))}
  </div>
)}


         

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
                      className="p-2 bg-gray-400 hover:bg-[#F3C623] rounded-full cursor-pointer"
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
          {!isInfoPage && !isPhotoPage && projects.length > 0 && (
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
