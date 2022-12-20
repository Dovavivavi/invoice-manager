import React from 'react'
import './BillDisplay.scss'

function BillDisplay({ billData }) {

  return (
    <div className='billdata-chart'>
      <p>{billData[0]}</p>
      <p>{billData[1]}</p>
      <p>{billData[2]}</p>
      <p>{billData[3]}</p>
      <p>{billData[4]}</p>
      <p>{billData[5]}</p>
    </div>
  )
}

export default BillDisplay