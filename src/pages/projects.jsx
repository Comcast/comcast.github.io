/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { GraphQLClient, gql } from 'graphql-request';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import NumberFigure from 'src/components/NumberFigure';
import ProjectCard from 'src/components/ProjectCard';
import ProjectMost from 'src/components/ProjectMost';
import Cta from 'src/components/Cta';
import Loader from 'src/components/Loader';
import ArticleList from 'src/components/ArticleList';
import {
  title,
  overview,
  description,
  projects,
} from 'src/data/projects.json';
import { dataTable } from 'src/shared/styles/tables.module.css';

const API_ENDPOINT = 'https://api.github.com/graphql';

export async function getStaticProps() {
  const graphQLClient = new GraphQLClient(API_ENDPOINT, {
    headers: {
      authorization: 'Bearer ***REMOVED***',
    },
  });

  const query = gql`
  {
    organization(login: "Comcast") {
      name
      description
      members: membersWithRole(first: 1) {
        totalCount
      }
      # repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {
      #   nodes {
      #     ...repoInfo
      #   }
      #   pageInfo {
      #     endCursor
      #     hasNextPage
      #   }
      # }
      # repositories(first: 100, after:100, orderBy: {field: NAME, direction: ASC}) {
      #   nodes {
      #     ...repoInfo
      #   }
      # }
      totalRepos: repositories(first: 6) {
        totalCount
      }
      newRepos: repositories(first: 6,  orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          ...repoInfo
        }
      }
      mostForked: repositories(first: 15, orderBy: {field: STARGAZERS, direction: DESC}) {
        nodes {
          ...repoInfo
        }
      }
      mostStarred: repositories(first: 10,  orderBy: {field: STARGAZERS, direction: DESC}) {
        nodes {
          ...repoInfo
        }
      }
      updatedRepos: repositories(first: 6,  orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          ...repoInfo
        }
      }
    }
    totalSourceRepos: search(query: "user:Comcast archived:false", type: REPOSITORY, first: 1) {
      repositoryCount
    }
    totalForkedRepos: search(query: "user:Comcast forks:>=1 archived:false", type: REPOSITORY, first: 1) {
      repositoryCount
      # edges {
      #   node {
      #     ... on Repository {
      #       name
      #     }
      #   }
      # }
    }
    allRepos: search(query: "user:Comcast archived:false", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            url
            description
            repositoryTopics(first: 20) {
              edges {
                node {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  fragment repoInfo on Repository {
    name
    description
    url
    forkCount
    stargazerCount
    updatedAt
    createdAt
    isArchived
  }
`;

  const data = await graphQLClient.request(query);
  console.log('GRAPHQL', JSON.stringify(data, undefined, 2));

  return {
    props: {
      allRepos: data.allRepos.edges,
      totalRepos: data.organization.totalRepos.totalCount,
      totalSourceRepos: data.totalSourceRepos.repositoryCount,
      totalForkedRepos: data.totalForkedRepos.repositoryCount,
      totalMembers: data.organization.members.totalCount,
      newRepos: data.organization.newRepos.nodes,
      updateRepos: data.organization.updatedRepos.nodes,
      mostStarred: data.organization.mostStarred.nodes
        .filter((item) => (
          item.name !== '.github'
          && !item.isArchived))
        .slice(0, 6),
      mostForked: data.organization.mostForked.nodes
        .filter((item) => (
          item.name !== '.github'
          && !item.isArchived))
        .sort((a, b) => b.forkCount - a.forkCount)
        .slice(0, 6),
    },
  };
}

const monthLongName = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${monthLongName[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const asOf = () => formatDate(new Date());

const Projects = ({
  allRepos,
  newRepos,
  updateRepos,
  mostStarred,
  mostForked,
  totalRepos,
  totalSourceRepos,
  totalForkedRepos,
  totalMembers,
}) => (
  <>
    <Head>
      <title>Open Source Software {title} at Comcast</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
      </section>
      <section>
        <h2 id="projects">{projects.title}</h2>
        {projects.description && <p>{projects.description}</p>}
        <Loader title="Loading Projects..." loaded={false} />
        <table className={dataTable}>
          <tbody>
            {allRepos.map((data) => (
              <tr>
                <th><a href={data.node.url}>{data.node.name}</a></th>
                <td>{data.node.description}</td>
                <td>{data.node.repositoryTopics.edges.map((topic, index) => (`${topic.node.topic.name}${index < data.node.repositoryTopics.edges.length - 1 ? ', ' : ''}`))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>{projects.featuredTitle}</h2>
        {projects.featuredDescription && <p>{projects.featuredDescription}</p>}
        <ArticleList content={projects.list
          .sort((a, b) => new Date(a.date) - new Date(b.date))}
        />
      </section>
      <section>
        <h2>Project Statistics</h2>
      </section>
      <section className="repo">
        <div>
          <h4>Overall Stats</h4>
          <p>as of {asOf()}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <NumberFigure color="yellow" number={totalRepos} caption="Total Public Repos" />
            <NumberFigure color="green" number={totalSourceRepos} caption="Total Source Repos" />
            <NumberFigure color="blue" number={totalForkedRepos} caption="Total Forked Repos" />
            <NumberFigure color="purple" number={totalMembers} caption="Total Members" />
          </div>
        </div>
        <Cta type="atom" color="yellow" label="View All Comcast Repos on GitHub" url="https://github.com/Comcast/" />
      </section>
      <hr className="rainbowSegment" />
      <section className="repo">
        <div>
          <h4>Most Starred</h4>
          <p>as of {asOf()}</p>
        </div>
        {mostStarred.map((data) => (
          <ProjectMost title={data.name} url={data.url} stars={data.stargazerCount} />
        ))}
      </section>
      <section className="repo">
        <div>
          <h4>Most Forked</h4>
          <p>as of {asOf()}</p>
        </div>
        {mostForked.map((data) => (
          <ProjectMost title={data.name} url={data.url} forks={data.forkCount} />
        ))}
      </section>
      <hr className="rainbowSegment" />
      <section className="repo">
        <div>
          <h4>Newest Repos</h4>
          <p>as of {asOf()}</p>
        </div>
        {newRepos.map((data) => (
          <ProjectCard
            color="purple"
            title={data.name}
            description={data.description}
            url={data.url}
            forks={data.forkCount}
            stars={data.stargazerCount}
            created={formatDate(data.createdAt)}
          />
        ))}
      </section>
      <section className="repo">
        <div>
          <h4>Recently Updated Repos</h4>
          <p>as of {asOf()}</p>
        </div>
        {updateRepos.map((data) => (
          <ProjectCard
            color="orange"
            title={data.name}
            description={data.description}
            url={data.url}
            forks={data.forkCount}
            stars={data.stargazerCount}
            updated={formatDate(data.updatedAt)}
          />
        ))}
      </section>
    </Layout>
  </>
);

Projects.propTypes = {
  allRepos: PropTypes.object,
  newRepos: PropTypes.object,
  updateRepos: PropTypes.object,
  totalRepos: PropTypes.object,
  totalForkedRepos: PropTypes.object,
  totalSourceRepos: PropTypes.object,
  totalMembers: PropTypes.object,
  mostStarred: PropTypes.object,
  mostForked: PropTypes.object,
};

export default Projects;
