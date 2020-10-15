import Head from 'next/head';
import Header from 'src/components/Header';
import Layout from 'src/components/Layout';
import EventList from 'src/components/EventList';
import {
  title,
  overview,
  description,
  featuredImage,
  color,
  upcomingTitle,
  pastTitle,
  eventList,
} from 'src/data/events.json';

const Events = () => (
  <>
    <Head>
      <title>{title} of Open Source Software at Comcast</title>
      <meta name="description" content={overview || description} />
      <meta rel="canonical" content="https://comcast.github.io/" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://comcast.github.io/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={overview || description} />
      <meta property="og:image" content={`${process.env.ASSET_PREFIX}${featuredImage}`} />

      {/* <meta name="twitter:card" content="summary" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@comcast" />
      <meta name="twitter:creator" content="@comcast" />
      <meta name="twitter:image" content={`${process.env.ASSET_PREFIX}${featuredImage}`} />
      <meta name="twitter:image:alt" content={title} />
    </Head>
    <Layout>
      <Header title={title} image={featuredImage} color={color} />
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
