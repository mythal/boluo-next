import React, { Component, ErrorInfo } from 'react';
import Oops from './Oops';
import { ChildrenProps, StyleProps } from '../helper/props';

interface Props extends ChildrenProps, StyleProps {}

interface State {
  error: unknown;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }
  override componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error(errorInfo);
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  override render() {
    if (this.state.error) {
      return <Oops error={this.state.error} />;
    } else {
      return this.props.children;
    }
  }
}
