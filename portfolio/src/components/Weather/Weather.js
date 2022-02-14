
import { useState } from 'react';
import GoodWeather from './GoodWeather/GoodWeather';
import BadWeather from './BadWeather/BadWeather';
import './Weather.css';

const Weather = () => {
    const [weather, setWeather] = useState('');
    const api = {
        key: "cd2d34b312b2bd644e90276c6357b45e",
        base: "https://api.openweathermap.org/data/2.5/"
      }
    const getWeather = () => {
        fetch(`${api.base}weather?q=Hannover&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result.main.temp);
        });
    }
    
    
    return <div>
        <button className="funcButton" onClick={getWeather()}></button>
        <h1>{weather}</h1>
         </div>
}

export default Weather;