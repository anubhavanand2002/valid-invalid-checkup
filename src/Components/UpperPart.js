import React,{useState} from 'react'
import './UpperPart.css';
const UpperPart = (props) => {
const[initialUsername,setinitialUsername]=useState('');
const[initialAge,setinitialAge]=useState('');
function UsernameHandler(event)
{
    setinitialUsername(event.target.value);
}
function AgeHandler(event)
{
    setinitialAge(event.target.value);
}
function Submitted(event)
{
 event.preventDefault();
 const userName = initialUsername;
 const age = initialAge;
//  if(userName.trim().length===0)
//      return;
//  if(age.toString.trim().length()===0)
//      return;
// if(age<0)
//      return;
 props.fun(userName,age);
 setinitialAge("");
 setinitialUsername("");
 
}
  return (
    <form className='mid card' onSubmit={Submitted}>
            <label className='lab'>Username</label>
            <input type="text" className='len' onChange={UsernameHandler} value={initialUsername}></input>
            <label className='lab'>Age(Years)</label>
            <input type="number" className='len' onChange={AgeHandler} value={initialAge}></input>
            <div>
               <button type="submit" className='btn but'>Add User</button>
            </div>
    </form>
  )
}

export default UpperPart;
