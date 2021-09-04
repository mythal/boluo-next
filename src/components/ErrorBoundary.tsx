import React, { Component, ErrorInfo } from 'react';
import Oops from './Oops';

interface Props {
  className?: string;
}

interface State {
  error: unknown;
}

export class ErrorBoundary extends Component<Props, State> {
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
      return <Oops error={this.state.error} />;
    } else {
      return this.props.children;
    }
  }
}
