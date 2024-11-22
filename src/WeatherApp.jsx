import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    img: "https://images.unsplash.com/photo-1436459826008-8fd497f03742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzgzMDB8MHwxfHNlYXJjaHw5fHxoYXplJTIwRW52aXJvbWVudHxlbnwwfHx8fDE3MzIyNjgzMzd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    city: "Noida",
    feelsLike: 21.57,
    humidity: 46,
    temp: 22.1,
    tempMax: 22.1,
    tempMin: 22.1,
    weather: "haze",
    wind: 1.54,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Weather app by vishal</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
