import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'
import './LoginForm.scss'

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log('user has logged in')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div id='login-section'>
      <h1>Bejelentkezés</h1>
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