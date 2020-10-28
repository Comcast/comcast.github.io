import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { title } from '../data/blog.json';

const Blog = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} />
      <h2>Section Header</h2>
    </Layout>
  </>
);

export default Blog;
