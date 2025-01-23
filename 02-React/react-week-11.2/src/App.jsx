import Counter from "./components/counter";
// import CounterContextProvider from "./components/counter-context-provider";
import Decrease from "./components/decrease";
import Increase from "./components/Increase";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Increase />
      <Decrease />
    </RecoilRoot>
  );
}

export default App;

//  <CounterContextProvider>
//       <Counter />
//       <Increase />
//       <Decrease />
//     </CounterContextProvider>
