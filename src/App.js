
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
    <div className="container my-5 p-5 text-center bg-light rounded-3 w-75">
      <h4 className="text-secondary">Please select date and time</h4>
      <input type="date" onSelect={captureDate}></input>

      <select id="mySelect" className="m-2 p-1" onChange={captureTime}>
        <option defaultValue disabled>10:00 to 11:00</option>
        <option  type="text" value="11:00 to 12:00">11:00 to 12:00</option>
        <option value="12:00 to 13:00">12:00 to 13:00</option>
        <option value="13:00 to 14:00">13:00 to 14:00</option>
      </select>
  
   <div className="row my-4">
     <p>Date picked: {date}</p>
     <p>Time picked: {time}</p>
   </div>
   </div>
   </>
  );
}

export default App;
