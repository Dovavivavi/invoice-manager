import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.scss'

function LoginForm() {
  return (
    <div id='login-section'>
      <h1>Bejelentkezés</h1>
      <div className='login-container'>
        <input type='text' placeholder='Felhasználónév'/>
        <input type='password' placeholder='Jelszó'/>
        <button>Bejelentkezés</button>
      </div>
      <div>
        <Link to='/registration'>Regisztráció</Link>
      </div>
    </div>
  )
}

export default LoginForm