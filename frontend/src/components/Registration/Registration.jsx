import React from 'react'
import LoginHeader from '../LoginHeader/LoginHeader'
import './Registration.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../../firebase-config'
import { doc, setDoc } from 'firebase/firestore'

function Registration() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [dispName, setDispName] = useState('');
  const navigate = useNavigate();

//--registration method, then redirects the user--
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      await updateProfile(auth.currentUser, { displayName: dispName }).catch((err) => console.log(err))
      console.log(user)
      console.log('a new user has been created!')
      navigate('/menu')

      //adds user based on email to collection
      await setDoc(doc(db, 'users', `${registerEmail}`), {})

      //sends data to mainmenu component
      
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
            <input type='text' placeholder='Név' onChange={(event) => {setDispName(event.target.value)}}/>
            <input type='email' id='email' placeholder='Felhasználónév' onChange={(event) => {setRegisterEmail(event.target.value)}}/>
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