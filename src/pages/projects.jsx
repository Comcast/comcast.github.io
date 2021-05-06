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
import TabList from 'src/components/TabList';
import Filter from 'src/components/Filter';
import DataTable from 'src/components/DataTable';
import { formatDate } from 'src/shared/formatDate';
import {
  title,
  overview,
  description,
  featuredImage,
  color,
  projects,
} from 'src/data/projects.json';

const API_ENDPOINT = 'https://api.github.com/graphql';

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
    }
    firstRepos: search(query: "user:Comcast archived:false ", type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            ...repoInfo
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
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    lastRepos: search(query: "user:Comcast archived:false", type: REPOSITORY, first: 100, after: "Y3Vyc29yOjEwMA==") {
      edges {
        node {
          ... on Repository {
            ...repoInfo
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
      pageInfo {
        hasNextPage
        endCursor
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
  const allRepos = [
    ...data.firstRepos.edges,
    ...data.lastRepos.edges,
  ];

  return {
    props: {
      staticToday: asOf(),
      allRepos,
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
    setPageNumber(parseInt(event.target.value, 10));
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

  const languageArray = [].concat(...allRepos
    .map((data) => (data.node.languages.edges
      .map((language) => language.node.name))))
    .reduce((categoryArray, currentCategory) => {
      const newArray = categoryArray;
      newArray[currentCategory] = (newArray[currentCategory] || 0) + 1;
      return newArray;
    }, {});

  const languageList = Object.keys(languageArray)
    .map((key) => ({ optionLabel: key, optionCount: languageArray[key] }))
    .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));

  const filteredList = allRepos
    .filter((item) => (item.node.name !== '.github'))
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
        <meta name="description" content={overview || description} />
        <meta rel="canonical" content="https://comcast.github.io/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://comcast.github.io/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={overview || description} />
        <meta property="og:image" content={`${process.env.ASSET_PREFIX}${featuredImage}`} />

        {/* <meta name="twitter:card" content="summary" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comcast" />
        <meta name="twitter:creator" content="@comcast" />
        <meta name="twitter:image" content={`${process.env.ASSET_PREFIX}${featuredImage}`} />
        <meta name="twitter:image:alt" content={title} />
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
              <NumberFigure color="orange" number={totalRepos} caption="Total Public Repos" />
              <NumberFigure color="blue" number={totalSourceRepos} caption="Total Source Repos" />
              <NumberFigure color="red" number={totalForkedRepos} caption="Total Forked Repos" />
              <NumberFigure color="green" number={totalMembers} caption="Total Members" />
            </div>
          </div>
          <Cta type="atom" color="yellow" label="View All Comcast Repos on GitHub" url="https://github.com/Comcast/" />
          <hr className="rainbowSegment" />
        </section>
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
            data={filteredList.filter(onlyUnique)}
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
            <h3>Most Starred</h3>
            <p>as of {staticToday}</p>
          </div>
          {mostStarred.map((data) => (
            <ProjectMost
              title={data.name}
              url={data.url}
              stars={data.stargazerCount}
              key={`star_${data.name}`}
              color="red"
            />
          ))}
        </section>
        <section className="repo">
          <div>
            <h3>Most Forked</h3>
            <p>as of {staticToday}</p>
          </div>
          {mostForked.map((data) => (
            <ProjectMost
              title={data.name}
              url={data.url}
              forks={data.forkCount}
              key={`fork_${data.name}`}
              color="red"
            />
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
              key={`new_${data.name}`}
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
              key={`updated_${data.name}`}
            />
          ))}
        </section>
      </Layout>
    </>
  );
};

Projects.propTypes = {
  staticToday: PropTypes.string.isRequired,
  allRepos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    forkCount: PropTypes.number,
    stargazerCount: PropTypes.number,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
    isArchived: PropTypes.bool,
  })),
  newRepos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    forkCount: PropTypes.number,
    stargazerCount: PropTypes.number,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
    isArchived: PropTypes.bool,
  })),
  updateRepos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    forkCount: PropTypes.number,
    stargazerCount: PropTypes.number,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
    isArchived: PropTypes.bool,
  })),
  totalRepos: PropTypes.number,
  totalForkedRepos: PropTypes.number,
  totalSourceRepos: PropTypes.number,
  totalMembers: PropTypes.number,
  mostStarred: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    forkCount: PropTypes.number,
    stargazerCount: PropTypes.number,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
    isArchived: PropTypes.bool,
  })),
  mostForked: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    forkCount: PropTypes.number,
    stargazerCount: PropTypes.number,
    updatedAt: PropTypes.string,
    createdAt: PropTypes.string,
    isArchived: PropTypes.bool,
  })),
};

export default Projects;
