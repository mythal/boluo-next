import { FormattedMessage } from 'react-intl';
import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useContainerQuery } from '../hooks/useContainerQuery';
import { RefreshButton } from './RefreshButton';
import { Text } from './fundamental/Text';

const styles = {
  container: css`
    background-color: #000;
    color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25), 0 0 0.25rem rgba(0, 0, 0, 0.125);
    padding: 1rem;
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
  sm: 150,
  md: 300,
  lg: 600,
};

function Oops({ error, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width] = useContainerQuery(ref, { width: widthBreakpoints });
  return (
    <div data-width={width} className={className} ref={ref}>
      <div>
        <div>
          <FormattedMessage defaultMessage="Oops" />
        </div>
        <div>
          <Text>
            <FormattedMessage defaultMessage="Something going wrong." />
          </Text>
          {width === 'lg' && (
            <Text>
              <FormattedMessage defaultMessage="This may be caused by a network problem. If the error persists after refreshing the page, please contact the admin." />
            </Text>
          )}
          <RefreshButton small />
        </div>
      </div>
      <details>
        <summary>
          <FormattedMessage defaultMessage="Error Message" />
        </summary>
        <pre>{String(error)}</pre>
      </details>
    </div>
  );
}

export default React.memo(Oops);
