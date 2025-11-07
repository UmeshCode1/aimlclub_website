"use client";
import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error boundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6 inline-flex p-6 rounded-full bg-red-500/10 border border-red-500/20">
              <AlertTriangle size={48} className="text-red-500" />
            </div>
            
            <h2 className="text-3xl font-bold mb-3">Something went wrong</h2>
            
            <p className="text-white/60 mb-6">
              We encountered an unexpected error. Don't worry, it's not your fault!
            </p>

            {this.state.error && (
              <details className="mb-6 p-4 bg-white/5 rounded-lg text-left text-sm">
                <summary className="cursor-pointer text-white/70 hover:text-white transition-colors mb-2">
                  Error details
                </summary>
                <pre className="text-xs text-red-400 overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}

            <button
              onClick={this.handleReset}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <RefreshCw size={18} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
