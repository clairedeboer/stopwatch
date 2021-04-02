import React, { useState } from "react";

const App = () => {
  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [centiSpanse, setCentiSpanse] = useState(0);
  const [secSpanse, setSecSpanse] = useState(0);
  const [minSpanse, setMinSpanse] = useState(0);

  const handleStart = () => {
    const centiInterval = setInterval(() => {
      setCentiseconds((centiseconds) => {
        if (centiseconds < 100) {
          return centiseconds + 1;
        } else {
          return 0;
        }
      });
    }, 10);
    setCentiSpanse(centiInterval);

    const secInterval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds < 60) {
          return seconds + 1;
        } else {
          return 0;
        }
      });
    }, 1000);
    setSecSpanse(secInterval);

    const minInterval = setInterval(() => {
      setMinutes((minutes) => minutes + 1);
    }, 60000);
    setMinSpanse(minInterval);
  };

  const handleStop = () => {
    setCentiseconds(0);
    setSeconds(0);
    setMinutes(0);
    clearInterval(centiSpanse);
    clearInterval(secSpanse);
    clearInterval(minSpanse);
  };

  return (
    <div>
      <header>
        <MinutesDisplay minutes={minutes} />
        <SecondsDisplay seconds={seconds} />
        <CentisecondsDisplay centiseconds={centiseconds} />{" "}
      </header>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

const MinutesDisplay = ({ minutes }) => {
  return <span>{minutes < 10 ? `0${minutes}` : minutes}:</span>;
};

const SecondsDisplay = ({ seconds }) => {
  return <span>{seconds < 10 ? `0${seconds}` : seconds}.</span>;
};

const CentisecondsDisplay = ({ centiseconds }) => {
  return <span>{centiseconds < 10 ? `0${centiseconds}` : centiseconds} </span>;
};

export default App;
