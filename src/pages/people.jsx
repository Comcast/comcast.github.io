import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { title, featuredImage } from '../data/people.json';

const People = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} image={`${process.env.ASSET_PREFIX}${featuredImage}`} />
      <h2>Contributors</h2>
      <h2>Developers</h2>
    </Layout>
  </>
);

export default People;
