import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Logo from '../../public/logo.svg';
import { FormattedMessage } from 'react-intl';
import { DEVELOPMENT } from '../const';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const container = css`
  width: 20em;
  margin: 10vh auto;
`;

const title = css`
  text-decoration: none;
`;
const Home: NextPage = () => {
  const favicon = DEVELOPMENT ? '/logo.dev.svg' : '/logo.svg';
  const [color, setColor] = useState('#000000');
  return (
    <div>
      <Head>
        <title>Boluo Next</title>
        <meta name="description" content="RPG tool, next generation" />
        <link rel="icon" href={favicon} type="image/svg+xml" />
      </Head>

      <main css={container}>
        <Logo
          css={css`
            float: right;
          `}
        />
        <h1 css={title} style={{ color }}>
          <FormattedMessage defaultMessage="Welcome" />
        </h1>
        <div>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </main>
    </div>
  );
};

export default Home;
