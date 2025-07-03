// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Paste your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCeLlMI71qya0Ij1t14xp9lqRPoHEdDkNY",
  authDomain: "farmers-5d7eb.firebaseapp.com",
  projectId: "farmers-5d7eb",
  appId: "1:653225733546:web:10b1220d5a00030aca8fd3",
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  