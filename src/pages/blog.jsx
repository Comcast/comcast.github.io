import { useState } from 'react';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import Filter from 'src/components/Filter';
import ArticleList from 'src/components/ArticleList';
import {
  title,
  featuredImage,
  color,
  overview,
  description,
  blogTitle,
  blogList,
} from 'src/data/blog.json';

const Blog = () => {
  const [keyword, setKeyword] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [projectLanguage, setLanguage] = useState(null);

  const onPageSelect = (event) => {
    setPageNumber(event.target.value);
  };

  const articleSearch = (event) => {
    setKeyword(event.target.value);
    setPageNumber(0);
  };

  const selectLanguage = (event) => {
    setLanguage(event.target.value);
    setPageNumber(0);
  };

  const filteredList = blogList
    .filter((data) => {
      if (keyword && !projectLanguage) {
        return data.title.toLowerCase().includes(keyword?.toLowerCase());
        // || data.author.toLowerCase().includes(keyword?.toLowerCase());
      }

      return data;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
          <h2>{blogTitle}</h2>
          <Filter
            data={filteredList}
            itemType={['post', 'posts']}
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

export default Blog;
