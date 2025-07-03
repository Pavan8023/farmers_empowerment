// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TODO: Replace the following with your own Firebase project config 👇
const firebaseConfig = {
  apiKey: "AIzaSyCeLlMI71qya0Ij1t14xp9lqRPoHEdDkNY",
  authDomain: "farmers-5d7eb.firebaseapp.com",
  projectId: "farmers-5d7eb",
  appId: "1:653225733546:web:10b1220d5a00030aca8fd3",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
