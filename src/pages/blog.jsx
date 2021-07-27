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
  sections,
  blogTitle,
  blogList,
} from 'src/data/blog.json';

const Blog = () => {
  const [webKeyword, setWebKeyword] = useState(null);
  const [webPageNumber, setWebPageNumber] = useState(0);
  const [webProjectLanguage, setWebLanguage] = useState(null);
  const [ccKeyword, setCCKeyword] = useState(null);
  const [ccPageNumber, setCCPageNumber] = useState(0);
  const [ccProjectLanguage, setCCLanguage] = useState(null);

  const onWebPageSelect = (event) => {
    setWebPageNumber(parseInt(event.target.value, 10));
  };

  const webArticleSearch = (event) => {
    setWebKeyword(event.target.value);
    setWebPageNumber(0);
  };

  const webSelectLanguage = (event) => {
    setWebLanguage(event.target.value);
    setWebPageNumber(0);
  };

  const onCCPageSelect = (event) => {
    setCCPageNumber(parseInt(event.target.value, 10));
  };

  const ccArticleSearch = (event) => {
    setCCKeyword(event.target.value);
    setCCPageNumber(0);
  };

  const ccSelectLanguage = (event) => {
    setCCLanguage(event.target.value);
    setCCPageNumber(0);
  };

  const filteredList = (section) => blogList
    .filter((data) => {
      var sectionMatch = data.section == section;
      if (sectionMatch && section == "web" && webKeyword && !webProjectLanguage) {
        return data.title.toLowerCase().includes(webKeyword?.toLowerCase());
      }
      if (sectionMatch && section == "comcast" && ccKeyword && !ccProjectLanguage) {
        return data.title.toLowerCase().includes(ccKeyword?.toLowerCase());
      }

      return sectionMatch && data;
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
          <h2>{sections.comcast.title}</h2>
          <Filter
            data={filteredList("comcast")}
            itemType={['post', 'posts']}
            currentPage={ccPageNumber}
            onPageSelect={onCCPageSelect}
            onSearch={ccArticleSearch}
            onSelect={ccSelectLanguage}
          />
          <ArticleList
            content={filteredList("comcast").slice(ccPageNumber * 10, (ccPageNumber * 10) + 10)}
            defaultImage={featuredImage}
          />
        </section>
        <section>
          <h2>{sections.web.title}</h2>
          <Filter
            data={filteredList("web")}
            itemType={['post', 'posts']}
            currentPage={webPageNumber}
            onPageSelect={onWebPageSelect}
            onSearch={webArticleSearch}
            onSelect={webSelectLanguage}
          />
          <ArticleList
            content={filteredList("web").slice(webPageNumber * 10, (webPageNumber * 10) + 10)}
            defaultImage={featuredImage}
          />
        </section>
      </Layout>
    </>
  );
};

export default Blog;
