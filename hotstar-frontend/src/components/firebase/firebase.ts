import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhQ3EjDUssVI0ON6Pc-Hz6X1C9vCCMOKo",
  authDomain: "hotstar-demo-ff111.firebaseapp.com",
  projectId: "hotstar-demo-ff111",
  storageBucket: "hotstar-demo-ff111.appspot.com",
  messagingSenderId: "611410728549",
  appId: "1:611410728549:web:95512b404786bf109d588c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

