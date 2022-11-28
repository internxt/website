import React, { useState, useEffect } from 'react';

const Countdown = ({ dt }) => {
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

      document.querySelector(`#${id} .days`).innerHTML = days;
      document.querySelector(`#${id} .hours`).innerHTML = hours < 10 && days > 0 ? `0${hours}` : hours;
      document.querySelector(`#${id} .minutes`).innerHTML =
        minutes < 10 && hours > 0 && days > 0 ? `0${minutes}` : minutes;
      document.querySelector(`#${id} .seconds`).innerHTML =
        seconds < 10 && minutes > 0 && hours > 0 && days > 0 ? `0${seconds}` : seconds;
    }

    timer = setInterval(showRemaining, 1000);
  }

  useEffect(() => {
    CountDownTimer('countdown');
  });

  return (
    <div id="countdown" className="flex text-white">
      <div className="flex flex-row items-end space-x-1 text-2xl">
        <p
          className={`days font-semibold ${
            countdownDisableDays ? 'text-transparent' : 'text-white'
          } delay-350 transition-colors duration-150`}
        >
          0
        </p>
        <p className={`${countdownDisableDays ? 'text-transparent' : 'text-white'} font-semibold`}> : </p>
        <p
          className={`hours font-semibold ${
            countdownDisableHours ? 'text-transparent' : 'text-white'
          } delay-350 transition-colors duration-150`}
        >
          0
        </p>
        <p className={`${countdownDisableHours ? 'text-transparent' : 'text-white'} font-semibold`}>:</p>
        <p
          className={`minutes font-semibold ${
            countdownDisableMinutes ? 'text-transparent' : 'text-white'
          } delay-350 transition-colors duration-150`}
        >
          0
        </p>
        <p className={`${countdownDisableMinutes ? 'text-transparent' : 'text-white'} font-semibold`}>:</p>
        <p
          className={`seconds font-semibold ${
            countdownDisableSeconds ? 'text-transparent' : 'text-white'
          } delay-350 transition-colors duration-150`}
        >
          0
        </p>
      </div>
    </div>
  );
};

export default Countdown;
