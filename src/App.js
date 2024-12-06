import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import Hero from "./components/Hero";
import DummyPage from "./components/DummyPage";
import Navbar from "./components/Navbar";
import bgMusic from "./assets/bgmusic1.mp3";
import wooshEffect from "./assets/woosh.wav";
import { workProjects, scripts, motionProjects } from "./data";


function App() {
  const location = useLocation();
  useEffect(() => {
    // Initialize background music
    const backgroundMusic = new Howl({
      src: [bgMusic],
      loop: true,
      volume: 0.2, // Adjust volume as needed
    });

    backgroundMusic.play();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        backgroundMusic.pause();
      } else {
        backgroundMusic.play();
      }
    };

    const handleRouteChange = () => {
      if (location.pathname === "/reel") {
        backgroundMusic.pause();
      } else {
        backgroundMusic.play();
      }
    };
    handleRouteChange();

    // Add event listener for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);


    // Cleanup to stop music when the app unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      backgroundMusic.stop();
    };
  }, [location.pathname]);

 
  const showNavbar = location.pathname !== "/";

  const wooshSound = new Howl({ 
    src: [wooshEffect] ,
    volume: 0.1,
  });
  return (
    <div>
       {showNavbar && <Navbar />}
      {/* AnimatePresence manages transitions when routes change */}
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => wooshSound.play()}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/work" element={<DummyPage title="Work" description="PROJECTS | COLLABORATIONS | EXPLORATIONS" />}  projects={workProjects}
      linkType="youtubeLink" />
          <Route path="/scripts" element={<DummyPage title="Scripts" description="IDEA | STORY | ARTICLES" />} projects={scripts}
      linkType="mediumLink" />
          <Route path="/reel" element={<DummyPage title="Reel" />} />
          <Route path="/info" element={<DummyPage title="Info" description="BIOGRAPHY | SERVICES | CONTACT" />} />
          <Route path="/art" element={<DummyPage title="Art" description="MOTION | CONCEPT ART"/>}  projects={motionProjects}
      linkType="behanceLink" />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
