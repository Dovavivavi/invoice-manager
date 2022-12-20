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
  const [dispNameErr, setDispNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const navigate = useNavigate();

//--registration method, then redirects the user--
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      await updateProfile(auth.currentUser, { displayName: dispName }).catch((err) => console.log(err))
      console.log('a new user has been created!')
      navigate('/menu')
      //validation

      //adds user based on email to collection
      await setDoc(doc(db, 'users', `${registerEmail}`), {})
      
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
          <form className='registration-form'>
            <input type='text' placeholder='Név' onChange={(event) => {setDispName(event.target.value)}}/>
            <p>{dispNameErr}</p>
            <input type='email' id='email' placeholder='Felhasználónév' onChange={(event) => {setRegisterEmail(event.target.value)}}/>
            <p>{emailErr}</p>
            <input type='password' placeholder='Jelszó' onChange={(event) => {setRegisterPassword(event.target.value)}}/>
            <p></p>
            <button className='register-button' disabled={!registerEmail + !registerPassword + !dispName} onClick={register}>Regisztráció</button>
          </form>
        </div>
        <div>
          <Link className='backlink' to='/'>vissza</Link>
        </div>
      </div>
    </>
  )
}

export default Registration