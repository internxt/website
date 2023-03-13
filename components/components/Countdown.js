import React, { useEffect } from 'react';

const Countdown = ({ textColor }) => {
  const DAYS = 24 * 3600 * 1000;

  const countdowns = [
    {
      id: 'mcReset',
      timestamp: new Date('Oct 11, 2019 20:00:00').getTime(),
      interval: 2 * DAYS,
    },
  ];

  useEffect(() => {
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
  });

  return (
    <div id="countdown" className={`flex text-${textColor}`}>
      <div className="flex flex-row items-end space-x-2 text-2xl">
        <div id={'days'} className={`days delay-350  font-semibold transition-colors duration-150`}>
          -
        </div>
        <p className={` font-semibold`}> : </p>
        <div id={'hours'} className={`hours delay-350  font-semibold transition-colors duration-150`}>
          -
        </div>
        <p className={`font-semibold`}>:</p>
        <div id={'minutes'} className={`minutes delay-350 font-semibold transition-colors duration-150`}>
          -
        </div>
        <p className={`font-semibold`}>:</p>
        <div id={'seconds'} className={`seconds delay-350 font-semibold transition-colors duration-150`}>
          -
        </div>
      </div>
    </div>
  );
};

export default Countdown;
