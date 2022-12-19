import React from 'react'
import './CreateBills.scss'
import { Link } from 'react-router-dom'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { auth } from '../../firebase-config';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';


function CreateBills() {
  const [currUser, setCurrUser] = useState('')
  const [consumerName, setConsumerName] = useState('')
  const [issueDate, setIssueDate] = useState(null)
  const [dueDate, setDueDate] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [comment, setComment] = useState('')

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

// saving data
  const save = async (e) => {
    e.preventDefault();
    // billref had to wait for state update
    const billRef = doc(db, 'users', `${currUser}`)
    try {
      console.log('done')
      setDoc(billRef, {
        name: [
          consumerName,
          issueDate,
          dueDate,
          name,
          price,
          comment
        ]
      }, { merge: true })
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
    <div id='createbills-section'>
      <h1>Új számla:</h1>
      <div className='creatbills-form-container'>
        <form>
          <input type='text' placeholder='Vásárló neve' onChange={(event) => {setConsumerName(event.target.value)}} />
          <input type='text' placeholder='Tétel neve' onChange={(event) => {setName(event.target.value)}} />
          <input type='date' placeholder='Kiállítás dátuma' onChange={(event) => {setIssueDate(event.target.value)}}/>
          <input type='date' placeholder='Esedékesség dátuma' onChange={(event) => {setDueDate(event.target.value)}}/>
          <input type='number' placeholder='Ár' onChange={(event) => {setPrice(event.target.value)}} />
          <input type='text' placeholder='Megjegyzés' onChange={(event) => {setComment(event.target.value)}} />
          <button onClick={save}>Mentés</button>
        </form>
        <div>
          <Link to='/menu'>vissza</Link>
        </div>
      </div>
    </div>
  )
}

export default CreateBills