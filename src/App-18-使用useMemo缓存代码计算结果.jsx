import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";

function Box() {
  const [count, setCount] = useState(Math.random());
  const [val, setVal] = useState("");
  const func = Math.random();
  const func_cache = useMemo(() => {
    return Math.random();
  }, [val]);

  return (
    <div>
      <p>随机数：{func}</p>
      <p>随机数[useMemo]:{func_cache}</p>
      <p>
        val=
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Box子组件的按钮,count={count}
      </button>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        App组件的按钮，count={count}
      </button>
      <Box></Box>
    </div>
  );
}

// App.set_weather = () => {
//   axios
//     .get(
//       `https://tianqiapi.com/api?version=v6&appid=47894607&appsecret=qYQJ08Yu&city=${city}`
//     )
//     .then((res) => {
//       console.log(res.data);
//       setWeatherData(res.data.hours);
//     });
// };
export default App;
