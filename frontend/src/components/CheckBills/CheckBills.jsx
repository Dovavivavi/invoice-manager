import React from 'react';
import { Link } from 'react-router-dom';
import './CheckBills.scss';

function CheckBills() {
  return (
    <div id='checkbills-section'>
      <h1>Számla megtekintése:</h1>
      <div>
        <Link to='/menu'>vissza</Link>
      </div>
    </div>
  );
};

export default CheckBills;