import Head from 'next/head';
import Header from '../components/Header';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import { title } from '../data/community.json';

const Community = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} />
      <h2>Social Media</h2>
      <Icon type="people" color="red" />
    </Layout>
  </>
);

export default Community;
