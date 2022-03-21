import { FormattedMessage } from 'react-intl';
import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useContainerQuery } from '../hooks/useContainerQuery';
import { RefreshButton } from './RefreshButton';
import { Text } from './fundamental/Text';
import { float } from '../styles/utility/layout';
import { m } from '../styles/utility/spacing';

const styles = {
  container: css`
    background-color: #000;
    color: #fff;
    padding: 1rem;
    width: 100%;
    height: 100%;
  `,
  information: css`
    padding-bottom: 0.5em;
  `,
  message: css`
    width: 100%;
  `,
  button: css`
    float: right;
    font-size: 1rem;
  `,
  errorMessage: css`
    font-family: monospace;
  `,
  title: css`
    padding: 0.25em 0;
    flex: 0 0 auto;
    font-weight: bold;
    [data-width='lg'] & {
      font-size: 2em;
    }
    [data-width='md'] & {
      font-size: 1.5em;
    }
    [data-width='sm'] &,
    [data-width='xs'] & {
      font-size: 1.25em;
    }
  `,
  summary: css`
    font-size: 0.875em;
  `,
  details: css``,
};

export interface Props {
  error: unknown;
  className?: string;
}

const widthBreakpoints = {
  xs: 0,
  sm: 150,
  md: 300,
  lg: 600,
};

function Oops({ error, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width] = useContainerQuery(ref, { width: widthBreakpoints });
  console.error(error);
  return (
    <div css={styles.container} data-width={width} className={className} ref={ref}>
      <div>
        {width !== 'xs' && (
          <div css={styles.title}>
            <FormattedMessage defaultMessage="Oops" />
          </div>
        )}
        <div>
          <RefreshButton css={width === 'xs' ? [] : [float.right, m.b(2), m.l(2)]} small text={width !== 'xs'} />
          <Text>
            <FormattedMessage defaultMessage="Something going wrong." />
          </Text>
          {width !== 'xs' && (
            <Text size="small">
              <FormattedMessage defaultMessage="This may be caused by a network problem. If the error persists after refreshing the page, please contact the admin." />
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Oops);
