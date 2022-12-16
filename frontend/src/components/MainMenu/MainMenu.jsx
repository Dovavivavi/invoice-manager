import React from 'react'
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { onAuthStateChanged } from 'firebase/auth' 
import './MainMenu.scss'

function MainMenu() {

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
  // auth.onAuthStateChanged((user) => {
  //   if(user) {
  //     console.log(user)
  //   } else {
  //     console.log('no user')
  //   }
  // })

  auth && console.log(auth.currentUser)

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
        <h1>adatok:</h1>
        <p>dipsnév</p>
        <p>felhasználónév</p>
        <p>jelszó</p>
        <p>{time}</p>
        <p>utolsó belépés dátuma</p>
      </div>
    </>
  )
}

export default MainMenu