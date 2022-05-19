import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { collection, CollectionReference, DocumentData, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsI2qLoPZpcA5QFp1Dnz8TiNbrCqr8XNk",
  authDomain: "digital-dahoam.firebaseapp.com",
  projectId: "digital-dahoam",
  storageBucket: "digital-dahoam.appspot.com",
  messagingSenderId: "532207686252",
  appId: "1:532207686252:web:5f455be6b61e787d11fe49",
  measurementId: "G-RB98YSRV64",
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}

export const profileCollection = createCollection<Profile>("profiles")

// export const firebaseCollection = collection(db, "user")
