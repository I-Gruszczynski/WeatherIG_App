import { useEffect, useState } from "react";

const WeatherMap = () => {
  const apiKey = "52a0f9976b21d92eb4392ee274271ddd";
  const weatherMap = `https://tile.openweathermap.org/map/temp_new/20/20/20.png?appid=${apiKey}`;

  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(weatherMap);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  });

  return (
    <div>
      <img src={img} alt="Mapa Pogodowa" width="30%" height="30%" />
    </div>
  );
};

export default WeatherMap;
