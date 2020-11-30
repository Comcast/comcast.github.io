import Head from 'next/head';
import Header from 'src/components/Header';
import Layout from 'src/components/Layout';
import EventList from 'src/components/EventList';
import {
  title,
  overview,
  description,
  upcomingTitle,
  pastTitle,
  eventList,
} from 'src/data/events.json';

const Events = () => (
  <>
    <Head>
      <title>{title} of Open Source Software at Comcast</title>
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
          .sort((a, b) => new Date(b.end) - new Date(a.end))}
        />
      </section>
    </Layout>
  </>
);

export default Events;
