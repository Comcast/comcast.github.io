import Head from 'next/head';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Cta from '../components/Cta';
import Carousel from '../components/Carousel';
import ArticleList from '../components/ArticleList';
import FeatureSection from '../components/FeatureSection';
import {
  title,
  overview,
  description,
  jumbotron,
  featuredProjects,
} from '../data/home.json';
import { blogList } from '../data/blog.json';

const Home = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Jumbotron items={jumbotron} />
      <section>
        <p className="overview">{overview}</p>
        <p>{description}</p>
        <FeatureSection image="/comcast_open_source_profile.svg" alt="Comcast Open Source Site Details">
          <ul>
            <li>Github Repo: <a href="https://github.com/Comcast/Comcast.github.io">Comcast.github.io</a></li>
            <li>Last Updated: 6 days ago (2020-11-11)</li>
            <li>Number of contributors: 70</li>
            <li>Number of commits: 712 commits</li>
            <li>License: Apache-2.0 License</li>
            <li>Tags: portal, floss, open-source, comcast, html, css, js, hacktoberfest</li>
          </ul>
        </FeatureSection>
      </section>
      <section>
        <h2>Featured Projects</h2>
        <Carousel items={featuredProjects} />
        <Cta type="atom" color="yellow" label="Browse through the Comcast Open Source Projects" url="/projects" />
        <hr className="rainbowSegment" />
      </section>
      <section>
        <h2>Featured People</h2>
        <p>Our people who speak on the subject of Open Source and Open Source technologies.</p>
        [PeopleCarousel?]
        <Cta type="avatar" color="orange" label="Meet our people" url="/people" />
      </section>
      <section>
        <h2>Community Involvement</h2>
        <p>
          Catch up with us &mdash; at events, online, and on social media &mdash;
          to ask us about what we&rsquo;re doing to support the Open Source community.
        </p>
        <Cta type="people" color="red" label="[Action] our contributions to the Open Source community" url="/community" />
        <FeatureSection title="Affiliates" description="Comcast is proud to support a variety of organizations in the Open Source community." link="View the complete list of Open Source affiliates" url="/community#affiliates">
          <div className="{item}"><img src="/images/_default-hero.jpg" alt="" /><p><a href="https://www.apache.org/">Apache</a></p></div>
          <div className="{item}"><img src="/images/_default-hero.jpg" alt="" /><p><a href="https://www.cloudfoundry.org/">Cloud Foundry</a></p></div>
          <div className="{item}"><img src="/images/_default-hero.jpg" alt="" /><p><a href="https://www.cncf.io/">Cloud Native Computing Foundation</a></p></div>
        </FeatureSection>
      </section>
      <section>
        <h2>Upcoming Events</h2>
        <p>
          Upcoming Open Source events and events where we&rsquo;ll
          be discussing Open Source technologies, standards, and the philosophy of Open Source.
        </p>
        [Calendar?]
        <Cta type="calendar" color="purple" label="See the entire list of Events" url="/events" />
      </section>
      <section>
        <h2 id="featured_posts">Latest Blog Posts</h2>
        <ArticleList content={blogList.slice(0, 3)} />
        <Cta type="messages" color="blue" label="Read the Comcast Open Source Blog posts" url="/blog" />
      </section>
    </Layout>
  </>
);

export default Home;
