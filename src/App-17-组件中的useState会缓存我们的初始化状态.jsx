import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Box() {
  const [count, setCount] = useState(Math.random());

  return (
    <div>
      <p>随机数：{Math.random()}</p>
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
