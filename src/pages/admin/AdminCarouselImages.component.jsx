import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import "./adminCarouselImages.style.scss";

const AdminCarouselImages = () => {
  const [images, setImages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const imagesCol = collection(db, "images");
      const snapshot = await getDocs(imagesCol);
      const imageList = snapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
      }));
      setImages(imageList);
    } catch (error) {
      console.error("Fehler beim Laden der Bilder:", error);
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setNewUrl(images[index].url);
  };

  const saveEdit = async (index) => {
    try {
      const imageId = images[index].id;
      const imageDocRef = doc(db, "images", imageId);
      await setDoc(imageDocRef, { url: newUrl }, { merge: true });
      setEditingIndex(null);
      fetchImages(); // Nach Update neu laden
    } catch (error) {
      console.error("Fehler beim Aktualisieren des Bild-Links:", error);
    }
  };

  return (
    <div className="admin-carousel-images">
      <h2>Carousel Images Verwaltung</h2>
      <table>
        <thead>
          <tr>
            <th>Bild-Link</th>
            <th>Aktion</th>
          </tr>
        </thead>
        <tbody>
          {images.map((img, index) => (
            <tr key={img.id}>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                  />
                ) : (
                  img.url
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button onClick={() => saveEdit(index)}>Speichern</button>
                ) : (
                  <button onClick={() => startEditing(index)}>Editieren</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCarouselImages;
