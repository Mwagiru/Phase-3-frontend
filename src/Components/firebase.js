import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvm0YZoFXG-TUTaXS4Iu4xBiFahfICNVM",
  authDomain: "quotsy-auth.firebaseapp.com",
  projectId: "quotsy-auth",
  storageBucket: "quotsy-auth.appspot.com",
  messagingSenderId: "792189022559",
  appId: "1:792189022559:web:020b2e3e446e44d2e886ea",
  measurementId: "G-DYQ0SGM1EX",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
