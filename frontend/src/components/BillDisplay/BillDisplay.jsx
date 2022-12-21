import React from 'react'
import './BillDisplay.scss'

function BillDisplay({ billData }) {

  return (
    <div className='billdata-chart'>
      <p className='billdata'>név: {billData[0]}</p>
      <p className='billdata'>termék név: {billData[1]}</p>
      <p className='billdata'>kiállitás dátuma: {billData[2]}</p>
      <p className='billdata'>esedékes:{billData[3]}</p>
      <p className='billdata'>ár: {billData[4]}</p>
      <p className='billdata'>megjegyzés: {billData[5]}</p>
    </div>
  )
}

export default BillDisplay