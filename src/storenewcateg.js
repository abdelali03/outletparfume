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
  Marc_jacob: {
    id: 93,
    title: "Marc jacob",
    routeName: "marc-jacob",
    items: [], // Empty items array for now
  },
  Jo_Malone: {
    id: 94,
    title: "Jo Malone",
    routeName: "jo-malone",
    items: [],
  },
  Celine: {
    id: 95,
    title: "Celine",
    routeName: "celine",
    items: [],
  },
  Philosykos: {
    id: 96,
    title: "Philosykos",
    routeName: "philosykos",
    items: [],
  },
  Mirabilis: {
    id: 97,
    title: "Mirabilis",
    routeName: "mirabilis",
    items: [],
  },
  Trussardi: {
    id: 98,
    title: "Trussardi",
    routeName: "trussardi",
    items: [],
  },
  Billie_Eilish: {
    id: 99,
    title: "Billie Eilish",
    routeName: "billie-eilish",
    items: [],
  },
  Giardino: {
    id: 100,
    title: "Giardino",
    routeName: "giardino",
    items: [],
  },
  Issey_Miyake: {
    id: 101,
    title: "Issey Miyake",
    routeName: "issey-miyake",
    items: [],
  },
  Club_de_nuit: {
    id: 102,
    title: "Club de nuit",
    routeName: "club-de-nuit",
    items: [],
  },
  Zadi_Voltaire: {
    id: 103,
    title: "Zadi&Voltaire",
    routeName: "zadi-voltaire",
    items: [],
  },
  Kenzo: {
    id: 104,
    title: "Kenzo",
    routeName: "kenzo",
    items: [],
  },
  L_ARTISAN_PARFUMWUR: {
    id: 105,
    title: "L‘ARTISAN PARFUMWUR",
    routeName: "lartisanparfumwur",
    items: [],
  },
  DKNY: {
    id: 106,
    title: "DKNY",
    routeName: "dkny",
    items: [],
  },
  Lattafa: {
    id: 107,
    title: "Lattafa",
    routeName: "lattafa",
    items: [],
  },
  DEAR_POLLY: {
    id: 108,
    title: "DEAR POLLY",
    routeName: "dearpolly",
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
