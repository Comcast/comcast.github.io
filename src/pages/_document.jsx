import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const url = (path) => process.env.ASSET_PREFIX + path;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          {/* <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" /> */}
          <meta name="robots" content="index, follow, archive" />

          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-bold.woff2`} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-boldItalic.woff2`} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-regular.woff2`} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-italic.woff2`} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-light.woff2`} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-lightitalic.woff2`} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thin.woff2`} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={`${process.env.ASSET_PREFIX}/fonts/brown/lineto-brown-thinitalic.woff2`} type="font/woff2" crossOrigin="anonymous" />

          <link rel="shortcut icon" href={`url('${process.env.ASSET_PREFIX}/favicon.ico')`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.ASSET_PREFIX}/images/favicon/apple-touch-icon.png`} />
          <link rel="manifest" href={`${process.env.ASSET_PREFIX}/site.webmanifest`} />
          <link rel="mask-icon" href={`${process.env.ASSET_PREFIX}/images/favicon/safari-pinned-tab.svg`} color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <article className="page">
            <Main />
            <NextScript />
          </article>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
