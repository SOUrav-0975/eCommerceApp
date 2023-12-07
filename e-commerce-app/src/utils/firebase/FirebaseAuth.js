import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDVf9i6JiON2iGogTQDBEsl8by95m0v4DA",
  authDomain: "uptrend-db.firebaseapp.com",
  projectId: "uptrend-db",
  storageBucket: "uptrend-db.appspot.com",
  messagingSenderId: "258130278854",
  appId: "1:258130278854:web:d3cbd98ebf80eb7e595ac7",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const userFormAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userData = await getDoc(userDocRef);
  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
