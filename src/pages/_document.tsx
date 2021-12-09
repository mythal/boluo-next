/* eslint-disable @next/next/no-page-custom-font */
// the warning is false positive

import { Head, Html, Main, NextScript } from 'next/document';
import { Favicon } from '../components/global/Favicon';

function Document() {
  // noinspection HtmlRequiredTitleElement
  return (
    <Html>
      <Head>
        <meta name="description" content="RPG tool, next generation" />
        <meta name="color-scheme" content="dark light" />
        <Favicon />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
