import React from 'react'
import LoginHeader from '../LoginHeader/LoginHeader'
import './Registration.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'

function Registration() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate();

//--registration method, then redirects the user--
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log('a new user has been created!')
      navigate('/menu')
    } catch(error) {
      console.log(error.message)
    }
  };

  return (
    <>
      <LoginHeader />
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
    </>
  )
}

export default Registration