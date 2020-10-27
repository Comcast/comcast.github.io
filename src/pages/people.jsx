import Head from 'next/head';
import Header from '../components/Header';
import { title } from '../data/people.json';

const People = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Header title={title} image="/brand_photos/comcast001.jpg" />
    <h2>Contributors</h2>
    <h2>Developers</h2>
  </>
);

export default People;
