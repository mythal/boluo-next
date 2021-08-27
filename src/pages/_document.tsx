import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { DEVELOPMENT } from '../const';
import { css, Global } from '@emotion/react';

const globalStyle = css`
  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;
class BoluoDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    const favicon = DEVELOPMENT ? '/logo-dev.svg' : '/logo.svg';

    // noinspection HtmlRequiredTitleElement
    return (
      <Html>
        <Global styles={globalStyle} />
        <Head>
          <meta name="description" content="RPG tool, next generation" />
          <link rel="icon" href={favicon} type="image/svg+xml" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BoluoDocument;
