import PropTypes from 'prop-types';
import { GraphQLClient, gql } from 'graphql-request';
// import useSWR from 'swr';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Jumbotron from 'src/components/Jumbotron';
import TabList from 'src/components/TabList';
import Cta from 'src/components/Cta';
import ArticleList from 'src/components/ArticleList';
import EventList from 'src/components/EventList';
import FeatureSection from 'src/components/FeatureSection';
import {
  title,
  overview,
  description,
  jumbotron,
  projectsSection,
  peopleSection,
  communitySection,
  eventsSection,
  blogSection,
} from '../data/home.json';
import { eventList } from '../data/events.json';
import { affiliates } from '../data/community.json';
import { blogList } from '../data/blog.json';
import { projects } from '../data/projects.json';

export async function getStaticProps() {
  const site_stats = await fetch("https://osstats.opensource.comcast.net/site-stats")
    .then(response => response.json());
  return {
    props: {
      comcastGithubIo: site_stats.repository,
    }
  };
}

const Home = ({ comcastGithubIo }) => {
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
    if (hoursAgo >= 24) {
      time = Math.floor(hoursAgo / 24);
      return <><strong>{time}</strong> day{plural(time)} ago</>;
    }
    return <><strong>{hoursAgo}</strong> hour{plural(hoursAgo)} ago</>;
  };
  // if (error) {
  //   return <p>ERROR</p>;
  // }
  // if (!comcastGithubIo) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={overview || description} />
        <meta rel="canonical" content="https://comcast.github.io/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://comcast.github.io/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={overview || description} />
        <meta property="og:image" content={`${process.env.ASSET_PREFIX}/images/favicon/android-chrome-512x512.png`} />

        {/* <meta name="twitter:card" content="summary" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comcast" />
        <meta name="twitter:creator" content="@comcast" />
        <meta name="twitter:image" content={`${process.env.ASSET_PREFIX}/images/favicon/android-chrome-512x512.png`} />
        <meta name="twitter:image:alt" content={title} />
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
              <h3>
                <strong>
                  {comcastGithubIo.mentionableUsers.totalCount}
                </strong>
              </h3>
              <p>users involved</p>
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
              <p />
            </div>
            <div className="bug">
              <h3>Tags</h3>
              <p>{comcastGithubIo.repositoryTopics.edges.map((topic, index) => (`${topic.node.topic.name}${index < comcastGithubIo.repositoryTopics.edges.length - 1 ? ', ' : ''}`))}</p>
            </div>
          </FeatureSection>
        </section>
        <section className="repo">
          <h2 id="projects">{projectsSection.title}</h2>
          <TabList items={projects.featuredProjects.list
            .sort((a, b) => new Date(a.date) - new Date(b.date))}
          />
          <Cta type="chip" color="yellow" label={projectsSection.cta.label} url={projectsSection.cta.url} />
          <hr className="rainbowSegment" />
        </section>
        <section>
          <h2 id="people">{peopleSection.title}</h2>
          {peopleSection.blurb && <p>{peopleSection.blurb}</p>}
          <Cta type="avatar" color="orange" label={peopleSection.cta.label} url={peopleSection.cta.url} />
        </section>
        <section>
          <h2 id="community">{communitySection.title}</h2>
          {communitySection.blurb && <p>{communitySection.blurb}</p>}
          <Cta type="people" color="red" label={communitySection.cta.label} url={communitySection.cta.url} />
          <FeatureSection
            title={communitySection.feature.title}
            description={communitySection.feature.description}
            color={communitySection.feature.color}
            link={communitySection.feature.link.label}
            url={communitySection.feature.link.url}
          >
            {affiliates.list
              .slice(0, 3)
              .map((item) => <div className="{item}" key={item.url}><img src={`${process.env.ASSET_PREFIX}${item.image}`} alt="" /><p><a href={item.url}>{item.title}</a></p></div>)}
          </FeatureSection>
        </section>
        <section>
          <h2 id="events">{eventsSection.title}</h2>
          {eventsSection.blurb && <p>{eventsSection.blurb}</p>}
          <EventList content={eventList
            .filter((a) => new Date(a.end) >= Date.parse(new Date()))
            .sort((a, b) => new Date(a.end) - new Date(b.end))
            .slice(0, 1)}
          />
          <Cta type="calendar" color="purple" label={eventsSection.cta.label} url={eventsSection.cta.url} />
        </section>
        <section>
          <h2 id="posts">{blogSection.title}</h2>
          {blogSection.blurb && <p>{blogSection.blurb}</p>}
          <ArticleList content={blogList
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, blogSection.featureCount)}
          />
          <Cta type="messages" color="blue" label={blogSection.cta.label} url={blogSection.cta.url} />
        </section>
      </Layout>
    </>
  );
};

Home.propTypes = {
  comcastGithubIo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    updatedAt: PropTypes.string,
    url: PropTypes.string,
    licenseInfo: PropTypes.shape({ name: PropTypes.string }),
    mentionableUsers: PropTypes.shape({ totalCount: PropTypes.number }),
    commit: PropTypes.shape({
      history: PropTypes.shape({
        totalCount: PropTypes.number,
      }),
    }),
    repositoryTopics: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          topic: PropTypes.shape({ name: PropTypes.string }),
        }),
      })),
    }),
  }),
  // error: PropTypes.object,
};

export default Home;
