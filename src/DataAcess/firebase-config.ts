import {initializeApp} from 'firebase/app'
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA4HYmjaioDqp74BrQMOqShqC5lXINBTtE",
  authDomain: "pratica-dtax.firebaseapp.com",
  projectId: "pratica-dtax",
  storageBucket: "pratica-dtax.appspot.com",
  messagingSenderId: "958652695176",
  appId: "1:958652695176:web:f6be0070c6a794510e153d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);