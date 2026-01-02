// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

// Firebase services
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// 🔴 Firebase config (JO AAPNE DIYA)
const firebaseConfig = {
  apiKey: "AIzaSyCo5FqqmJvu0LAaDSXuMv_jafo1ZbLwW18",
  authDomain: "quickpress-24422.firebaseapp.com",
  projectId: "quickpress-24422",
  storageBucket: "quickpress-24422.appspot.com",
  messagingSenderId: "602677592052",
  appId: "1:602677592052:web:b17f44c69b6283fc6843a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT (bahut zaroori)
export const auth = getAuth(app);
export const db = getFirestore(app);
