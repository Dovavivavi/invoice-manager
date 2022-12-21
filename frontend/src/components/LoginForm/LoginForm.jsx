import React from 'react'
import LoginHeader from '../LoginHeader/LoginHeader'
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import './LoginForm.scss'

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [captchaToggled, setCaptchaToggled] = useState(false)
  const [buttonState, setButtonState] = useState(true)
  const navigate = useNavigate()

  // const script = document.createElement("script");
  // script.src = "https://www.google.com/recaptcha/api.js";
  // script.async = true;
  // script.defer = true;
  // document.body.appendChild(script);

  const reCaptchaRef = useRef();

//--sign in method, counts errors and fires captcha--

  let errCount = 0
  const login = async (e) => {
    try {
      e.preventDefault()
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
      console.log('successful signin!')
      navigate('/menu')
    } catch (error) {
      console.log(error.message)
      errCount++;
      if(errCount === 4) {
        console.log("captcha will be here")
        // window.grecaptcha.render('recaptcha', {
        //   sitekey: '6Lfj55YjAAAAAGOO66ROWSeX6MgzHAmURknd2UV7',
        //   size: 'invisible',
        //   callback: onCaptchaCompleted()
        // })
        setCaptchaToggled(true)
        setButtonState(false)
      }
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

// captcha
  const handleChange = (value) => {
    console.log(value)
    setButtonState(true)
    refreshPage()
  }

  return (
    <>
      <LoginHeader />
      <div id='login-section'>
        <h1>Bejelentkezés</h1>
        <div className='login-container'>
          <form action='/regi' method='POST' className='login-form'>
            <input type='text' placeholder='Felhasználónév' onChange={(event) => {setLoginEmail(event.target.value)}}/>
            <input type='password' placeholder='Jelszó' onChange={(event) => {setLoginPassword(event.target.value)}}/>
            <button className='login-button' disabled={!loginEmail + !loginPassword + !buttonState} onClick={login}>Bejelentkezés</button>
            <div id='recaptcha'>
              {captchaToggled && <ReCAPTCHA sitekey='6Lfj55YjAAAAAGOO66ROWSeX6MgzHAmURknd2UV7' size='compact' ref={reCaptchaRef} onChange={handleChange}/>}
            </div>
          </form>
        </div>
        <div>
          <Link className='registration-link' to='/registration'>Regisztráció</Link>
        </div>
      </div>
    </>
  )
}

export default LoginForm