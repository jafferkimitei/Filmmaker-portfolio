import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { storage, ref, list, getDownloadURL } from "../firebase";
import Masonry from "react-masonry-css";
import { FaDownload } from "react-icons/fa";

const PhotoGallery = () => {
  const location = useLocation();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const pageTitleMap = {
      "/sanaa-connect": "Dir.by Yung Havy | Sanaa Connect",
    };
    document.title = pageTitleMap[location.pathname] || "Dir.by Yung Havy";
  }, [location.pathname]);

  // Function to fetch photos in chunks
  const fetchPhotos = async (pageToken = null) => {
    setLoading(true);

    try {
      const photosRef = ref(storage, "Sanaa_connect/");
      const result = await list(photosRef, { maxResults: 12, pageToken });

      const urls = await Promise.all(
        result.items.map(async (item) => {
          const downloadUrl = await getDownloadURL(item);
          return { url: downloadUrl, name: item.name };
        })
      );

      // Avoid duplicates by checking the `name` property
      setPhotos((prevPhotos) => {
        const uniquePhotos = [...prevPhotos];
        urls.forEach((newPhoto) => {
          if (!prevPhotos.some((photo) => photo.name === newPhoto.name)) {
            uniquePhotos.push(newPhoto);
          }
        });
        return uniquePhotos;
      });

      setNextPageToken(result.nextPageToken || null);

      if (!result.nextPageToken) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to trigger the download
  const downloadImage = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
  };

  // Function to handle right-click (long press) event for downloading
  const handleContextMenu = (e, url, name) => {
    e.preventDefault();
    downloadImage(url, name);
  };

  // Fetch the first batch on component mount
  useEffect(() => {
    fetchPhotos();
  }, []);

  // Breakpoints for Masonry
  const masonryBreakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-[#F3C623] text-4xl font-bold mt-6 mb-4">Sanaa Connect Event</h1>

      {/* Download All Photos Button */}
      <div className="flex justify-start mt-8 mb-4 ">
        <button 
         onClick={() =>
          window.open(
            "https://drive.google.com/drive/folders/1BUUuk9wXt_Q_Jf3u1Qwnl8Ye9E5OrYfF?usp=sharing",
            "_blank"
          )
        }
        className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
         <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download here</span>
        </button>
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {photos.map(({ url, name }, index) => (
          <div key={name} className="relative">
            <div className="photo-container">
              <img
                src={url}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                onContextMenu={(e) => handleContextMenu(e, url, name)}
              />
            </div>
          </div>
        ))}
      </Masonry>

      {/* Load More Button */}
      {hasMore && !loading && (
        <button
          onClick={() => fetchPhotos(nextPageToken)}
          className="mt-4 px-6 py-4 bg-gradient-to-r from-[#F3C623] to-[#ffd439] text-black font-semibold rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 text-lg flex items-center justify-center"
        >
          View More
        </button>
      )}

      {/* Loading Indicator */}
      {loading && <p className="text-center mt-4">Loading sanaa photos...</p>}
    </div>
  );
};

export default PhotoGallery;
