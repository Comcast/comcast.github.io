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
          <link rel="shortcut icon" href={url('/favicon.ico')} />
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
