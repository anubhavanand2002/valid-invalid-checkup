import './App.css';
import React,{useState} from 'react';
import UpperPart from './Components/UpperPart';
import LowerPart from './Components/LowerPart';
import NewUpper from './Components/NewUpper';
import Uppermost from './Components/Uppermost';
function App() {
  const[arr,setarr]=useState([]);
  const[mode,setmode]=useState(1);
  function newarr(userName,age)
  {
    if(age>0 && userName.trim().length>0)
    {
      setmode(1);
     setarr((prevarr)=>{
      return(
      [...prevarr,{username:userName,years:age}]
      );
     })
    }
    if(age<0)
    {
      setmode(2);
    }
    if(userName.trim().length===0 || age.length===0)
  {
     setmode(3);
  }
  }
  function setfirst()
  {
    setmode(1);
  }
  return (
    <div className='back-last'>
        {  mode===1 &&
        <div>
          <UpperPart fun={newarr} onclick={setfirst}/>
          <LowerPart array={arr}/>
        </div>}
        { mode===2 &&
        <div>
          <NewUpper/>
          <Uppermost text="Please enter a valid age" onclick={setfirst}/>
        </div>}
        { mode===3 &&
        <div>
          <NewUpper/>
          <Uppermost text="Please enter something" onclick={setfirst}/>
        </div>}
       
     </div>
    );
}

export default App;
