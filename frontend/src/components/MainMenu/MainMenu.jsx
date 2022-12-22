import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import './MainMenu.scss';

function MainMenu() { 
  const [currUser, setCurrUser] = useState([]);
  const navigate = useNavigate();

//--logout method--
  const logout = async () => {
    try {
      await signOut(auth);
      console.log('succesful signout!');
      navigate('/');
    } catch(error) {
      console.log(error.message);
    };
  };

//--gettime method--
  const current = new Date();
  const time = current.toLocaleTimeString('hu-HU');

//--user data--
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in: puts the neccesary data into an array
        let dataArr = [];
        dataArr.push(user.displayName, user.email, user.metadata.lastSignInTime);
        setCurrUser(dataArr);
        // ...
      } else {
        // User is signed out
        // ...
      };
    });
  }, []);
  
  currUser && console.log(currUser[0])

  return (
    <>
      <div className='mainheader-container'>
        <div className='link-container'>
          <Link className='nav-link' to='/create'>Új számla</Link>
          <Link className='nav-link' to='/list'>Összes számla</Link>
        </div>
        <div className='button-container'>
          <button className='logout-button' onClick={logout}>Kijelentkezés</button>
        </div>
      </div>
      <div className='mainbody-container'>
        <div className='data-container'>
          <h1>{"bejelentkezett felhasználó: " + currUser[0]}</h1>
          <p>{"felhasználónév (email): " + currUser[1]}</p>
          <p>idő: {time}</p>
          <p>{"utolsó bejelentkezés: " + currUser[2]}</p>
        </div>
      </div>
    </>
  );
};

export default MainMenu;