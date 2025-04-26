import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils.js";

let SHOP_DATA = {}; // Variable to store fetched data

const fetchShopData = async () => {
  try {
    const shopDataRef = collection(db, "shopData");
    const querySnapshot = await getDocs(shopDataRef);

    // Parse and store the data into SHOP_DATA
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const { category, routeName, items } = data;

      // Add the fetched category and its items to SHOP_DATA
      SHOP_DATA[routeName] = {
        id: doc.id, // Document ID from Firestore
        title: category,
        routeName: routeName,
        items: items,
      };
    });

    console.log("SHOP_DATA fetched successfully:", SHOP_DATA);
  } catch (e) {
    console.error("Error fetching shop data: ", e);
  }
};

export { SHOP_DATA, fetchShopData };
