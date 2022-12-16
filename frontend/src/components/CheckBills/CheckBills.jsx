import React from 'react'
import './CheckBills.scss'
import { Link } from 'react-router-dom'

function CheckBills() {
  return (
    <div id='checkbills-section'>
      <h1>Számla megtekintése:</h1>
      <div>
        <Link to='/menu'>vissza</Link>
      </div>
    </div>
  )
}

export default CheckBills