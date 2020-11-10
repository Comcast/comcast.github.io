import Head from 'next/head';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import Layout from '../components/Layout';
import {
  title,
  overview,
  description,
  affiliatesTitle,
  affiliates,
} from '../data/community.json';

const Community = () => (
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
        <h2 id="affiliates">{affiliatesTitle}</h2>
        <ArticleList content={affiliates
          .sort((a, b) => new Date(b.date) - new Date(a.date))}
        />
      </section>
    </Layout>
  </>
);

export default Community;
