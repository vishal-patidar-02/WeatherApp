import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  let accessToken = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let imgResponse = await fetch(
        `https://api.unsplash.com/search/photos?query=${city}&client_id=${accessToken}`
      );
      let jsonimgResponse = await imgResponse.json();
      let result = {
        city: city,
        img: jsonimgResponse.results[0].urls.regular,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        wind: jsonResponse.wind.speed,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox" onSubmit={handleSubmit}>
      <form action="">
        <TextField
          required
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <h3 style={{ color: "red" }}> "City Not Found"</h3>}
    </div>
  );
}
