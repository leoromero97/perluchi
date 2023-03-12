import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// @TODO: Change values by environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCfyW7ARvQOx9_LbSKfoUgnZwWYHTTX6gM",
  authDomain: "perluchi-ecommerce-react.firebaseapp.com",
  projectId: "perluchi-ecommerce-react",
  storageBucket: "perluchi-ecommerce-react.appspot.com",
  messagingSenderId: "19635191359",
  appId: "1:19635191359:web:83d0f0911e7d9e4d4c028a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
