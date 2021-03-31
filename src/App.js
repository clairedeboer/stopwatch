import React, { useState, useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(parseFloat("0.00"));
  const [minutes, setMinutes] = useState(0);
  const [spanse, setSpanse] = useState(0); 
  //get start value to show up as 0.00, 1.00, 2.00 . . . 
  //update every 100th of a second
  //what does it mean when you return a function from a useEffect

  const handleStart = () => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000)
    setSpanse(interval); 
    console.log('start', spanse)
  };

  const handleStop = () => {
    setSeconds(0);
    clearInterval(spanse);
    console.log('stop', spanse)
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds => seconds + 1)
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  

  return (
    <div>
      <header>{seconds} seconds have elapsed </header>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

//once seconds get to 60, change minutes to +1 and reset seconds to 00

export default App;
