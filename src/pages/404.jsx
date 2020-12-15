import Head from 'next/head';
import Link from 'next/link';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import Icon from 'src/components/Icon';
import {
  title,
  featuredImage,
  color,
  overview,
  description,
} from 'src/data/404.json';

const PageNotFound = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Layout>
      <Header title={title} image={featuredImage} color={color} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
      </section>
      <hr className="rainbowSegment" />
      <section>
        <article>
          <h2 className="lvl1">
            <div style={{
              height: '2rem',
              width: '2rem',
              display: 'inline-block',
              verticalAlign: 'bottom',
            }}
            >
              <Icon type="house" color="blue" />
            </div> <Link href={`${process.env.ASSET_PREFIX}/`}>About</Link>
          </h2>
        </article>
        <article>
          <h2 className="lvl1"><Link href={`${process.env.ASSET_PREFIX}/projects`}>Projects</Link></h2>
          <ul>
            <li><Link href={`${process.env.ASSET_PREFIX}/projects#featured`}>Featured Projects</Link></li>
            <li><Link href={`${process.env.ASSET_PREFIX}/projects#projects`}>Projects List</Link></li>
            <li><Link href={`${process.env.ASSET_PREFIX}/projects#statistics`}>Projects Statistics</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={`${process.env.ASSET_PREFIX}/people`}>People</Link></h2>
          <ul>
            <li><Link href={`${process.env.ASSET_PREFIX}/people#virtual`}>Virtual Conference</Link></li>
            <li><Link href={`${process.env.ASSET_PREFIX}/people#talks`}>Talks</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={`${process.env.ASSET_PREFIX}/community`}>Community</Link></h2>
          <ul>
            <li><Link href={`${process.env.ASSET_PREFIX}/community#get-involved`}>Get Involved</Link></li>
            <li><Link href={`${process.env.ASSET_PREFIX}/community#grants`}>Open Source Grants</Link></li>
            <li><Link href={`${process.env.ASSET_PREFIX}/community#social-media`}>Social Media</Link></li>
            <li><Link href={`${process.env.ASSET_PREFIX}/community#affilaites`}>Affiliates</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={`${process.env.ASSET_PREFIX}/events`}>Events</Link></h2>
          <ul>
            <li><Link href={`${process.env.ASSET_PREFIX}/events#upcoming`}>Upcoming Events</Link></li>
            <li><Link href={`${process.env.ASSET_PREFIX}/events#past`}>Past Events</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={`${process.env.ASSET_PREFIX}/blog`}>Blog</Link></h2>
          <ul>
            <li><Link href={`${process.env.ASSET_PREFIX}/#blog-list`}>Blog List</Link></li>
          </ul>
        </article>
      </section>
    </Layout>
  </>
);

export default PageNotFound;
