import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeLlMI71qya0Ij1t14xp9lqRPoHEdDkNY",
  authDomain: "farmers-5d7eb.firebaseapp.com",
  projectId: "farmers-5d7eb",
  storageBucket: "farmers-5d7eb.firebasestorage.app",
  messagingSenderId: "653225733546",
  appId: "1:653225733546:web:10b1220d5a00030aca8fd3",
  measurementId: "G-KHL7Z6SJQX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const handleRegistration = (formId, userType) => {
  const form = document.getElementById(formId);
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Common fields
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

    // Validate passwords
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // User-specific data collection
      let userData = {
        uid,
        email,
        password, 
        userType,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      // Add type-specific fields
      if (userType === 'agri-entrepreneur') {
        userData = {
          ...userData,
          businessName: form.querySelector('#farmName').value,
          businessType: form.querySelector('#businessType').value,
          location: form.querySelector('#location').value
        };
      } else if (userType === 'farmer') {
        userData = {
          ...userData,
          fullName: form.querySelector('#farmerName').value,
          landSize: parseFloat(form.querySelector('#landSize').value),
          irrigationType: form.querySelector('#irrigationType').value,
          primaryCrop: form.querySelector('#primaryCrop').value
        };
      }

      // Save to Firestore
      await setDoc(doc(db, 'farmers', uid), userData);
      
      alert('Registration successful!');
      window.location.href = 'log.html'; // Redirect to dashboard

    } catch (error) {
      console.error('Registration error:', error);
      alert(`Registration failed: ${error.message}`);
    }
  });
};

// Initialize form handlers
document.addEventListener('DOMContentLoaded', () => {
  handleRegistration('agriForm', 'agri-entrepreneur');
  handleRegistration('farmerForm', 'farmer');
  
  // Additional validation for farmer form
  document.getElementById('landSize')?.addEventListener('input', (e) => {
    if (parseFloat(e.target.value) <= 0) {
      e.target.setCustomValidity('Please enter a valid land size');
    } else {
      e.target.setCustomValidity('');
    }
  });
});