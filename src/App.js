import React, { useState, useEffect } from "react";

const App = () => {
  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [spanse, setSpanse] = useState(0);
  //get start value to show up as 0.00, 1.00, 2.00 . . .
  //update every 100th of a second
  //what does it mean when you return a function from a useEffect

  // 100 centiseconds = 1 second
  // centiseconds shouldn't go up past 100
  const handleStart = () => {
    const interval = setInterval(() => {
      setCentiseconds((centiseconds) => {
        if (centiseconds < 100) {
          return centiseconds + 1;
        } else {
          return 0
        }
      });
    }, 10);
    setSpanse(interval);
  };

  const handleStop = () => {
    setSeconds(0);
    clearInterval(spanse);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds => seconds + 1)
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <header>
        00:00.{centiseconds}
      </header>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

//once seconds get to 60, change minutes to +1 and reset seconds to 00

export default App;
