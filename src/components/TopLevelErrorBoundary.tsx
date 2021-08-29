import React, { Component, ErrorInfo } from 'react';
import { overflow } from '../styles/utility/layout';
import { p } from '../styles/utility/spacing';
import { bgColor } from '../styles/utility/backgrounds';
import { black, green } from '../styles/utility/color';
import { fontMono, text, textColor, whitespace } from '../styles/utility/typography';
import { rounded } from '../styles/utility/borders';
import { FormattedMessage } from 'react-intl';

const styles = {
  errorMessage: [
    overflow.x.auto,
    p(4),
    rounded.normal,
    bgColor(black),
    textColor(green['400']),
    text.sm,
    fontMono,
    whitespace.pre,
  ],
};

export function Oops({ error }: { error: string }) {
  return (
    <div css={p(8)}>
      <h1>
        <FormattedMessage defaultMessage="Oops" />
      </h1>
      <p>
        <FormattedMessage defaultMessage="Something going wrong" />
      </p>
      <pre css={styles.errorMessage}>{error}</pre>
    </div>
  );
}

interface Props {
  className?: string;
}

interface State {
  error: unknown;
}

export class TopLevelErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }
  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error(errorInfo);
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <Oops error={String(this.state.error)} />;
    } else {
      return this.props.children;
    }
  }
}
