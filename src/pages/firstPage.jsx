import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../services/api";
import {LocationNav} from '../components/locationNav/locationNav'

function FirstPage() {
// eslint-disable-next-line
const [weatherData, setWeatherData] = useState(); 

useEffect(() => {
    const getData = async () => {
        const response = await getCurrentWeather();
        const resCurrent = response.current;
        const filteredData =   {
                temp: resCurrent.temp_c,
                feelsLike: resCurrent.feelslike_c,
                isDay: resCurrent.is_day,
                humidity: resCurrent.humidity,
                cloud: resCurrent.cloud,
            };
        setWeatherData(filteredData);
    };
    getData();
}, []);

return (
    <div className="App">
        <LocationNav/>
    </div>
);
}

export {FirstPage};