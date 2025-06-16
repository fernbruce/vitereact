import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("上海");
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const url = `http://gfeljm.tianqiapi.com/api?unescape=1&version=v63&appid=48268161&appsecret=2fqE8BUR&city=${city}`;
    console.log(url);
    axios.get(url).then((response) => {
      console.log(response.data);
      setWeatherData(response.data.hours);
    });
  }, [city]);
  useEffect(() => {}, []);
  const city1 = useRef();
  return (
    <div>
      <input type="text" defaultValue={city} ref={city1} />
      set_weather
      <button
        onClick={(event) => {
          console.log(event.target.value);
          setCity(city1.current.value);
        }}
      >
        点击
      </button>
      <ul>
        {weatherData.map((item, index) => {
          return (
            <li key={index}>
              {item.hour} {item.wea}
            </li>
          );
        })}
      </ul>
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
