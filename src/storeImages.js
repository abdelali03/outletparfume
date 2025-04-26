import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase.utils.js";

const images = [
  "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743608416/givenchy-gentleman-society-ambree-miniatur_1224x410_2_uvinsb.webp",
  "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743608580/marc-jacobs-daisy-wild-intense_1224x410_h5zilw.webp",
  "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743608650/Special_Deals_Desktop_1_lwbtlr.webp",
];

const storeImages = async () => {
  try {
    const imagesCollectionRef = collection(db, "images");
    for (const url of images) {
      await addDoc(imagesCollectionRef, { url });
    }
    console.log(
      "Images wurden erfolgreich in der Collection 'images' gespeichert!"
    );
  } catch (error) {
    console.error("Fehler beim Speichern der Images: ", error);
  }
};

storeImages();
