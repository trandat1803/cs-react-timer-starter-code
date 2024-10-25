import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const isStart = useRef(true);
  //const [isStart, setIsStart] = useState(false);
  const active = useRef(null);
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    /*if(!isStart.current) {
      refInterval.current =setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);*/
      refInterval.current = setInterval(() => {
        if (isStart.current) {
          setTime((time) => time + 1);
        }
      }, 1000);
  //update the ref to indicate the timer is running.
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
