import Head from 'next/head';

import Header from '../components/Header';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import {
  title,
  overview,
  description,
  upcomingTitle,
  pastTitle,
  eventList,
} from '../data/events.json';

const Events = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
      </section>
      <section>
        <h2>{upcomingTitle}</h2>
        <EventList content={eventList
          .filter((a) => new Date(a.end) >= Date.parse(new Date()))
          .sort((a, b) => new Date(a.end) - new Date(b.end))}
        />
      </section>
      <section>
        <h2>{pastTitle}</h2>
        <EventList content={eventList
          .filter((a) => new Date(a.end) <= Date.parse(new Date()))
          .sort((a, b) => new Date(a.end) - new Date(b.end))}
        />
      </section>
    </Layout>
  </>
);

export default Events;
