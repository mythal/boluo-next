import { FormattedMessage } from 'react-intl';
import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useContainerQuery } from '../hooks/useContainerQuery';
import { Text } from './fundamental/Text';
import { text } from '../styles/utility/typography';
import { float } from '../styles/utility/layout';
import { RefreshButton } from './RefreshButton';
import { m } from '../styles/utility/spacing';
import { w } from '../styles/utility/sizing';
import Icon from './fundamental/Icon';

const styles = {
  container: css`
    padding: 1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
};

export interface Props {
  error: unknown;
  className?: string;
}

const config = {
  width: {
    xs: 0,
    sm: 150,
    md: 300,
  },
  height: {
    xs: 0,
    sm: 100,
    md: 150,
  },
};

function OopsXs({}: Props) {
  return (
    <div css={w.full}>
      <Text>
        <FormattedMessage defaultMessage="Something going wrong." />{' '}
        <a href="#" onClick={() => window.location.reload()}>
          <Icon icon="refresh" css={m.r(1)} />
          <FormattedMessage defaultMessage="refresh" />
        </a>
      </Text>
    </div>
  );
}

function OopsMd({}: Props) {
  return (
    <>
      <RefreshButton css={[float.right, m.b(2), m.l(2)]} text={false} small />
      <Text css={[text.lg]}>
        <FormattedMessage defaultMessage="Oops" />
      </Text>
      <Text size="small">
        <FormattedMessage defaultMessage="Something going wrong." />
      </Text>
    </>
  );
}
function OopsLg({}: Props) {
  return (
    <>
      <RefreshButton css={[float.right, m.b(2), m.l(2)]} text />
      <Text css={[text.xl]}>
        <FormattedMessage defaultMessage="Oops" />
      </Text>
      <Text>
        <FormattedMessage defaultMessage="Something going wrong." />
      </Text>
      <Text size="small">
        <FormattedMessage defaultMessage="This may be caused by a network problem. If the error persists after refreshing the page, please contact the admin." />
      </Text>
    </>
  );
}
function Oops({ error, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, height] = useContainerQuery(ref, config);
  console.error(error);
  let oops;

  if (width === 'xs' || height === 'xs') {
    oops = <OopsXs error={error} />;
  } else if (height === 'md' && width === 'md') {
    oops = <OopsLg error={error} />;
  } else {
    oops = <OopsMd error={error} />;
  }

  return (
    <div css={styles.container} data-width={width} data-height={height} className={className} ref={ref}>
      {oops}
    </div>
  );
}

export default React.memo(Oops);
