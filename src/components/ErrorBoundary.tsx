// components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from "react";

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

/**
 * 共通エラーページ
 */
export function ErrorPage({
  children = <>エラーが発生しました</>,
}: {
  children?: JSX.Element;
}): JSX.Element {
  return <>{children}</>;
}

export default ErrorBoundary;
