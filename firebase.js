// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

// Firebase services
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// Your Firebase configuration (JO AAPNE DIYA)
const firebaseConfig = {
  apiKey: "AIzaSyCo5FqqmJvu0LAaDSXuMv_jafo1ZbLw18",
  authDomain: "quickpress-24422.firebaseapp.com",
  projectId: "quickpress-24422",
  storageBucket: "quickpress-24422.firebasestorage.app",
  messagingSenderId: "602677592052",
  appId: "1:602677592052:web:b17f44c69b6283fc6843a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services (VERY IMPORTANT)
export const auth = getAuth(app);
export const db = getFirestore(app);
