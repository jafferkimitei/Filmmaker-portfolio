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
      "/Sanaa-connect": "Dir.by Yung Havy | Sanaa Connect",
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
    const link = document.createElement("a"); // Create an invisible anchor link
    link.href = url; // Set the href to the Firebase download URL
    link.download = name; // Set the download attribute to the image's name
    link.click(); // Programmatically click the link to start the download
  };

  // Function to handle right-click (long press) event for downloading
  const handleContextMenu = (e, url, name) => {
    e.preventDefault(); // Prevent the default context menu from appearing
    downloadImage(url, name); // Trigger the download
  };

  // Fetch the first batch on component mount
  useEffect(() => {
    fetchPhotos();
  }, []);

  // Breakpoints for Masonry
  const masonryBreakpoints = {
    default: 4, // Default to 4 columns
    1100: 3,    // 3 columns for screens >= 1100px
    700: 2,     // 2 columns for screens >= 700px
    500: 1,     // 1 column for smaller screens
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[#F3C623] text-4xl font-bold mt-6 mb-4">Sanaa Connect</h1>

      <Masonry
        breakpointCols={masonryBreakpoints}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {photos.map(({ url, name }, index) => (
          <div key={name} className="relative">
            {/* Photo Container */}
            <div className="photo-container">
              {/* Image */}
              <img
                src={url}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                onContextMenu={(e) => handleContextMenu(e, url, name)} 
              />
              {/* Download Icon in Top-Right Corner */}
              <div
                onClick={() => downloadImage(url, name)} // Trigger download on click
                className="absolute top-2 right-2 p-2 bg-black text-white rounded-full cursor-pointer opacity-70 hover:opacity-100 hidden md:block" // Hide icon on small screens
              >
                <FaDownload size={24} />
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Load More Button */}
      {hasMore && !loading && (
        <button
          onClick={() => fetchPhotos(nextPageToken)}
          className="mt-4 px-4 py-2 bg-[#F3C623] text-black rounded-lg shadow-lg hover:bg-[#ffd439]"
        >
          Load More
        </button>
      )}

      {loading && <p className="text-center mt-4">Loading more photos...</p>}
    </div>
  );
};

export default PhotoGallery;
