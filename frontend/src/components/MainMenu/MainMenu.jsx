import React from 'react'
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { useContext } from 'react'
import './MainMenu.scss'
import { UserContext } from '../../Contexts'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { useEffect } from 'react'

function MainMenu() { 
  const [currUser, setCurrUser] = useState([])

// context test
  const msg = useContext(UserContext)

//--logout method--
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await signOut(auth)
      console.log('succesful signout!')
      navigate('/')
    } catch(error) {
      console.log(error.message)
    }
  }

//--gettime method--
  const current = new Date();
  const time = current.toLocaleTimeString('hu-HU')

//--user data--
  useEffect(() => {
    // const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in: puts the neccesary data into an array
        let dataArr = []
        dataArr.push(user.displayName, user.email, user.metadata.lastSignInTime)
        setCurrUser(dataArr)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])
  currUser && console.log(currUser[0])

  return (
    <>
      <div>MainMenu Header</div>
      <div>
        <Link to='/create'>Új számla</Link>
        <Link to='/list'>Összes számla</Link>
        <Link to='/check'>Számla megtekintése</Link>
        <button onClick={logout}>Kijelentkezés</button>
      </div>
      <div>
        <h1>{"bejelentkezett felhasználó: " + currUser[0]}</h1>
        <p>{"email: " + currUser[1]}</p>
        <p>{time}</p>
        <p>{"Utolsó bejelentkezés: " + currUser[2]}</p>
        <h1>{msg}</h1>
      </div>
    </>
  )
}

export default MainMenu