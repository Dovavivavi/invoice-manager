import React from 'react';
import BillDisplay from '../BillDisplay/BillDisplay';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../firebase-config';

function Billlist() {
  const [currUser, setCurrUser] = useState('')
  const [billData, setBillData] = useState(null)
  const [button, setButton] = useState('mutasd')

//test

//user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let mail = ''
        mail = user.email
        setCurrUser(mail)
      } else {
        //no user
      }
    })
  }, [])  

  let fetchData = async function() {
    const billRef = doc(db, 'users', `${currUser}`)
    const docSnap = await getDoc(billRef)

    if(docSnap.exists()) {
      setBillData(docSnap.data())
      setButton('vissza')
    } else {
      console.log('no such document!')
    }

    if(billData !== null) {
      setBillData(null)
      setButton('mutasd')
    }
  }
  
  if(billData === null) {console.log('data is not here yet')} else {
    console.log('data:', billData)
  }

  const propNames = billData && Object.values(billData)

  return (
    <div id='billlist-section'>
      <h1>Összes számla:</h1>
      <div>
        <Link to='/create'>Új számla</Link>
        <Link to='/menu'>vissza</Link>
      </div>
      <div>
        {billData && propNames.map((billData, index) => (<BillDisplay key={index} billData={billData} />))}
      </div>
      <button onClick={fetchData}>{button}</button>
    </div>
  );
};

export default Billlist;