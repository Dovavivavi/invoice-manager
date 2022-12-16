import React from 'react'
import './CreateBills.scss'
import { Link } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function CreateBills() {
  const save = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'users'), {
        bill: "test"
      })
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
    <div id='createbills-section'>
      <h1>Új számla:</h1>
      <div className='creatbills-form-container'>
        <form>
          <input type='text' placeholder='Vásárló neve'/>
          <input type='date' placeholder='Kiállítás dátuma'/>
          <input type='date' placeholder='Esedékesség dátuma'/>
          <input type='text' placeholder='Tétel neve'/>
          <input type='text' placeholder='Megjegyzés'/>
          <input type='number' placeholder='Ár'/>
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