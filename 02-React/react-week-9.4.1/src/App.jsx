import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <Card1 />
      <Card2 />
    </div>
  );
}

function Card1() {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: 20,
        margin: 10,
        borderRadius: 20,
        textAlign: "center",
        fontSize: 40,
        color: "white",
      }}
    >
      hello
    </div>
  );
}

function Card2() {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: 20,
        margin: 10,
        borderRadius: 20,
        textAlign: "center",
        fontSize: 40,
        color: "white",
      }}
    >
      hello
    </div>
  );
}

const BuggyComponent = () => {
  throw new Error("I crashed!");
};

export default App;
