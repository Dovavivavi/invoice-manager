import React from 'react'
import './CreateBills.scss'
import { Link } from 'react-router-dom'

function CreateBills() {
  return (
    <div id='createbills-section'>
      <h1>Új számla:</h1>
      <div className='creatbills-form-container'>
        <from>
          <input type='text' placeholder='Vásárló neve'/>
          <input type='date' placeholder='Kiállítás dátuma'/>
          <input type='date' placeholder='Esedékesség dátuma'/>
          <input type='text' placeholder='Tétel neve'/>
          <input type='text' placeholder='Megjegyzés'/>
          <input type='number' placeholder='Ár'/>
          <button>Mentés</button>
        </from>
        <div>
          <Link to='/'>vissza</Link>
        </div>
      </div>
    </div>
  )
}

export default CreateBills