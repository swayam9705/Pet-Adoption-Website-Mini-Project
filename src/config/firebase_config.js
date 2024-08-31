import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCIbh81lRDmHtEFnJ5M_nOnLZpyiCV9JQo",
    authDomain: "fir-project-212de.firebaseapp.com",
    projectId: "fir-project-212de",
    storageBucket: "fir-project-212de.appspot.com",
    messagingSenderId: "474483075411",
    appId: "1:474483075411:web:56b15f585792d79e17d9a6",
    measurementId: "G-6G6864TEQP"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)