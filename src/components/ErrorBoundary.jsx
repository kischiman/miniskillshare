import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          fontFamily: 'system-ui', 
          maxWidth: '800px', 
          margin: '0 auto',
          color: '#27272a'
        }}>
          <h1 style={{ color: '#dc2626', marginBottom: '20px' }}>Something went wrong</h1>
          <p style={{ marginBottom: '20px' }}>{this.state.error?.message || 'An unexpected error occurred'}</p>
          <details style={{ marginTop: '20px' }}>
            <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>Error details</summary>
            <pre style={{ 
              background: '#f4f4f5', 
              padding: '15px', 
              borderRadius: '4px', 
              overflow: 'auto',
              fontSize: '12px'
            }}>
              {this.state.error?.stack}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#18181b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
