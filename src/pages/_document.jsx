import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { updateUrl } from 'src/shared/updateUrl';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" crossOrigin="use-credentials" href={updateUrl('/site.webmanifest')} />
          {/*
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" /> */}
          <meta name="robots" content="index, follow, archive" />

          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-bold.woff2')} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-boldItalic.woff2')} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-regular.woff2')} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-italic.woff2')} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-light.woff2')} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-lightitalic.woff2')} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-thin.woff2')} type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" as="font" href={updateUrl('/fonts/brown/lineto-brown-thinitalic.woff2')} type="font/woff2" crossOrigin="anonymous" />

          <link rel="shortcut icon" href={updateUrl('/favicon.ico')} />
          <link rel="apple-touch-icon" sizes="180x180" href={updateUrl('/images/favicon/apple-touch-icon.png')} />
          <link rel="manifest" href={updateUrl('/site.webmanifest')} />
          <link rel="mask-icon" href={updateUrl('/images/favicon/safari-pinned-tab.svg')} color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102911798-1"></script>
          <script async dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-102911798-1');`
          }}/>
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
