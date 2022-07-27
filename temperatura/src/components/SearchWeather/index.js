import { useEffect, useState } from "react";

import "./style.css";

function SearchWeather({ handleChangeWeather }) {
  const [inputValue, setInputValue] = useState("Curitiba");


  function HandleSubmit() {
    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((response) => response.json())
      .then((response) => {
        handleChangeWeather(response, inputValue);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    HandleSubmit();
  }, []);

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue( e.target.value )}
        />
      </div>
      <div>
        <button className="search-button" onClick={HandleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchWeather;
