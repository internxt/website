import React, { useEffect, useState } from 'react';

interface CountdownProps {
  textColor?: string;
  dt?: string;
  textFont?: string;
  textHeight?: string;
  isComeback?: boolean;
}

const DAYS = 24 * 3600 * 1000;

const Countdown: React.FC<CountdownProps> = ({
  textColor,
  dt,
  textFont = 'font-semibold',
  textHeight = 'text-2xl',
  isComeback = false,
}) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const countdowns = [
    {
      id: 'mcReset',
      timestamp: new Date('Oct 11, 2019 00:00:00').getTime(),
      interval: DAYS,
    },
  ];

  const CountDownTimer = () => {
    const end = dt ? new Date(dt) : new Date();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    let timer: NodeJS.Timeout;

    const showRemaining = () => {
      const now = new Date();
      const distance = end.valueOf() - now.valueOf();
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    timer = setInterval(showRemaining, 1000);
    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (dt) {
      CountDownTimer();
    } else {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        countdowns.forEach((c) => {
          while (c.timestamp < now) c.timestamp += c.interval;
          const tSecs = Math.floor((c.timestamp - now) / 1000);
          const secs = tSecs % 60;
          const tMins = (tSecs - secs) / 60;
          const mins = tMins % 60;
          const tHours = (tMins - mins) / 60;
          const hours = tHours % 24;
          const days = (tHours - hours) / 24;

          setDays(days);
          setHours(hours);
          setMinutes(mins);
          setSeconds(secs);
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [dt]);

  return (
    <div className={`flex flex-row items-center gap-1 ${textHeight} ${textFont}`}>
      <div className="text-center">
        <p>{days < 10 ? `0${days}` : days}</p>
      </div>
      <p>:</p>
      <div className="text-center">
        <p>{hours < 10 ? `0${hours}` : hours}</p>
      </div>
      <p>:</p>
      <div className="text-center">
        <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
      </div>
      <p>:</p>
      <div className="text-center">
        <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
      </div>
    </div>
  );
};

export default Countdown;
