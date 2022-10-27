import React from 'react'
import './Uppermost.css';
const Uppermost = (props) => {
  return (
    <div className='cards window'>
      <label className='age'>Invalid Input</label>
      <p className='last'>{props.text}({'>'} 0)</p>
      <button className='btn' onClick={props.onclick}>Okay</button>
    </div>
  )
}

export default Uppermost
