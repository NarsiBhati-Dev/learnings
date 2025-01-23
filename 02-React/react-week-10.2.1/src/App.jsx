import CounterContextProvider from "./components/counter-context-provider";
import Parent from "./components/parent";

function App() {
  return (
    <CounterContextProvider>
      <Parent />
    </CounterContextProvider>
  );
}

export default App;
