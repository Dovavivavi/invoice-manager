import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
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
        <p>list</p>
        <p>create bills</p>
        <button onClick={logout}>Kijelentkezés</button>
      </div>
    </>
  )
}

export default MainMenu