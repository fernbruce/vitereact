import React, { useState, useEffect, use } from "react";

import axios from "axios";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
};

function useAxiosGet(city) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const url = `http://gfeljm.tianqiapi.com/api?unescape=1&version=v63&appid=48268161&appsecret=2fqE8BUR&city=${city.value}`;
  console.log(url);
  useEffect(() => {
    console.log("useEffect");
    axios
      .get(url)
      .then((res) => {
        console.log("res:", res);
        setData(res.data.hours);
        res.data.hours.map((item) => {
          console.log("item:", item.hours);
        });
      })
      .catch((err) => {
        console.log("err", err);
        setError(err);
      });
  }, [url]);

  return [data, error];
}

function useTable(city, data) {
  return (
    <>
      <input type="text" {...city} />
      <button onClick={() => useAxios(city.value)}>获取天气</button>
      {city.value}
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
          {data?.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.hours}</td>
                <td>
                  {item.wea}-{item.tem}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
function App() {
  const city = useInput("北京");
  const [data, error] = useAxiosGet(city);
  console.log("data:", data);
  console.log("error", error);
  const ui = useTable(city, data);
  return <div>{ui}</div>;
}
export default App;
