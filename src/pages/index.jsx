import Head from 'next/head';
import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Cta from '../components/Cta';
import Carousel from '../components/Carousel';
import SuperButton from '../components/SuperButton';
import ArticleList from '../components/ArticleList';
import EventList from '../components/EventList';
import FeatureSection from '../components/FeatureSection';
import {
  title,
  overview,
  description,
  jumbotron,
  projects,
  people,
  community,
  events,
  blog,
} from '../data/home.json';
import { eventList } from '../data/events.json';
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
        <section>
          {overview && <p className="overview">{overview}</p>}
          {description && <p>{description}</p>}
        </section>
        <FeatureSection image="/comcast_open_source_profile.svg" alt="Comcast Open Source Site Details">
          <div className="bug">
            <h3>GitHub Repo</h3>
            <p><a href="https://github.com/Comcast/Comcast.github.io">Comcast.github.io</a></p>
          </div>
          <div className="bug">
            <h3><strong>6</strong> days ago</h3>
            <p>last updated</p>
          </div>
          <div className="bug">
            <h3><strong>70</strong></h3>
            <p>contributors</p>
          </div>
          <div className="bug">
            <h3><strong>712</strong></h3>
            <p>commits</p>
          </div>
          <div className="bug">
            <h3>Aug 23 <strong>2017</strong></h3>
            <p>initial launch</p>
          </div>
          <div className="bug">
            <h3>Apache <strong>2.0</strong></h3>
            <p>license</p>
          </div>
          <div className="bug">
            <h3>Tags</h3>
            <p>comcast, css, floss, hacktoberfest, html, js, open-source, portal</p>
          </div>
          {/* <ul>
            <li>: </li>
            <li>License: Apache-2.0 License</li>
            <li>Tags: portal, floss, open-source, comcast, html, css, js, hacktoberfest</li>
          </ul> */}
        </FeatureSection>
      </section>
      <section>
        <h2 id="projects">{projects.title}</h2>
        {projects.feature && <Carousel items={projects.feature} />}
        <Cta type="atom" color="yellow" label={projects.cta.label} url={projects.cta.url} />
        <hr className="rainbowSegment" />
      </section>

      <SuperButton title="Kuberhealthy" image={`${process.env.ASSET_PREFIX}/images/carousel/_kuberhealthy.jpg`} />
      <SuperButton title="Trickster" image={`${process.env.ASSET_PREFIX}/images/carousel/_trickster.jpg`} />
      <SuperButton title="Vinyl DNS" image={`${process.env.ASSET_PREFIX}/images/carousel/_vinyl-dns.jpg`} />
      <SuperButton title="Traffic Control" image={`${process.env.ASSET_PREFIX}/images/carousel/_traffic_control.jpg`} />

      <section>
        <h2 id="people">{people.title}</h2>
        {people.blurb && <p>{people.blurb}</p>}
        {people.feature && '[PeopleCarousel?]'}
        <Cta type="avatar" color="orange" label={people.cta.label} url={people.cta.url} />
      </section>
      <section>
        <h2 id="community">{community.title}</h2>
        {community.blurb && <p>{community.blurb}</p>}
        {community.feature && '[CommunityFeature? Video?]'}
        <Cta type="people" color="red" label={community.cta.label} url={community.cta.url} />
        <FeatureSection title="Affiliates" description="Comcast is proud to support a variety of organizations in the Open Source community." link="View the complete list of Open Source affiliates" url="/community#affiliates">
          <div className="{item}"><img src={`${process.env.ASSET_PREFIX}/images/affiliates/apache.svg`} alt="" /><p><a href="https://www.apache.org/">Apache</a></p></div>
          <div className="{item}"><img src={`${process.env.ASSET_PREFIX}/images/affiliates/cloud_foundry.svg`} alt="" /><p><a href="https://www.cloudfoundry.org/">Cloud Foundry</a></p></div>
          <div className="{item}"><img src={`${process.env.ASSET_PREFIX}/images/affiliates/cncf.svg`} alt="" /><p><a href="https://www.cncf.io/">Cloud Native Computing Foundation</a></p></div>
        </FeatureSection>
      </section>
      <section>
        <h2 id="events">{events.title}</h2>
        {events.blurb && <p>{events.blurb}</p>}
        <EventList content={eventList
          .filter((a) => new Date(a.end) >= Date.parse(new Date()))
          .sort((a, b) => new Date(a.end) - new Date(b.end))
          .slice(0, 1)}
        />
        {events.feature && '[Calendar]'}
        <Cta type="calendar" color="purple" label={events.cta.label} url={events.cta.url} />
      </section>
      <section>
        <h2 id="posts">{blog.title}</h2>
        {blog.blurb && <p>{blog.blurb}</p>}
        <ArticleList content={blogList
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3)}
        />
        <Cta type="messages" color="blue" label={blog.cta.label} url={blog.cta.url} />
      </section>
    </Layout>
  </>
);

export default Home;
