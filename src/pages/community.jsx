import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import ArticleList from 'src/components/ArticleList';
import {
  title,
  featuredImage,
  overview,
  description,
  socialMedia,
  affiliates,
} from 'src/data/community.json';

const Community = () => (
  <>
    <Head>
      <title>{title} of Open Source Software at Comcast</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} image={featuredImage} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
      </section>

      <section>
        <h2 id="socialMedia">{socialMedia.title}</h2>
        {socialMedia.description && <p>{socialMedia.description}</p>}
        <h3>Twitter Lists</h3>
        <div className="socialList">
          <div className="statBox">
            <a className="twitter-timeline" data-height="600" href="https://twitter.com/carlism/lists/comcast-os-projects">Comcast OS Projects</a>
          </div>
          <div className="statBox">
            <a className="twitter-timeline" data-height="600" href="https://twitter.com/carlism/lists/open-source-community">Open Source Community</a>
          </div>
          <div className="statBox">
            <a className="twitter-timeline" data-height="600" href="https://twitter.com/carlism/lists/comcast-ospo">Comcast Open Source Program Office</a>
          </div>
        </div>
      </section>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      <section>
        <h2 id="affiliates">{affiliates.title}</h2>
        {affiliates.description && <p>{affiliates.description}</p>}
        <ArticleList content={affiliates.list
          .sort((a, b) => new Date(b.date) - new Date(a.date))}
        />
      </section>
    </Layout>
  </>
);

export default Community;
