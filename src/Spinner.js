import React from 'react'
import loading from './Spinner-1s-90px.gif'
import  './Spinner.css'
function Spinner() {
  return (
    <div className='Spinner'>
        <img src={loading} alt="spinner"></img>
    </div>
  )
}

export default Spinner