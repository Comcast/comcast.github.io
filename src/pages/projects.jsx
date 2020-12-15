/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { GraphQLClient, gql } from 'graphql-request';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import NumberFigure from 'src/components/NumberFigure';
import ProjectCard from 'src/components/ProjectCard';
import ProjectMost from 'src/components/ProjectMost';
import Cta from 'src/components/Cta';
// import Loader from 'src/components/Loader';
import TabList from 'src/components/TabList';
import Filter from 'src/components/Filter';
import DataTable from 'src/components/DataTable';
import {
  title,
  overview,
  description,
  featuredImage,
  color,
  projects,
} from 'src/data/projects.json';

const API_ENDPOINT = 'https://api.github.com/graphql';

const monthLongName = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${monthLongName[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const asOf = () => formatDate(new Date());

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
    # repo call first: 1-100
    # repo call last: 106-206
    # repo call middle: 90-190
    #   Then merge/remove duplicates into allRepos
    allRepos: search(query: "user:Comcast archived:false", type: REPOSITORY, first: 94) {
      edges {
        node {
          ... on Repository {
            name
            url
            description
            forkCount
            stargazerCount
            updatedAt
            createdAt
            languages(first: 10) {
              edges {
                node {
                  name
                }
              }
            }
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

  return {
    props: {
      staticToday: asOf(),
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

const Projects = ({
  staticToday,
  allRepos,
  newRepos,
  updateRepos,
  mostStarred,
  mostForked,
  totalRepos,
  totalSourceRepos,
  totalForkedRepos,
  totalMembers,
}) => {
  const [keyword, setKeyword] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [projectLanguage, setLanguage] = useState(null);

  const onPageSelect = (event) => {
    setPageNumber(event.target.value);
  };

  const projectSearch = (event) => {
    setKeyword(event.target.value);
    setPageNumber(0);
  };

  const selectLanguage = (event) => {
    setLanguage(event.target.value);
    setPageNumber(0);
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const languageList = [].concat(...allRepos
    .map((data) => (data.node.languages.edges
      .map((language) => language.node.name))))
    .filter(onlyUnique)
    .sort();

  const filteredList = allRepos
    .filter((data) => {
      if (keyword && projectLanguage) {
        return data.node.languages.edges
          .map((language) => language.node.name.toLowerCase()
          === projectLanguage?.toLowerCase()).includes(true)
        && (
          data.node.name.toLowerCase().includes(keyword?.toLowerCase())
          || data.node.repositoryTopics.edges
            .map((topic) => topic.node.topic.name.toLowerCase()
              .includes(keyword?.toLowerCase())).includes(true)
          || data.node.languages.edges
            .map((language) => language.node.name.toLowerCase()
              .includes(keyword?.toLowerCase())).includes(true)
        );
      }
      if (keyword && !projectLanguage) {
        return data.node.name.toLowerCase().includes(keyword?.toLowerCase())
        || data.node.repositoryTopics.edges
          .map((topic) => topic.node.topic.name.toLowerCase()
            .includes(keyword?.toLowerCase())).includes(true)
        || data.node.languages.edges
          .map((language) => language.node.name.toLowerCase()
            .includes(keyword?.toLowerCase())).includes(true);
      }
      if (!keyword && projectLanguage) {
        return data.node.languages.edges
          .map((language) => language.node.name.toLowerCase()
          === projectLanguage?.toLowerCase()).includes(true);
      }

      return data;
    });

  return (
    <>
      <Head>
        <title>Open Source Software {title} at Comcast</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Layout>
        <Header title={title} image={featuredImage} color={color} />
        <section>
          {overview && <p className="overview">{overview}</p>}
          {description && <p>{description}</p>}
        </section>
        <section className="repo">
          <h2>Overall Statistics</h2>
          <div>
            <p>as of {staticToday}</p>
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
        <section>
          <h2>{projects.featuredProjects.title}</h2>
          {projects.featuredDescription && <p>{projects.featuredProjects.description}</p>}
          <TabList items={projects.featuredProjects.list
            .sort((a, b) => new Date(a.date) - new Date(b.date))}
          />
        </section>
        <section className="repo">
          <h2 id="projects">{projects.title}</h2>
          {projects.description && <p>{projects.description}</p>}
          {/* <Loader title="Loading Projects..." loaded={false} /> */}
          <Filter
            data={filteredList}
            itemType={['project', 'projects']}
            categoryTitle="languages"
            categoryList={languageList}
            currentPage={pageNumber}
            onPageSelect={onPageSelect}
            onSearch={projectSearch}
            onSelect={selectLanguage}
          />
          <DataTable data={filteredList.slice(pageNumber * 10, (pageNumber * 10) + 10)} />
        </section>
        <section className="repo">
          <h2>Project Statistics</h2>
          <div>
            <h4>Most Starred</h4>
            <p>as of {staticToday}</p>
          </div>
          {mostStarred.map((data) => (
            <ProjectMost title={data.name} url={data.url} stars={data.stargazerCount} />
          ))}
        </section>
        <section className="repo">
          <div>
            <h4>Most Forked</h4>
            <p>as of {staticToday}</p>
          </div>
          {mostForked.map((data) => (
            <ProjectMost title={data.name} url={data.url} forks={data.forkCount} />
          ))}
        </section>
        <hr className="rainbowSegment" />
        <section className="repo">
          <div>
            <h4>Newest Repos</h4>
            <p>as of {staticToday}</p>
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
            <p>as of {staticToday}</p>
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
};

Projects.propTypes = {
  staticToday: PropTypes.string.isRequired,
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
