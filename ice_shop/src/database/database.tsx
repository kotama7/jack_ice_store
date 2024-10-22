import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLdohri8bD6__ct4LoMX38p2bnw4QMj00",
  authDomain: "jack-ice-store.firebaseapp.com",
  databaseURL: "https://jack-ice-store-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jack-ice-store",
  storageBucket: "jack-ice-store.appspot.com",
  messagingSenderId: "288898268761",
  appId: "1:288898268761:web:cf7cb51f9404c48a9e7b48",
  measurementId: "G-CBVHG7MN91"
};
  
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;