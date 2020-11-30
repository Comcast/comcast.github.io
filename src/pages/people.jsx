import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import ArticleList from 'src/components/ArticleList';
import {
  title,
  overview,
  description,
  featuredImage,
  talksTitle,
  talks,
} from 'src/data/people.json';

const People = () => (
  <>
    <Head>
      <title>{title} of Open Source Software at Comcast</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} image={featuredImage} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
      </section>
      <section>
        <h2>Winter 2020</h2>
        <h3>The Open Source Cloud</h3>
        <h4>Speakers</h4>
        <ul>
          <li>Speaker 1</li>
          <li>Speaker 2</li>
          <li>Speaker 3</li>
          <li>Speaker 4</li>
          <li>Speaker 5</li>
        </ul>
        <h4>Keynote</h4>
        <p>Keynote Presentation</p>
        <h4>Topic Talks</h4>
        <ul>
          <li>Talk 1</li>
          <li>Talk 2</li>
          <li>Talk 3</li>
        </ul>
      </section>
      <section>
        <h2>{talksTitle}</h2>
        <ArticleList content={talks
          .sort((a, b) => new Date(b.date) - new Date(a.date))}
        />
      </section>
    </Layout>
  </>
);

export default People;
