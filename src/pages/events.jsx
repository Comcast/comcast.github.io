import Head from 'next/head';

import Header from '../components/Header';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import { title } from '../data/events.json';

const Events = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} />
      <h2>Section Header</h2>
      <Icon type="calendar" color="purple" />
    </Layout>
  </>
);

export default Events;
