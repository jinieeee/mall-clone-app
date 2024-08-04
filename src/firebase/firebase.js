// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChKW3oew9JesVaOP3eYaI6n7zQSJxodts",
    authDomain: "mall-clone-app-81f60.firebaseapp.com",
    projectId: "mall-clone-app-81f60",
    storageBucket: "mall-clone-app-81f60.appspot.com",
    messagingSenderId: "642648737347",
    appId: "1:642648737347:web:23cec842c668d38bbe36f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
