import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  createContext,
  useContext,
} from "react";
import axios from "axios";

const GlobalContext = createContext();
function App() {
  const [num, setNum] = useState(100);

  return (
    <div>
      <GlobalContext value={{ num, setNum }}>
        <Header></Header>
        <Footer></Footer>
      </GlobalContext>
    </div>
  );
}

function Header() {
  const value = useContext(GlobalContext);
  return (
    <div>
      <h2>Header</h2>
      <p>{value.num}</p>
      <button onClick={() => value.setNum(++value.num)}>+</button>
    </div>
  );
}

function Footer() {
  const { num, setNum } = useContext(GlobalContext);
  return (
    <div>
      <h2>Footer</h2>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}
export default App;
