import React from 'react'
import './Registration.scss'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div id='form-section'>
      <h1>Regisztráció</h1>
      <div className='form-container'>
        <form className='input-container'>
          <input type='text' placeholder='Név' />
          <input type='text' placeholder='Felhasználónév' />
          <input type='password' placeholder='Jelszó' />
          <button>Regisztráció</button>
        </form>
      </div>
      <div>
        <Link to='/'>vissza</Link>
      </div>
    </div>
  )
}

export default Registration