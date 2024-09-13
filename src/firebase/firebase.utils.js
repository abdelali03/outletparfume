import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyA-6KCingCj-9CdffnFeN93Io5-kxOcKtA",
  authDomain: "crwn-db-c542f.firebaseapp.com",
  projectId: "crwn-db-c542f",
  storageBucket: "crwn-db-c542f.appspot.com",
  messagingSenderId: "700345042402",
  appId: "1:700345042402:web:710b8604e65e0faa0425bb",
  measurementId: "G-8BP460K7P8",
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
