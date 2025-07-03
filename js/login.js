import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCeLlMI71qya0Ij1t14xp9lqRPoHEdDkNY",
  authDomain: "farmers-5d7eb.firebaseapp.com",
  projectId: "farmers-5d7eb",
  storageBucket: "farmers-5d7eb.firebasestorage.app",
  messagingSenderId: "653225733546",
  appId: "1:653225733546:web:10b1220d5a00030aca8fd3",
  measurementId: "G-KHL7Z6SJQX"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Simple input validation
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Firebase login
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashmain.html"; // Redirect to dashboard
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
