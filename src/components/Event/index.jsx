import PropTypes from 'prop-types';
import ArticleItem from 'src/components/ArticleItem';
import Profile from 'src/components/Profile';

import {
  conference,
  card,
  overview,
  speakerList,
} from './style.module.css';

const Event = ({ events, talks, speakers }) => {
  console.log('...');

  return (
    <>
      {
        events.map((event) => {
          const backgroundImage = `linear-gradient(0deg, #000c 0%, #0006 100%), url(${process.env.ASSET_PREFIX}${event.image})`;
          const keynote = talks.filter((talk) => talk.title === event.keynote);
          const selectedTalks = talks.filter((talk) => event.specificTalks.includes(talk.title));
          const selectedSpeakers = speakers.filter((speaker) => (
            selectedTalks.map((talk) => talk.author.includes(speaker.name)).includes(true)
          ));

          return (
            <article className={conference} style={{ backgroundImage }}>
              <h2 id="conference" className="section__title">{event.title}: {event.confTopic}</h2>
              <section className={card}>
                <p className={overview}>{event.openingRemarksOverview}</p>
                <p>{event.openingRemarksDescription}</p>
              </section>
              <h3>Keynote</h3>
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
              <h3>Topic Talks</h3>
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
              <h3>Speakers</h3>
              <section className={`${speakerList} profiles`}>
                {selectedSpeakers.map((speaker) => (
                  <Profile person={speaker} defaultImage={event.image} />
                ))}
              </section>
            </article>
          );
        })
      }
    </>
  );
};

export default Event;

Event.propTypes = {
  events: PropTypes.arrayOf.isRequired,
  talks: PropTypes.arrayOf.isRequired,
  speakers: PropTypes.arrayOf.isRequired,
};
