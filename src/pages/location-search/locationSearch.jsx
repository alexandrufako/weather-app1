import './locationSearch.css'

import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../../services/api";
import NavTitle from "../../components/nav-title/navTitle";

function LocationSearch() {
    // eslint-disable-next-line
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await getCurrentWeather();
            const resCurrent = response.current;
            const filteredData = {
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
        <div className=".location-container">
            <NavTitle title='Forecast report'/>
            <p>
                Find the area or city that you want to know the detailed weather
                info at this time
            </p>
            <div className="city">California</div>
            <div className="city">Paris</div>
            <div className="city">London</div>
            <div className="city">Milan</div>
        </div>
    );
}

export default LocationSearch;
