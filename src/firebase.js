import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSVcKxDzC8P4-l4TZ-QUH-qYqKg8fyzw8",
  authDomain: "visitor-portofolio.firebaseapp.com",
  projectId: "visitor-portofolio",
  storageBucket: "visitor-portofolio.firebasestorage.app",
  messagingSenderId: "201073943069",
  appId: "1:201073943069:web:cadb5665f2707c44781cf4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);