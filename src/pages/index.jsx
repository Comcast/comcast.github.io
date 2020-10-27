import Head from 'next/head';
import Jumbotron from '../components/Jumbotron';
import Icon from '../components/Icon';
import { title, overview, description } from '../data/home.json';

const Home = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <style>
        {`
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.svg#svgFontName") format("svg");
          font-weight: 700;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.svg#svgFontName") format("svg");
          font-weight: 700;
          font-style: italic;
        }
        
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.svg#svgFontName") format("svg");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.svg#svgFontName") format("svg");
          font-weight: 400;
          font-style: italic;
        }
        
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.svg#svgFontName") format("svg");
          font-weight: 300;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.svg#svgFontName") format("svg");
          font-weight: 300;
          font-style: italic;
        }
        
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.wof2f") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.svg#svgFontName") format("svg");
          font-weight: 100;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'lineto-brown';
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.eot");
          src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.svg#svgFontName") format("svg");
          font-weight: 100;
          font-style: italic;
        }
        
        @font-face {
          font-family: 'comcorp-icons';
          src: url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.eot?lf89jd");
          src: url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.eot?lf89jd#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.ttf?lf89jd") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.woff?lf89jd") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.svg?lf89jd#comcorp-icons") format("svg");
          font-weight: normal;
          font-style: normal;
        }
        `}
      </style>
    </Head>
    <Jumbotron title={title} />
    <p className="overview">{overview}</p>
    <p>{description}</p>
    <h2>Featured Projects</h2>
    <Icon type="atom" color="yellow" />
    <h2>Featured People</h2>
    <Icon type="avatar" color="orange" />
    <h2>Featured Community</h2>
    <Icon type="people" color="red" />
    <h2>Featured Events</h2>
    <Icon type="calendar" color="purple" />
    <h2 id="featured_posts">Latest Blog Posts</h2>
    <Icon type="messages" color="blue" />
  </>
);

export default Home;