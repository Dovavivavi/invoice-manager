import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import './CreateBills.scss';


function CreateBills() {
  const [currUser, setCurrUser] = useState('');
  const [consumerName, setConsumerName] = useState('');
  const [name, setName] = useState('');
  const [issueDate, setIssueDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [price, setPrice] = useState('');
  const [comment, setComment] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

//--user--
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let mail = '';
        mail = user.email;
        setCurrUser(mail);
      } else {
        //no user
      };
    });
  }, [])

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false)
    }, "1000");
  }

//--saving data--
  const save = async (e) => {
    e.preventDefault();
  // billref had to wait for state update
    const billRef = doc(db, 'users', `${currUser}`);
  // computed array, to provide different property value
    let billProp = name;
    let response = [
      consumerName,
      name,
      issueDate,
      dueDate,
      price,
      comment
    ];

    if (consumerName !== '' && name !== '' && issueDate != null && dueDate != null && price !== '') {
      try {
        console.log('done');
        setErr('');
        setSuccess('sikeres számlalétrehozás');
        setDoc(billRef, {
          [billProp]: response
        }, { merge: true });
        refreshPage();
      } catch(error) {
        console.log(error.message);
      }
    } else {
      setErr('töltsd ki az összes mezőt!');
      setSuccess('');
    }
  }

  return (
    <div id='createbills-section'>
      <h1>Új számla:</h1>
      <div className='creatbills-form-container'>
        <form className='createbills-form'>
          <input type='text' placeholder='Vásárló neve' onChange={(event) => {setConsumerName(event.target.value)}} />
          <input type='text' placeholder='Tétel neve' onChange={(event) => {setName(event.target.value)}} />
          <input type='date' placeholder='Kiállítás dátuma' onChange={(event) => {setIssueDate(event.target.value)}}/>
          <input type='date' placeholder='Esedékesség dátuma' onChange={(event) => {setDueDate(event.target.value)}}/>
          <input type='number' placeholder='Ár' onChange={(event) => {setPrice(event.target.value)}} />
          <input className='comment' type='text' placeholder='Megjegyzés (opcionális)' onChange={(event) => {setComment(event.target.value)}} />
          {err && <p className='error-field'>{err}</p>}
          {success && <p className='success-field'>{success}</p>}
          <button className='save-button' onClick={save}>Mentés</button>
        </form>
      </div>
      <div className='backlink-container'>
        <Link className='backlink' to='/menu'>vissza</Link>
      </div>
    </div>
  );
};

export default CreateBills;