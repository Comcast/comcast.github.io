import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import Cta from 'src/components/Cta';
import ArticleList from 'src/components/ArticleList';
import Document from 'src/components/Document';
import { getDoc } from 'src/shared/getDoc';
import {
  title,
  featuredImage,
  color,
  overview,
  description,
  involvement,
  grants,
  socialMedia,
  affiliates,
} from 'src/data/community.json';

export async function getStaticProps() {
  const contributeMarkdown = `##${getDoc('CONTRIBUTING.md').replace(/## /gi, '#### ')} \n---\n&mdash; Source: [CONTRIBUTING.md](https://github.com/Comcast/Comcast.github.io/blob/main/CONTRIBUTING.md)`;
  const conductMarkdown = `##${getDoc('CODE_OF_CONDUCT.md').replace(/## /gi, '#### ')} \n---\n&mdash; Source: [CODE_OF_CONDUCT.md](https://github.com/Comcast/Comcast.github.io/blob/main/CODE_OF_CONDUCT.md)`;

  return {
    props: {
      contributeMarkdown,
      conductMarkdown,
    },
  };
}

const Community = ({ contributeMarkdown, conductMarkdown }) => (
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
        <h2 id="involvement">{involvement.title}</h2>
        {involvement.description && <p>{involvement.description}</p>}
        <Document file={contributeMarkdown} color="orange" />
      </section>
      <section>
        <h2 id="grants">{grants.title}</h2>
        <img src={`${process.env.ASSET_PREFIX}${grants.image}`} alt="Comcast Innovation Fund" />
        {grants.description && <p>{grants.description}</p>}
        <Cta type="chip" color="blue" label={grants.cta.label} url={grants.cta.url} />
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
      <section>
        <h2 id="code-of-conduct">Code of Conduct</h2>
        <Document file={conductMarkdown} color="blue" />
      </section>
    </Layout>
  </>
);

Community.propTypes = {
  contributeMarkdown: PropTypes.string.isRequired,
  conductMarkdown: PropTypes.string.isRequired,
};

export default Community;
