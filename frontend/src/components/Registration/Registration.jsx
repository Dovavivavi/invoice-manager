import React from 'react'
import './Registration.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'

function Registration() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
    } catch(error) {
      console.log(error.message)
    }
  };

  return (
    <div id='form-section'>
      <h1>Regisztráció</h1>
      <div className='form-container'>
        <form className='input-container'>
          <input type='text' placeholder='Név' />
          <input type='email' placeholder='Felhasználónév' onChange={(event) => {setRegisterEmail(event.target.value)}}/>
          <input type='password' placeholder='Jelszó' onChange={(event) => {setRegisterPassword(event.target.value)}}/>
          <button onClick={register}>Regisztráció</button>
        </form>
      </div>
      <div>
        <Link to='/'>vissza</Link>
      </div>
    </div>
  )
}

export default Registration