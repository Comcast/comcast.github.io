import PropTypes from 'prop-types';
import ArticleItem from 'src/components/ArticleItem';
import Profile from 'src/components/Profile';

import {
  conference,
  card,
  overview,
  speakerList,
} from './style.module.css';

const Event = ({ events, talks, speakers }) => (
  <>
    {
      events.map((event) => {
        const backgroundImage = `linear-gradient(0deg, #000c 0%, #0006 100%), url(${process.env.ASSET_PREFIX}${event.image})`;
        const keynote = talks.filter((talk) => talk.title === event.keynote);
        const selectedTalks = talks.filter((talk) => event.specificTalks.includes(talk.title));

        return (
          <article className={conference} style={{ backgroundImage }} key={event.title}>
            <h2 id="conference" className="section__title">{event.title}: {event.confTopic}</h2>
            <section className={card}>
              <p className={overview}>{event.openingRemarksOverview}</p>
              <p>{event.openingRemarksDescription}</p>
            </section>
            {keynote.length > 0 && <h3>Keynote</h3> }
            {keynote.map((talk) => (
              <article key={`keynote_${talk.title}`} className={card}>
                <ArticleItem
                  title={talk.title}
                  author={talk.author}
                  description={talk.description}
                  date={talk.date}
                  image={talk.image}
                  url={talk.url}
                  defaultImage={event.image}
                />
              </article>
            ))}
            {selectedTalks.length > 0 && <h3>Topic Talks</h3> }
            {selectedTalks.map((talk) => (
              <div key={`talks_${talk.title}`} className={card}>
                <ArticleItem
                  title={talk.title}
                  author={talk.author}
                  description={talk.description}
                  date={talk.date}
                  image={talk.image}
                  url={talk.url}
                  defaultImage={event.image}
                />
              </div>
            ))}
            { speakers.length > 0 && <h3>Profiles</h3> }
            <section className={`${speakerList} profiles`}>
              {speakers.map((speaker) => (
                <Profile key={`speakers_${speaker.name}`} person={speaker} defaultImage={event.image} />
              ))}
            </section>
          </article>
        );
      })
    }
  </>
);

export default Event;

Event.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    specificTalks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  })).isRequired,
  talks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  speakers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    bio: PropTypes.string,
    connect: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  })).isRequired,
};
