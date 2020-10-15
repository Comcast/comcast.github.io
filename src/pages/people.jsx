import { useState } from 'react';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import Event from 'src/components/Event';
import Filter from 'src/components/Filter';
import ArticleList from 'src/components/ArticleList';
import {
  title,
  overview,
  description,
  featuredImage,
  color,
  conference,
  talksTitle,
  talksList,
} from 'src/data/people.json';
import speakers from 'src/data/profiles.json';

const People = () => {
  const [keyword, setKeyword] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [projectLanguage, setLanguage] = useState(null);

  const onPageSelect = (event) => {
    setPageNumber(parseInt(event.target.value, 10));
  };

  const articleSearch = (event) => {
    setKeyword(event.target.value);
    setPageNumber(0);
  };

  const selectLanguage = (event) => {
    setLanguage(event.target.value);
    setPageNumber(0);
  };

  const filteredList = talksList
    .filter((data) => {
      // if (keyword && projectLanguage) {
      //   return data.node.languages.edges
      //     .map((language) => language.node.name.toLowerCase()
      //     === projectLanguage?.toLowerCase()).includes(true)
      //   && (
      //     data.node.name.toLowerCase().includes(keyword?.toLowerCase())
      //     || data.node.repositoryTopics.edges
      //       .map((topic) => topic.node.topic.name.toLowerCase()
      //         .includes(keyword?.toLowerCase())).includes(true)
      //     || data.node.languages.edges
      //       .map((language) => language.node.name.toLowerCase()
      //         .includes(keyword?.toLowerCase())).includes(true)
      //   );
      // }
      if (keyword && !projectLanguage) {
        return data.title.toLowerCase().includes(keyword?.toLowerCase())
        || data.author.toLowerCase().includes(keyword?.toLowerCase());
      }
      // if (!keyword && projectLanguage) {
      //   return data.node.languages.edges
      //     .map((language) => language.node.name.toLowerCase()
      //     === projectLanguage?.toLowerCase()).includes(true);
      // }

      return data;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Head>
        <title>{title} of Open Source Software at Comcast</title>
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
        <section>
          <Event events={conference} talks={talksList} speakers={speakers} />
        </section>
        <section>
          <h2 id="talks">{talksTitle}</h2>
          <Filter
            data={filteredList}
            itemType={['talk', 'talks']}
            currentPage={pageNumber}
            onPageSelect={onPageSelect}
            onSearch={articleSearch}
            onSelect={selectLanguage}
          />
          <ArticleList
            content={filteredList.slice(pageNumber * 10, (pageNumber * 10) + 10)}
            defaultImage={featuredImage}
          />
        </section>
      </Layout>
    </>
  );
};

export default People;
