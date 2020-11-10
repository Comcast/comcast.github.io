import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';
import Layout from '../components/Layout';
import {
  title,
  overview,
  description,
  featuredImage,
  talksTitle,
  talks,
} from '../data/people.json';

const People = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} image={`${process.env.ASSET_PREFIX}${featuredImage}`} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
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
