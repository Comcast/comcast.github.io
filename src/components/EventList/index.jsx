import PropTypes from 'prop-types';
import Countdown from 'src/components/Countdown';
import { dateSpan } from 'src/shared/dateSpan';

import {
  eventList,
  event,
  eventInfo,
  eventTitle,
  link,
  eventDescription,
  eventDate,
  daysAway,
  location as locationStyle,
} from './style.module.css';

const EventList = ({ content }) => {
  const events = content.map(({
    title,
    description,
    location,
    start,
    end,
    url,
  }) => {
    const now = Date.parse(new Date());
    const until = Date.parse(start);
    const first = new Date(start);
    const last = new Date(end);
    const beginString = dateSpan(first, last);

    const locality = (l) => `${l.city}, ${l.state}, ${l.country}`;

    const place = (l) => (l.online
      ? <span className={locationStyle}><a className={link} href={url}>online</a></span>
      : <> in <a className={link} href={url}>{locality(l)}</a></>
    );

    return (
      <article className={event} key={`events${title}`}>
        <div className={eventInfo}>
          <header>
            <div>
              <h3 className={eventTitle}><a className={link} href={url}>{title}</a></h3>
              <p className={eventDate}>{beginString} {place(location)}</p>
            </div>
            {((until - now) / 1000 / 60 / 60 / 24) > 90
              && (
                <div className={daysAway}>
                  <strong>{Math.round(((until - now) / 1000 / 60 / 60 / 24))}</strong> days away
                </div>
              )}
          </header>
          <p className={eventDescription}>{description}</p>
          {((until - now) / 1000 / 60 / 60 / 24) < 90 && <Countdown start={start} end={end} />}
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
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.shape({
      online: PropTypes.bool,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};
