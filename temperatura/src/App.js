import { useState } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";
// Curitiba
function App() {
  const [state, setState] = useState({
    weather: {},
    city: "",
  });

  function handleChangeWeather(weatherData, city) {
    setState({ weather: weatherData, city: city });
  }

  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} state= {state} setState={setState} />
      <DisplayWeather info={state} />
    </div>
  );
}

export default App;
