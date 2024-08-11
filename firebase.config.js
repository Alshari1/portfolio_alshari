
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC328pDt5A25AvEOKepR3JpUM6SgxjFcgs",
  authDomain: "portfolio-alshari.firebaseapp.com",
  projectId: "portfolio-alshari",
  storageBucket: "portfolio-alshari.appspot.com",
  messagingSenderId: "725924599443",
  appId: "1:725924599443:web:fa665f85c6639e61d85f66"
};


const app = initializeApp(firebaseConfig);
export default app