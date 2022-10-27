import React from 'react'
import './LowerPart.css';
const LowerPart = (props) => {
  return (
    <div style={{textAlign:'center'}} className='card'>
   {
       props.array.map((currentElement) => {
        return(
        <div className='lower'>
            <h1>{currentElement.username}({currentElement.years}  years old)</h1>
        </div>
        );
       })
    }
    </div>
  )
}

export default LowerPart
