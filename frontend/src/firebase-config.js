import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'
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

//init
export const db = getFirestore()

//collection ref
export const colRef = collection(db, 'users')

//doc ref
// export const docRef = doc(db, 'users', `${}`)

//collection data
getDocs(colRef)
  .then((snap) => {
    let users = []
    snap.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
    })
    console.log(users)
  })
  .catch(err => {
    console.log(err.message)
  })

//auth variable for the components
export const auth = getAuth(app)

// export const authedUser = auth.onAuthStateChanged((user) => {
//   return user.displayName
// })