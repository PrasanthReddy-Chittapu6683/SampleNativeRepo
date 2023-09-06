import React from "react";
import { onError } from "../services/errors";

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    onError(error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
