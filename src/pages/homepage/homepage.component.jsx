import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import "./homepage.style.scss";
import Directory from "../../components/directoy/directory.component";

const Homepage = () => {
  const [images, setImages] = useState([]); // Hier speichern wir die aus Firebase geladenen Bild-Links
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Laden der Bilder aus Firestore
  useEffect(() => {
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

  // Carousel-Logik: Automatischer Wechsel, falls Bilder vorhanden sind
  useEffect(() => {
    if (images.length === 0) return; // Falls noch keine Bilder geladen sind, nichts tun
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Wechselt alle 5 Sekunden

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="homepage">
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
