import { overflow } from '../styles/utility/layout';
import { m, p } from '../styles/utility/spacing';
import { rounded } from '../styles/utility/borders';
import { bgColor } from '../styles/utility/backgrounds';
import { black, green } from '../styles/utility/color';
import { fontMono, text, textColor, whitespace } from '../styles/utility/typography';
import { FormattedMessage } from 'react-intl';
import React, { useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import { useContainerQuery } from '../hooks/useContainerQuery';
import { Theme } from '../styles/themes/light';
import { lighten } from 'color2k';
import { unit, w } from '../styles/utility/sizing';
import { RefreshButton } from './RefreshButton';
import { flex } from '../styles/utility/flex';

const sweep = keyframes`
  0%    {opacity: 80%; transform: translateY(-5px)}
  100%  {opacity: 1; transform: translateY(0)}
`;

const styles = {
  wrapper: (theme: Theme) => css`
    width: 100%;
    height: 100%;
    ${p.y(2)};
    ${p.x(4)};
    background-color: ${lighten(theme.colors.background, 0.25)};
    border: 1px solid ${theme.colors.stroke};
    box-shadow: 2px 2px 0 ${theme.colors.shadow};

    &[data-width='lg'] {
      ${p(4)}
    }
  `,
  inner: css`
    [data-width='lg'] &,
    [data-width='md'] & {
      display: flex;
    }
  `,
  errorMessage: [
    overflow.x.auto,
    p(4),
    m(0),
    m.y(2),
    rounded.normal,
    bgColor(black),
    textColor(green['400']),
    text.sm,
    fontMono,
    whitespace.pre,
  ],
  title: css`
    display: none;
    font-weight: bold;
    [data-width='md'] & {
      display: inline;
      margin-inline-end: ${unit(2)};
    }
    [data-width='lg'] & {
      display: block;
      ${m.b(2)};
      ${text.xl};
    }
  `,
  summary: css`
    cursor: pointer;
    user-select: none;
    ${text.sm};
  `,
  details: css`
    display: none;
    [data-width='md'] &,
    [data-width='lg'] & {
      display: block;
    }
    &[open] summary ~ * {
      animation: ${sweep} 0.25s ease-in-out;
    }
  `,
};

export interface Props {
  error: unknown;
  className?: string;
}

const widthBreakpoints = {
  sm: 100,
  md: 300,
  lg: 600,
};

function Oops({ error, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width] = useContainerQuery(ref, { width: widthBreakpoints });
  return (
    <div css={styles.wrapper} data-width={width} className={className} ref={ref}>
      <div css={styles.inner}>
        <div css={[m.b(2), flex.grow, w.full]}>
          <div css={styles.title}>
            <FormattedMessage defaultMessage="Oops" />
          </div>
          <FormattedMessage defaultMessage="Something going wrong" />
        </div>
        <div>
          <RefreshButton small />
        </div>
      </div>
      <details css={[styles.details]}>
        <summary css={styles.summary}>
          <FormattedMessage defaultMessage="Error Message" />
        </summary>
        <pre css={styles.errorMessage}>{String(error)}</pre>
      </details>
    </div>
  );
}

export default React.memo(Oops);
