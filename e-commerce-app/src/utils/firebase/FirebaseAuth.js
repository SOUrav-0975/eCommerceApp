import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";
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
//sign in method
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
//for database storage
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categiries");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const userFormAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userData = await getDoc(userDocRef);
  if (!userData.exists()) {
    const { name, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signiInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
