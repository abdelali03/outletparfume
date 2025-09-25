import { db } from "./firebase/firebase.utils.js";
import {
  collection,
  doc,
  getDocs,
  writeBatch,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

// New categories to add, starting from ID 93
const NEW_CATEGORIES = {
  Roja: {
    id: 109,
    title: "Roja",
    routeName: "roja",

    items: [],
  },
  Zadi_Voltair: {
    id: 110,
    title: "Zadi & Voltair",
    routeName: "zadi-voltair",
    items: [],
  },
};

const addCategoriesSafely = async () => {
  const colRef = collection(db, "shopData");

  // A. Read all existing routeNames to avoid duplicates
  const snap = await getDocs(colRef);
  const existingRouteNames = new Set();
  snap.forEach((d) => {
    const data = d.data() || {};
    if (data.routeName) existingRouteNames.add(String(data.routeName).trim());
  });

  // B. Filter only the new categories that don’t exist yet
  const toAdd = Object.values(NEW_CATEGORIES).filter(
    (c) => !existingRouteNames.has(c.routeName)
  );

  if (toAdd.length === 0) {
    console.log("No new categories to add. Everything already exists.");
    return;
  }

  // C. Write the new categories using batch
  const batch = writeBatch(db);

  toAdd.forEach((cat) => {
    // Set doc for each category using its routeName as the document ID
    const docRef = doc(colRef, cat.routeName);

    // Set the category document
    batch.set(
      docRef,
      {
        id: cat.id,
        category: cat.title,
        routeName: cat.routeName,
        items: cat.items, // start with empty items array
        createdAt: serverTimestamp(), // optional: track creation time
      },
      { merge: true } // merge: true will ensure we don’t overwrite existing fields
    );
  });

  // Commit the batch
  await batch.commit();
  console.log(
    `Added ${toAdd.length} new categor${
      toAdd.length === 1 ? "y" : "ies"
    } safely.`
  );
};

addCategoriesSafely().catch(console.error);
