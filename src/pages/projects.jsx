import Head from 'next/head';
import Header from '../components/Header';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import { title } from '../data/projects.json';

const Projects = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} />
      <h2>Browse Comcast Open Source Projects</h2>
      <h2>Project Statistics</h2>
      <Icon type="bargraph" color="yellow" />
    </Layout>
  </>
);

export default Projects;
