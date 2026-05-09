import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { gFb } from "./fb";

const firebaseConfig = {
  apiKey: "AIzaSyBEu218VJqSi2AgNkINXe_iizgD64jhMWE",
  authDomain: "online-game-test-90f91.firebaseapp.com",
  projectId: "online-game-test-90f91",
  storageBucket: "online-game-test-90f91.firebasestorage.app",
  messagingSenderId: "1011026273447",
  appId: "1:1011026273447:web:dc6f088f3df6dcaad5a782",
  measurementId: "G-Q32XXK7ZVS"
};

const app = initializeApp(firebaseConfig)

export function initFb(){
    gFb.add("app", app)
    gFb.add("db", getFirestore(app))
    gFb.add("auth", getAuth(app))
    gFb.add("provider", new GoogleAuthProvider())
    gFb.add("user", null)
}