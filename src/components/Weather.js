import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Temp } from "./WeatherStyles";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=florianopolis&units=metric&appid=cfcd2f48e9f5d3b0469f5231a9e9e8bb";

export const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <Container>
      <h1>Weather</h1>
      <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
    </Container>
  );
};
