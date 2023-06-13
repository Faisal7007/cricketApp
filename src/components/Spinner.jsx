import React from 'react'
import './Spinner.css'
import spinner from './images/spinner.gif'

function Spinner() {
  return (
    <div className='main_div'>
        <img src={spinner} alt="Loading" height={'80'} />

      
    </div>
  )
}

export default Spinner
