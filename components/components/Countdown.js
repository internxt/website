import React, { useState, useEffect } from 'react';

const Countdown = ({ dt, textColor }) => {
  const [countdownDisableDays, setCountdownDisableDays] = useState(false);
  const [countdownDisableHours, setCountdownDisableHours] = useState(false);
  const [countdownDisableMinutes, setCountdownDisableMinutes] = useState(false);
  const [countdownDisableSeconds, setCountdownDisableSeconds] = useState(false);

  function CountDownTimer(id) {
    const end = new Date(dt);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    let timer;

    function showRemaining() {
      const now = new Date();
      const distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        setCountdownDisableDays(false);
        setCountdownDisableHours(false);
        setCountdownDisableMinutes(false);
        setCountdownDisableSeconds(false);
        return;
      }
      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      if (days === 0) setCountdownDisableDays(true);
      if (hours === 0 && days === 0) setCountdownDisableHours(true);
      if (minutes === 0 && hours === 0 && days === 0) setCountdownDisableMinutes(true);
      if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) setCountdownDisableSeconds(true);

      document.querySelector(`#${id} .days`).innerHTML = days < 10 ? `0${days}` : days;
      document.querySelector(`#${id} .hours`).innerHTML = hours < 10 ? `0${hours}` : hours;
      document.querySelector(`#${id} .minutes`).innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      document.querySelector(`#${id} .seconds`).innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }

    timer = setInterval(showRemaining, 1000);
  }

  useEffect(() => {
    CountDownTimer('countdown');
  });

  return (
    <div id="countdown" className={`flex text-${textColor}`}>
      <div className="flex flex-row items-end space-x-2 text-2xl">
        <p
          className={`days delay-350 
            
           font-semibold transition-colors duration-150`}
        >
          00
        </p>
        <p className={` font-semibold`}> : </p>
        <p className={`hours delay-350  font-semibold transition-colors duration-150`}>00</p>
        <p className={` font-semibold`}>:</p>
        <p className={`minutes delay-350  font-semibold transition-colors duration-150`}>00</p>
        <p className={` font-semibold`}>:</p>
        <p className={`seconds delay-350  font-semibold transition-colors duration-150`}>00</p>
      </div>
    </div>
  );
};

export default Countdown;
