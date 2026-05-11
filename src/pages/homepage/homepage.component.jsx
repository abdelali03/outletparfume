import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import "./homepage.style.scss";
import Directory from "../../components/directoy/directory.component";

const Homepage = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check ob der User schon mal da war
    const hasVisited = localStorage.getItem("hasSeenWelcome");
    if (!hasVisited) {
      setShowWelcome(true);
    }

    const fetchImages = async () => {
      try {
        const imagesCollection = collection(db, "images");
        const snapshot = await getDocs(imagesCollection);
        const imageUrls = snapshot.docs.map((doc) => doc.data().url);
        setImages(imageUrls);
      } catch (error) {
        console.error("Fehler beim Laden der Bilder:", error);
      }
    };
    fetchImages();
  }, []);

  const closeWelcomePopup = () => {
    setShowWelcome(false);
    localStorage.setItem("hasSeenWelcome", "true"); // Merken, dass Popup gesehen wurde
  };

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="homepage">
      {/* WILLKOMMENS POPUP */}
      {showWelcome && (
        <div className="welcome-overlay">
          <div className="welcome-modal">
            <div className="sticker">✨</div>
            <h2>Willkommen bei Outlet Parfum! 🛍️</h2>
            <p>
              Entdecke die exklusivsten Düfte zu unschlagbaren Preisen. Schön,
              dass du da bist! 🌸✨
            </p>
            <button className="start-btn" onClick={closeWelcomePopup}>
              Jetzt stöbern 🚀
            </button>
          </div>
        </div>
      )}

      <div className="homepage-header">
        <h1>Outlet Parfum</h1>
      </div>

      <div className="carousel">
        {images.length > 0 ? (
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
        ) : (
          <p>Lade Bilder…</p>
        )}
      </div>
      <Directory />
    </div>
  );
};

export default Homepage;
