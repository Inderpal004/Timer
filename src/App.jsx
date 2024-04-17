import { useEffect, useState, useRef } from 'react';
import './App.css';
import CountDown from './Components/CountDown';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - seconds * 1000 - minutes * 60 * 1000;
      intervalRef.current = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTimeRef.current;
        const newSeconds = Math.floor((elapsedTime / 1000) % 60);
        const newMinutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const newMilliSeconds = Math.floor((elapsedTime % 1000) / 10);

        setSeconds(newSeconds);
        setMinutes(newMinutes);
        setMilliSeconds(newMilliSeconds);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleRestart = () => {
    setSeconds(0);
    setMinutes(0);
    setMilliSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className='w-full h-screen bg-sky-400 flex items-center justify-center'>
      <CountDown
        seconds={seconds}
        minutes={minutes}
        milliSeconds={milliSeconds}
        handleRestart={handleRestart}
        handleStartStop={handleStartStop}
        isRunning={isRunning}
      />
    </div>
  );
}

export default App;
