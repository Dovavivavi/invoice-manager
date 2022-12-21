import React from 'react';
import { Modal, Box, Button } from '@mui/material'
import './BillDisplay.scss';
import { useState } from 'react';

function BillDisplay({ billData }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='billdata-chart'>
      <p className='billdata'>név: {billData[0]}</p>
      <p className='billdata'>termék neve: {billData[1]}</p>
      <p className='billdata'>kiállitás dátuma: {billData[2]}</p>
      <p className='billdata'>esedékes:{billData[3]}</p>
      <p className='billdata'>ár: {billData[4]}</p>
      <p className='billdata'>megjegyzés: {billData[5]}</p>
      <Button onClick={() => setOpen(true)}>megnyit</Button>
      <Modal open={open} onClose={() => setOpen(false)} >
        <Box position='absolute' top='20%' left='40%'>
          <div className='modal-container'>
            <h1>{billData[0]}</h1>
            <p>termék neve:</p>
            <p className='modal-data'>{billData[1]}</p>
            <p>kiállitás:</p>
            <p className='modal-data'>{billData[2]}</p>
            <p>esedékes:</p>
            <p className='modal-data'>{billData[3]}</p>
            <p>ár:</p>
            <p className='modal-data'>{billData[4]}</p>
            <p>megjegyzés:</p>
            <p className='modal-data'>{billData[5]}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BillDisplay;