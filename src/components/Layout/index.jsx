import PropTypes from 'prop-types';
import Link from 'next/link';
import Nav from 'src/components/Nav';
import data from 'src/data/_global.json';
import { layout } from './style.module.css';

const Layout = ({ children }) => (
  <>
    <style jsx>
      {`
    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.svg#svgFontName") format("svg");
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.svg#svgFontName") format("svg");
      font-weight: 700;
      font-style: italic;
    }

    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.svg#svgFontName") format("svg");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.svg#svgFontName") format("svg");
      font-weight: 400;
      font-style: italic;
    }

    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.svg#svgFontName") format("svg");
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.svg#svgFontName") format("svg");
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.wof2f") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.svg#svgFontName") format("svg");
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: "lineto-brown";
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.eot");
      src: url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.eot?#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.woff2") format("woff2"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.woff") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.ttf") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.svg#svgFontName") format("svg");
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: "comcorp-icons";
      src: url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.eot?lf89jd");
      src: url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.eot?lf89jd#iefix") format("embedded-opentype"),url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.ttf?lf89jd") format("truetype"),url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.woff?lf89jd") format("woff"),url("${process.env.ASSET_PREFIX}/fonts/icon/comcorp-icons.svg?lf89jd#comcorp-icons") format("svg");
      font-weight: normal;
      font-style: normal;
    }
    `}
    </style>
    <header className="header">
      <div className="siteId">
        <Link href={`${process.env.ASSET_PREFIX}/`}>
          <a href={`${process.env.ASSET_PREFIX}/`}>
            <svg
              role="img"
              alt="Comcast"
              className="primaryLogo"
              viewBox="0 0 1000.258 353.502"
            >
              <use href="#comcast_logo" />
            </svg>
            <img
              src={`${process.env.ASSET_PREFIX}/comcast_open_source.svg`}
              alt="Open Source"
              className="subsetLogo"
            />
          </a>
        </Link>
      </div>
      <Nav />
    </header>
    <main className={layout}>{children}</main>
    <footer className="footer" role="contentinfo">
      <section className="footer__site">
        <section>
          <h3>Learn More About Comcast Open Source</h3>
          <address>
            <a href="mailto:Comcast_Open_Source_Services@comcast.com">Contact Comcast Open Source Services</a>
          </address>
          <Link href={`${process.env.ASSET_PREFIX}/blog`}>Comcast Open Source News</Link>
          <p>
            <Link href={`${process.env.ASSET_PREFIX}/community#involvement`}>Contributing</Link> &amp; <Link href={`${process.env.ASSET_PREFIX}/community#code-of-conduct`}>Code of Conduct</Link>
          </p>
          <ul className="social">
            <li className="technology menu-item"><a href="https://corporate.comcast.com/technology" title="Technology @ Comcast"><span className="vh">Technology @ Comcast</span></a></li>
            <li className="github menu-item"><a href="https://github.com/Comcast/Comcast.github.io" title="Comcast Open Source on GitHub"><span className="vh">Comcast Open Source on GitHub</span></a></li>
            <li className="humans menu-item"><a href="humans.txt" title="Comcast Open Source humans.txt"><span className="vh">Comcast Open Source Site humans.txt</span></a></li>
          </ul>
        </section>
        <section>
          <h3>Like what you see? Come work with us!</h3>
          <a href="https://comcast.jibeapply.com/main/jobs?keywords=open%20source&amp;page=1" className="cta">View Job Openings</a>
          <ul className="social">
            <li className="facebook menu-item"><a href="https://www.facebook.com/ComcastCareers/?fref=ts" title="Comcast Careers on Facebook"><span className="vh">Comcast Careers on Facebook</span></a></li>
            <li className="twitter menu-item"><a href="https://twitter.com/comcastcareers" title="Comcast Careers on Twitter"><span className="vh">Comcast Careers on Twitter</span></a></li>
            <li className="instagram menu-item"><a href="https://www.instagram.com/comcastcareers/" title="Comcast Careers on Instagram"><span className="vh">Comcast Careers on Instagram</span></a></li>
            <li className="youtube menu-item" title="Comcast Careers on YouTube"><a href="https://www.youtube.com/user/ComcastCareers"><span className="vh">Comcast Careers on YouTube</span></a></li>
            <li className="dribble menu-item"><a href="https://dribbble.com/comcast" title="Comcast Careers on Dribbble"><span className="vh">Comcast Careers on Dribbble</span></a></li>
          </ul>
        </section>
      </section>
      <section className="footer__corporate">
        <a href="https://corporate.comcast.com/" aria-label="Comcast" className="footer-logo-img">
          <svg role="img" alt="Comcast" viewBox="0 0 1000.258 353.502">
            <defs>
              <g id="comcast_logo">
                <path fill="#FFF" d="M500.044 17.759c3.688-6.022 9.807-12.323 16.396-14.988 11.341-5.16 26.542-2.941 35.795 5.224 8.954 8.112 13.496 19.23 11.353 31.66 2.196-.405 4.413-1.811 6.738-2.611 13.899-3.923 28.599.331 37.511 12.248 6.694 8.507 8.443 21.724 4.425 32.001-1.994 5.169-5.395 9.817-9.817 13.783l.446.448c12.931.628 25.639 10.67 29.561 22.982 4.253 12.419.512 25.69-8.57 34.773-7.42 7.334-16.961 9.872-27.567 9.658h-192.55c-15.81.341-28.026-6.663-34.603-20.722-5.16-12.068-2.612-27.503 7.024-36.702 6.076-6.354 13.688-8.956 21.896-10.266-9.295-8.624-13.773-20.424-11.161-33.078 1.866-10.254 10.607-20.637 20.648-24.219 8.847-3.518 20.83-2.9 28.932 1.875l.288-.352c-2.441-13.954 3.742-26.543 15.317-34.261 10.32-6.981 26.821-6.801 36.926.62 4.542 2.781 8.283 7.557 11.012 11.927" />
                <path fill="#645FAA" d="M554.558 22.972c4.137 8.347 1.707 19.284-2.611 26.778l-33.408 75.163-.289.352-12.076-76.25c-.969-7.322 6.854-10.446 11.459-13.964-.234-1.076-1.418-1.023-2.163-1.524l-11.288-.118-.343-.341c.064-9.466 5.16-18.207 13.794-22.801 9.02-5.212 21.725-3.795 29.549 2.889 3.177 2.834 5.853 6.127 7.376 9.816" />
                <path fill="#C9234A" d="M493.008 20.36c2.73 5.053 4.308 10.789 3.348 17.141l-13.623 87.305c.074.106-.053.224-.161.276l-3.528-7.024-34.144-76.25c-3.177-9.818-.234-20.083 6.918-27.12 7.206-7.312 19.06-9.295 28.484-5.329 4.989 2.154 9.754 6.12 12.706 11.001" />
                <path fill="#0089CF" d="M603.978 57.115c4.594 7.834 3.561 19.689-1.547 26.959-3.164 5.106-8.389 7.654-12.813 11.001L518.87 143.64h-.162l.79-2.323L557 56.668c5.618-9.978 16.342-15.031 27.684-13.507 7.771 1.419 15.542 6.471 19.294 13.954" />
                <path fill="#F36F21" d="M443.259 56.668l39.026 86.963h-.628l-78.68-54.227c-8.007-6.747-11.289-16.853-8.571-27.065 2.036-7.654 8.389-14.806 15.947-17.643 12.375-4.53 26.317.288 32.906 11.972" />
                <path fill="#0DB14B" d="M624.509 118.505c3.922 8.283 2.377 19.625-3.23 26.67-5.563 6.749-13.005 10.437-21.736 10.202l-83.893.054 70.279-48.896c6.867-4.424 17.303-5.225 24.797-1.643 5.787 2.271 11.235 7.942 13.783 13.613" />
                <path fill="#FDB913" d="M376.08 118.505c-3.911 8.283-2.377 19.625 3.241 26.67 5.564 6.749 12.983 10.437 21.725 10.202l83.893.054-70.28-48.896c-6.865-4.424-17.3-5.225-24.784-1.643-5.79 2.271-11.236 7.942-13.795 13.613" />
                <path fill="currentColor" d="M225.435 205.65c-40.763 0-73.893 33.152-73.893 73.916 0 40.753 33.13 73.925 73.893 73.925 40.764 0 73.916-33.172 73.916-73.925 0-40.763-33.152-73.916-73.916-73.916m0 133.28c-32.736 0-59.375-26.637-59.375-59.363 0-32.717 26.639-59.355 59.375-59.355 32.737 0 59.376 26.639 59.376 59.355 0 32.726-26.639 59.363-59.376 59.363M862.724 280.504c-3.965-2.08-28.088-14.498-31.553-16.299-12.653-6.471-17.141-12.185-17.141-21.864 0-13.452 11.045-22.14 28.173-22.14 10.054 0 19.774 4.424 25.478 7.632a7.418 7.418 0 003.539.885c3.987 0 7.26-3.272 7.26-7.259a7.303 7.303 0 00-3.635-6.301c-7.184-4.009-19.434-9.498-32.642-9.498-25.167 0-42.724 15.072-42.724 36.681 0 19.391 12.749 28.537 25.222 34.912 3.495 1.78 27.896 14.358 31.552 16.287 9.637 5.042 14.967 12.611 14.967 21.321 0 11.672-9.891 24.08-28.194 24.08-17.803 0-31.628-11.939-35.444-15.617l-1.142-1.088-10.755 9.807 1.257 1.258c4.775 4.735 22.237 20.19 46.084 20.19 26.735 0 42.714-19.646 42.714-38.63 0-14.177-8.379-26.705-23.016-34.357M73.895 220.211c15.872 0 30.785 6.184 41.978 17.365 2.665 2.654 7.675 2.654 10.297 0 1.386-1.354 2.121-3.176 2.121-5.127 0-1.93-.735-3.774-2.121-5.128l-.895-.917c-13.837-13.389-32.097-20.754-51.38-20.754C33.152 205.65 0 238.813 0 279.555c0 40.765 33.152 73.937 73.895 73.937 21.51 0 40.89-9.229 54.396-23.942l-10.287-10.297c-10.873 12.067-26.607 19.678-44.11 19.678-32.726 0-59.365-26.648-59.365-59.375.001-32.695 26.64-59.345 59.366-59.345M574.941 220.211c15.852 0 30.785 6.184 41.977 17.365 2.654 2.654 7.666 2.654 10.288 0a7.113 7.113 0 002.153-5.127c0-1.93-.768-3.774-2.153-5.128l-.885-.917c-13.868-13.389-32.107-20.754-51.38-20.754-40.752 0-73.916 33.162-73.916 73.904 0 40.765 33.164 73.937 73.916 73.937 21.5 0 40.88-9.229 54.407-23.942l-10.298-10.297c-10.873 12.067-26.629 19.678-44.109 19.678-32.737 0-59.387-26.648-59.387-59.375 0-32.694 26.65-59.344 59.387-59.344M449.741 205.65c-2.729 0-4.883 1.759-6.056 4.029-1.194 2.27-43.492 106.897-43.502 106.897 0 0-42.298-104.628-43.482-106.897-1.183-2.271-3.335-4.029-6.064-4.029-3.188 0-5.586 2.345-6.428 5.299-.842 2.973-24.709 134.653-24.709 134.653a6.78 6.78 0 00-.128 1.333c0 3.623 2.953 6.556 6.556 6.556a6.546 6.546 0 006.438-5.297l20.669-112.664s39.879 98.518 41.041 100.862c1.173 2.335 3.347 4.158 6.119 4.158 2.771 0 4.936-1.823 6.097-4.158 1.173-2.345 41.051-100.862 41.051-100.862l21.479 117.151h13.348s-25.147-138.76-25.989-141.732c-.855-2.954-3.254-5.299-6.44-5.299M712.527 205.66c-2.761-.01-4.902 1.791-6.107 4.136-1.195 2.335-54.738 134.582-54.738 134.582a6.708 6.708 0 00-.502 2.558c0 3.623 2.932 6.566 6.556 6.566 2.761 0 5.128-1.727 6.099-4.168L684.62 298.2h55.825l22.174 54.481h14.166s-56.987-140.551-58.159-142.886c-1.164-2.344-3.328-4.145-6.099-4.135m-21.981 77.987l21.98-54.046 22.002 54.046h-43.982zM992.966 206.438h-82.293c-4.009 0-7.26 3.263-7.26 7.281 0 3.997 3.251 7.259 7.26 7.259h34.494V352.67h13.326V220.979h34.473c4.0009 0 7.292-3.262 7.292-7.259 0-4.019-3.283-7.282-7.292-7.282" />
              </g>
            </defs>
            <use href="#comcast_logo" />
          </svg>
        </a>
        <a href="https://www.xfinity.com/corporate/legal/visitorAgreement.html">Terms</a>
        <a href="https://www.xfinity.com/corporate/privacy">Privacy</a>
        <a href="https://www.xfinity.com/privacy/manage-preference">Do Not Sell My Personal Information</a>
        <a href="https://corporate.comcast.com/motion-settings">Motion Settings</a>
        <ul className="social">
          <li className="facebook menu-item"><a href="https://www.facebook.com/comcast" title="Comcast on Facebook"><span className="vh">Comcast on Facebook</span></a></li>
          <li className="twitter menu-item"><a href="https://twitter.com/comcast" title="Comcast on Twitter"><span className="vh">Comcast on Twitter</span></a></li>
          <li className="linkedin menu-item"><a href="https://www.linkedin.com/company/comcast/" title="Comcast on LinkedIn"><span className="vh">Comcast on LinkedIn</span></a></li>
          <li className="instagram menu-item"><a href="https://www.instagram.com/comcast" title="Comcast on Instagram"><span className="vh">Comcast on Instagram</span></a></li>
        </ul>
      </section>
      <p className="copyright">&copy;{data.copyright} Comcast <Link href={`${process.env.ASSET_PREFIX}/sitemap`}>Site Map</Link></p>
    </footer>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
