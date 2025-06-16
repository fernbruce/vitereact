import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Box() {
  useEffect(() => {
    let num = 1;
    let timer = setInterval(() => {
      console.log(num + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div>
        <img src="https://objectstorageapi.eu-central-1.run.claw.cloud/gg2hxe1z-test/cat.png" />
      </div>
    </div>
  );
}
function App() {
  const [showBox, setShowBox] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowBox(!showBox);
        }}
      >
        点击
      </button>
      {showBox && <Box />}
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
