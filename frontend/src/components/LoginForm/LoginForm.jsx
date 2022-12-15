import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import './LoginForm.scss'

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser)
  // })

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
      navigate('/menu')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div id='login-section'>
      <h1>Bejelentkezés</h1>
      <p>jelenlegi felhasználó: {user.email}</p>
      <div className='login-container'>
        <input type='text' placeholder='Felhasználónév' onChange={(event) => {setLoginEmail(event.target.value)}}/>
        <input type='password' placeholder='Jelszó' onChange={(event) => {setLoginPassword(event.target.value)}}/>
        <button onClick={login}>Bejelentkezés</button>
      </div>
      <div>
        <Link to='/registration'>Regisztráció</Link>
      </div>
    </div>
  )
}

export default LoginForm