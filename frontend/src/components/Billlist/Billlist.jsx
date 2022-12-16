import React from 'react';
import { Link } from 'react-router-dom';

function Billlist() {
  return (
    <div id='billlist-section'>
      <h1>Összes számla:</h1>
      <div>
        <Link to='/create'>Új számla</Link>
        <Link to='/menu'>vissza</Link>
      </div>
      <div>bills...</div>
    </div>
  );
};

export default Billlist;