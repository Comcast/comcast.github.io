import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  countdown as countdownStyle,
  column,
} from './style.module.css';

const Countdown = ({ start, end }) => {
  const getTimeLeft = (timestamp) => {
    const total = Date.parse(timestamp) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const displayBoard = (s, e) => {
    let string = <p>This event has passed.</p>;
    if (getTimeLeft(s).total >= 0 && getTimeLeft(e).total >= 0) {
      string = (
        <>
          <span className={column}><strong>{getTimeLeft(s).days}</strong> days</span>
          <span className={column}><strong>{getTimeLeft(s).hours}</strong> hours</span>
          <span className={column}><strong>{getTimeLeft(s).minutes}</strong> minutes</span>
          <span className={column}><strong>{getTimeLeft(s).seconds}</strong> seconds</span>
        </>
      );
    }
    if (getTimeLeft(s).total <= 0 && getTimeLeft(e).total >= 0) {
      string = <p>This event is going on now!</p>;
    }
    return string;
  };

  const [countdown, setCountdown] = useState(start);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setCountdown(getTimeLeft(countdown).seconds - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className={countdownStyle}>
      {displayBoard(start, end)}
    </div>
  );
};

export default Countdown;

Countdown.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
