import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  createContext,
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
  return (
    <GlobalContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>Header</h2>
            <p>{value.num}</p>
            <button onClick={() => value.setNum(++value.num)}>+</button>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
}

function Footer() {
  // const { num, setNum } = useContext(GlobalContext);
  return (
    <GlobalContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>Footer</h2>
            <p>{value.num}</p>
            <button onClick={() => value.setNum(++value.num)}>+</button>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
}
export default App;
