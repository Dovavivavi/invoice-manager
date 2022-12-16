import React from 'react'
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import './MainMenu.scss'

function MainMenu() {
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
        <p>név</p>
        <p>felhasználónév</p>
        <p>jelszó</p>
        <p>pontos idő</p>
        <p>utolsó belépés dátuma</p>
      </div>
    </>
  )
}

export default MainMenu