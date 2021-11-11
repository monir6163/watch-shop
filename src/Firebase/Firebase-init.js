import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase-config";
const initilaizationAuth = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}
export default initilaizationAuth;