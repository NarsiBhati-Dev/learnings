import Light from "./components/light";
import ToggleBTN from "./components/toggle-btn";
import BulbProvider from "./components/bulb-provider";

function App() {
  return (
    <BulbProvider>
      <Light />
      <ToggleBTN />
    </BulbProvider>
  );
}

export default App;
