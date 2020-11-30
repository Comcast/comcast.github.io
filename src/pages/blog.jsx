import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import ArticleList from 'src/components/ArticleList';
import {
  title,
  overview,
  description,
  blogTitle,
  blogList,
} from 'src/data/blog.json';

const Blog = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
      </section>
      <section>
        <h2>{blogTitle}</h2>
        <ArticleList content={blogList
          .sort((a, b) => new Date(b.date) - new Date(a.date))}
        />
      </section>
    </Layout>
  </>
);

export default Blog;
