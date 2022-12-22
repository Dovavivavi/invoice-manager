import React from 'react';
import BillDisplay from '../BillDisplay/BillDisplay';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../firebase-config';
import './Billlist.scss';

function Billlist() {
  const [currUser, setCurrUser] = useState('');
  const [billData, setBillData] = useState(null);
  const [button, setButton] = useState('mutasd');

//--user--
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let mail = '';
        mail = user.email;
        setCurrUser(mail);
      } else {
        // no user
      };
    });
  }, []); 

//--bill data fetch--
  let fetchData = async function() {
    const billRef = doc(db, 'users', `${currUser}`);
    const docSnap = await getDoc(billRef);

    if(docSnap.exists()) {
      setButton('vissza');
      setBillData(docSnap.data());
    } else {
      console.log('no such document!');
    };

    if(billData !== null) {
      setBillData(null);
      setButton('mutasd');
    };
  };
  
  // if(billData === null) {console.log('data is not here yet')} else {
  //   console.log('data:', billData);
  // };

  const propNames = billData && Object.values(billData)

  return (
    <div id='billlist-section'>
      <h1>Ön számlái:</h1>
      <div className='billlist-container'>
        <Link className='link' to='/create'>Új számla</Link>
        <button className='show-button' onClick={fetchData}>{button}</button>
        <Link className='link' to='/menu'>vissza</Link>
      </div>
      <div className='billldisplay-container'>
        {billData && propNames.map((billData, index) => (<BillDisplay key={index} billData={billData} />))}
      </div>
    </div>
  );
};

export default Billlist;