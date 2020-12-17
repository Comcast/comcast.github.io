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
} from 'src/data/sitemap.json';
import { updateUrl } from 'src/shared/updateUrl';

const Sitemap = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={overview || description} />
      <meta rel="canonical" content="https://comcast.github.io/" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://comcast.github.io/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={overview || description} />
      <meta property="og:image" content={updateUrl('/images/favicon/android-chrome-512x512.png')} />

      {/* <meta name="twitter:card" content="summary" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@comcast" />
      <meta name="twitter:creator" content="@comcast" />
      <meta name="twitter:image" content={updateUrl('/images/favicon/android-chrome-512x512.png')} />
      <meta name="twitter:image:alt" content={title} />
    </Head>
    <Layout>
      <Header title={title} image={featuredImage} color={color} />
      <section>
        {overview && <p className="overview">{overview}</p>}
        {description && <p>{description}</p>}
        <article>
          <h2 className="lvl1"><div style={{ height: '3rem', width: '3rem', display: 'inline-block' }}><Icon type="house" color="blue" /></div><Link href={updateUrl('/')}>About</Link></h2>
        </article>
        <article>
          <h2 className="lvl1"><Link href={updateUrl('/projects')}>Projects</Link></h2>
          <ul>
            <li><Link href={updateUrl('/projects#featured')}>Featured Projects</Link></li>
            <li><Link href={updateUrl('/projects#projects')}>Projects List</Link></li>
            <li><Link href={updateUrl('/projects#statistics')}>Projects Statistics</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={updateUrl('/people')}>People</Link></h2>
          <ul>
            <li><Link href={updateUrl('/people#virtual')}>Virtual Conference</Link></li>
            <li><Link href={updateUrl('/people#talks')}>Talks</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={updateUrl('/community')}>Community</Link></h2>
          <ul>
            <li><Link href={updateUrl('/community#get-involved')}>Get Involved</Link></li>
            <li><Link href={updateUrl('/community#grants')}>Open Source Grants</Link></li>
            <li><Link href={updateUrl('/community#social-media')}>Social Media</Link></li>
            <li><Link href={updateUrl('/community#affilaites')}>Affiliates</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={updateUrl('/events')}>Events</Link></h2>
          <ul>
            <li><Link href={updateUrl('/events#upcoming')}>Upcoming Events</Link></li>
            <li><Link href={updateUrl('/events#past')}>Past Events</Link></li>
          </ul>
        </article>
        <article>
          <h2 className="lvl1"><Link href={updateUrl('/blog')}>Blog</Link></h2>
          <ul>
            <li><Link href={updateUrl('blog/#blog-list')}>Blog List</Link></li>
          </ul>
        </article>
      </section>
    </Layout>
  </>
);

export default Sitemap;
