// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDwvN37U5CyxYdFJWTcUiqbi-ZXah7RJo",
    authDomain: "independent-service-prov-df388.firebaseapp.com",
    projectId: "independent-service-prov-df388",
    storageBucket: "independent-service-prov-df388.appspot.com",
    messagingSenderId: "237701210885",
    appId: "1:237701210885:web:be399d36207505e260cd6c",
    measurementId: "G-VD91LNBRN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;