/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { GraphQLClient, gql } from 'graphql-request';
// import useSWR from 'swr';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Jumbotron from 'src/components/Jumbotron';
import Cta from 'src/components/Cta';
import Carousel from 'src/components/Carousel';
import SuperButton from 'src/components/SuperButton';
import ArticleList from 'src/components/ArticleList';
import EventList from 'src/components/EventList';
import FeatureSection from 'src/components/FeatureSection';
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

const API_ENDPOINT = 'https://api.github.com/graphql';

export async function getStaticProps() {
  const graphQLClient = new GraphQLClient(API_ENDPOINT, {
    headers: {
      authorization: 'Bearer 46bf392d999b9d9f133b24a2d9e6677aa5ce109b',
    },
  });

  const query = gql`
  {
    repository(name: "Comcast.github.io", owner: "comcast") {
      name
      description
      updatedAt
      description
      url
      licenseInfo {
        name
      }
      # REQUIRES ADDITIONAL PERMISSIONS
      # collaborators {
      #   totalCount
      # }
      commit: object(expression:"main") {
        ... on Commit {
          history {
            totalCount
          }
        }
      }
      repositoryTopics(first: 20) {
        totalCount
        edges {
          node {
            topic {
              name
            }
          }
        }
      }
    }
  }`;

  const data = await graphQLClient.request(query);

  return {
    props: {
      comcastGithubIo: data.repository,
      error: data.error || '',
    },
  };
}

const Home = ({ comcastGithubIo, error }) => {
  // const { data, data: repository, error } = useSWR(comcastGithubQuery, fetcher);
  const plural = (number) => (number > 1 ? 's' : '');
  const ago = (timestamp) => {
    const now = new Date();
    const then = new Date(timestamp);
    const hoursAgo = Math.floor((now - then) / 1000 / 60 / 60);
    let time = hoursAgo;
    if (hoursAgo >= 24 * 365) {
      time = Math.floor(hoursAgo / 24 / 365);
      return (
        <>
          <strong>{time}</strong> year{plural(time)} ago
        </>
      );
    }
    if (hoursAgo >= 24 * 31) {
      time = Math.floor(hoursAgo / 24 / 31);
      return (
        <>
          <strong>{time}</strong> month{plural(time)} ago
        </>
      );
    }
    if (hoursAgo >= 1) {
      time = Math.floor(hoursAgo / 24);
      return <><strong>{time}</strong> day{plural(time)} ago</>;
    }
    return <><strong>{hoursAgo}</strong> hour{plural(hoursAgo)} ago</>;
  };
  if (error) {
    return <p>ERROR</p>;
  }
  if (!comcastGithubIo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
        <meta property="og:image" content={`${process.env.ASSET_PREFIX}/comcast_open_source_profile.svg`} />
      </Head>
      <Layout>
        <Jumbotron items={jumbotron} />
        <section>
          <section>
            {overview && <p className="overview">{overview}</p>}
            {description && <p>{description}</p>}
          </section>
          <FeatureSection image="/comcast_open_source_profile.svg" alt="Comcast Open Source Site Details" color="mercury">
            <div className="bug">
              <h3>GitHub Repo</h3>
              <p><a href={comcastGithubIo.url}>{comcastGithubIo.name}</a></p>
            </div>
            <div className="bug">
              <h3>{ago(comcastGithubIo.updatedAt)}</h3>
              <p>last updated</p>
            </div>
            <div className="bug">
              <h3><strong>42</strong></h3>
              <p>contributors</p>
            </div>
            <div className="bug">
              <h3><strong>{comcastGithubIo.commit.history.totalCount}</strong></h3>
              <p>commits</p>
            </div>
            <div className="bug">
              <h3>Aug 23 <strong>2017</strong></h3>
              <p>initial launch</p>
            </div>
            <div className="bug">
              <h3>{comcastGithubIo.licenseInfo.name}</h3>
              <p>license</p>
            </div>
            <div className="bug">
              <h3>Tags</h3>
              <p>comcast, css, floss, hacktoberfest, html, js, open-source, portal</p>
            </div>
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
          <FeatureSection title="Affiliates" description="Comcast is proud to support a variety of organizations in the Open Source community." color="blue" link="View the complete list of Open Source affiliates" url="/community#affiliates">
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
};

Home.propTypes = {
  comcastGithubIo: PropTypes.object,
  error: PropTypes.object,
};

export default Home;
