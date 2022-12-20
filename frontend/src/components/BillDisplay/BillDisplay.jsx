import React from 'react'

function BillDisplay({ billData }) {

  return (
    <div>
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