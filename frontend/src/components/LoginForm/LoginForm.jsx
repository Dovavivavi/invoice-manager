import React from 'react';
import LoginHeader from '../LoginHeader/LoginHeader';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import './LoginForm.scss';

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [captchaToggled, setCaptchaToggled] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const reCaptchaRef = useRef();

//--sign in method, counts errors and fires captcha--

  let errCount = 0;
  const login = async (e) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      console.log('successful signin!');
      setErr('');
      setSuccess('sikeres bejelentkezés');
      navigate('/menu');
    } catch (error) {
      console.log(error.message);
      setErr('hibás adatok');
      errCount++;
      if(errCount === 3) {
        console.log("captcha will be here");
        setCaptchaToggled(true);
        setButtonState(false);
      };
    };
  };

//--refresh--
  function refreshPage() {
    window.location.reload(false);
  };

//--captcha--
  const handleChange = (value) => {
    console.log(value);
    setButtonState(true);
    refreshPage();
  };

  return (
    <>
      <LoginHeader />
      <div id='login-section'>
        <h1>Bejelentkezés</h1>
        <div className='login-container'>
          <form className='login-form'>
            <input type='text' placeholder='Felhasználónév (email)' onChange={(event) => {setLoginEmail(event.target.value)}}/>
            <input type='password' placeholder='Jelszó' onChange={(event) => {setLoginPassword(event.target.value)}}/>
            <button className='login-button' disabled={!loginEmail + !loginPassword + !buttonState} onClick={login}>Bejelentkezés</button>
            <div id='recaptcha'>
              {captchaToggled && <ReCAPTCHA sitekey='6Lfj55YjAAAAAGOO66ROWSeX6MgzHAmURknd2UV7' size='compact' ref={reCaptchaRef} onChange={handleChange}/>}
            </div>
            {err && <p className='error-field'>{err}</p>}
            {success && <p className='success-field'>{success}</p>}
          </form>
        </div>
        <div>
          <Link className='registration-link' to='/registration'>Regisztráció</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;