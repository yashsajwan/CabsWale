import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhFq05Tdld4OtkM4WxoCYGsPPUkCWLtK4",
  authDomain: "bwi-cabswalle.firebaseapp.com",
  projectId: "bwi-cabswalle",
  storageBucket: "bwi-cabswalle.appspot.com",
  messagingSenderId: "629712858302",
  appId: "1:629712858302:web:24d6478c7eaf93d50282ef",
  measurementId: "G-NSTH0YG0W2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
