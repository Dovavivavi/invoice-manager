import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC9nQYUc7wG4fPnQZlNJJs6ddnxxQ-Pxe4",
  authDomain: "novin-task.firebaseapp.com",
  projectId: "novin-task",
  storageBucket: "novin-task.appspot.com",
  messagingSenderId: "511484658052",
  appId: "1:511484658052:web:ad8d49bd756fa05e521dd1"
};

const app = initializeApp(firebaseConfig)

//auth variable for the components
export const auth = getAuth(app)