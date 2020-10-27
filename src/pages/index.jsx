import Head from 'next/head';
import Jumbotron from '../components/Jumbotron';
import Icon from '../components/Icon';
import { title, overview, description } from '../data/home.json';

const Home = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Jumbotron title={title} />
    <p className="overview">{overview}</p>
    <p>{description}</p>
    <h2>Featured Projects</h2>
    <Icon type="atom" color="yellow" />
    <h2>Featured People</h2>
    <Icon type="avatar" color="orange" />
    <h2>Featured Community</h2>
    <Icon type="people" color="red" />
    <h2>Featured Events</h2>
    <Icon type="calendar" color="purple" />
    <h2 id="featured_posts">Latest Blog Posts</h2>
    <Icon type="messages" color="blue" />
  </>
);

export default Home;
