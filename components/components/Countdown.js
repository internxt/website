import React, { useEffect } from 'react';

const Countdown = ({ textColor, dt }) => {
  const DAYS = 24 * 3600 * 1000;

  const countdowns = [
    {
      id: 'mcReset',
      timestamp: new Date('Oct 11, 2019 20:00:00').getTime(),
      interval: 2 * DAYS,
    },
  ];

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
      document.querySelector(`#${id} .hours`).innerHTML = hours < 10 && days > 0 ? `0${hours}` : hours;
      document.querySelector(`#${id} .minutes`).innerHTML =
        minutes < 10 && hours > 0 && days > 0 ? `0${minutes}` : minutes;
      document.querySelector(`#${id} .seconds`).innerHTML =
        seconds < 10 && minutes > 0 && hours > 0 && days > 0 ? `0${seconds}` : seconds;
    }

    timer = setInterval(showRemaining, 1000);
  }

  useEffect(() => {
    if (dt) {
      CountDownTimer('countdown');
    } else {
      setInterval(() => {
        const now = new Date().getTime();
        countdowns.forEach((c) => {
          while (c.timestamp < now) c.timestamp += c.interval; // set target to future date
          const tSecs = Math.floor((c.timestamp - now) / 1000);
          const secs = tSecs % 60;
          const tMins = (tSecs - secs) / 60;
          const mins = tMins % 60;
          const tHours = (tMins - mins) / 60;
          const hours = tHours % 24;
          const days = (tHours - hours) / 24;
          document.getElementById('days').innerHTML = days < 10 ? `0${days}` : days;
          document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}` : hours;
          document.getElementById('minutes').innerHTML = mins < 10 ? `0${mins}` : mins;
          document.getElementById('seconds').innerHTML = secs < 10 ? `0${secs}` : secs;
        });
      }, 1000);
    }
  });

  return (
    <div id="countdown" className={`flex text-${textColor}`}>
      <div className="flex flex-row items-end space-x-2 text-2xl">
        <div id={'days'} className={`days delay-350  font-semibold transition-colors duration-150`}>
          02
        </div>
        <p className={` font-semibold`}> : </p>
        <div id={'hours'} className={`hours delay-350  font-semibold transition-colors duration-150`}>
          00
        </div>
        <p className={`font-semibold`}>:</p>
        <div id={'minutes'} className={`minutes delay-350 font-semibold transition-colors duration-150`}>
          00
        </div>
        <p className={`font-semibold`}>:</p>
        <div id={'seconds'} className={`seconds delay-350 font-semibold transition-colors duration-150`}>
          00
        </div>
      </div>
    </div>
  );
};

export default Countdown;
