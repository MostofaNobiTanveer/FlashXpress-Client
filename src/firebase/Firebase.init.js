import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.config";

export const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
