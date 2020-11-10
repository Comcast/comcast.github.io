import PropTypes from 'prop-types';
import Countdown from '../Countdown';

import {
  eventList,
  event,
  eventInfo,
  eventTitle,
  link,
  eventDescription,
  eventDate,
  location as locationStyle,
} from './style.module.css';

const monthLongName = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const dateString = (firstDate, lastDate, firstMonth, lastMonth, firstYear, lastYear) => {
  if (firstYear !== lastYear) {
    return `${monthLongName[firstMonth]} ${firstDate}, ${firstYear}-${monthLongName[lastMonth]} ${lastDate}, ${lastYear}`;
  }
  if (firstMonth !== lastMonth) {
    return `${monthLongName[firstMonth]} ${firstDate}-${monthLongName[lastMonth]} ${lastDate}, ${firstYear}`;
  }
  if (firstDate !== lastDate) {
    return `${monthLongName[firstMonth]} ${firstDate}-${lastDate}, ${firstYear}`;
  }
  return `${monthLongName[firstMonth]} ${firstDate}, ${firstYear}`;
};

const EventList = ({ content }) => {
  const events = content.map(({
    title,
    description,
    location,
    start,
    end,
    url,
  }) => {
    const first = new Date(start);
    const last = new Date(end);
    const beginString = dateString(
      first.getDate(),
      last.getDate(),
      first.getMonth(),
      last.getMonth(),
      first.getFullYear(),
      last.getFullYear(),
    );

    const locality = (l) => `${l.city}, ${l.state}, ${l.country}`;

    const place = (l) => (l.online
      ? <span className={locationStyle}><a className={link} href={url}>online</a></span>
      : <> in <a className={link} href={url}>{locality(l)}</a></>
    );

    return (
      <article className={event} key={`events${title}`}>
        <div className={eventInfo}>
          <a className={link} href={url}>
            <h3 className={eventTitle}>{title}</h3>
          </a>
          <p className={eventDate}>{beginString} {place(location)}</p>
          <p className={eventDescription}>{description}</p>
          <Countdown start={start} end={end} />
        </div>
      </article>
    );
  });

  return (
    <section className={eventList}>
      {events}
    </section>
  );
};

export default EventList;

EventList.propTypes = {
  content: PropTypes.arrayOf.isRequired,
};
