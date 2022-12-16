import React from 'react'
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { useContext } from 'react'
import './MainMenu.scss'
import { UserContext } from '../../Contexts'
import { authedUser } from '../../firebase-config'

function MainMenu() {
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
        <h1>{msg}</h1>
      </div>
    </>
  )
}

export default MainMenu