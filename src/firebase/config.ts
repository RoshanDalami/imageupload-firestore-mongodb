// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBr1I952teoOXok3sKQ1WTx2cKrPIklJBk",
//   authDomain: "sahidhospital-3c3e0.firebaseapp.com",
//   projectId: "sahidhospital-3c3e0",
//   storageBucket: "sahidhospital-3c3e0.appspot.com",
//   messagingSenderId: "563822362007",
//   appId: "1:563822362007:web:18775f1db9963a657c18d2"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8dpoSwb-Aefs74BEABxzdDKGOps_TFrY",
  authDomain: "uploader-d6343.firebaseapp.com",
  projectId: "uploader-d6343",
  storageBucket: "uploader-d6343.appspot.com",
  messagingSenderId: "905150829542",
  appId: "1:905150829542:web:d5f05708d147cfaf00fc27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
