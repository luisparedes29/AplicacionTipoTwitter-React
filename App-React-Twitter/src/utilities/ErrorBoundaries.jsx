import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        const { children, fallback } = this.props;
        if (this.state.hasError) {
            return <div className="p-6 bg-red-500 text-white">{fallback};</div>;
        }
        return children;
    }
}

export default ErrorBoundary;
