
import './App.css';
import React, { useState } from 'react';

function App() {

  const [ time, setTime ] =  useState()
  const [ date, setDate ] =  useState()
  
  function captureTime(e){
    e.preventDefault();
    setTime(e.target.value)
    console.log("Time Selected: ", time)
  }
  function captureDate(e){
    e.preventDefault();
    setDate(e.target.value)
    console.log("Date Selected", date)
  }
  

  return (
    <>
    <div className="container my-5 p-5 text-center rounded-3 w-75 pickerBackround">
      <h4 className="text-light p-3">Select date and time</h4>
      
      <input type="date" className="input mx-2" onSelect={captureDate}></input>

      <select id="mySelect" className="input time mx-2" onChange={captureTime}>
        <option defaultValue disabled>10:00 to 11:00</option>
        <option  type="text" value="11:00 to 12:00">11:00 to 12:00</option>
        <option value="12:00 to 13:00">12:00 to 13:00</option>
        <option value="13:00 to 14:00">13:00 to 14:00</option>
        <option value="14:00 to 15:00">13:00 to 14:00</option>
        <option value="15:00 to 16:00">13:00 to 14:00</option>
        <option value="16:00 to 17:00">13:00 to 14:00</option>
        <option value="17:00 to 18:00">13:00 to 14:00</option>
        <option value="18:00 to 119:00">13:00 to 14:00</option>
      </select>
  
   <div className="row my-4 text-light">
     <h6>Date: {date}</h6>
     <h6>Time: {time}</h6>
   </div>
   </div>
   </>
  );
}

export default App;
