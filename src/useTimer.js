import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const isStart = useRef(true);
  //const [isStart, setIsStart] = useState(false);
  const active = useRef(null);
  const refInterval = useRef(0);

  const startTimer = () => {
    if(!isStart.current) {
      refInterval.current =setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      isStart.current = true;  //update the ref to indicate the timer is running.
    active.current.disabled = true;
  };
}
  const stopTimer = () => {
    clearInterval(refInterval.current);
    isStart.current = false;
    active.current.disabled = false;
  };

  const resetTimer = () => {
    clearInterval(refInterval.current);
    setTime(0);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
