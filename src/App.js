import "./App.css";
import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "./services/api";

function App() {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await getCurrentWeather();
            console.log(response.current);
            const resCurrent = response.current;
            const filteredData = resCurrent.map((weatherObj, index) => {
                return {
                    temp: weatherObj.temp_c,
                    feelsLike: weatherObj.feelslike_c,
                    isDay: weatherObj.is_day,
                    humidity: weatherObj.humidity,
                    cloud: weatherObj.cloud,
                };
            });
            console.log(filteredData);
            setWeatherData(filteredData);
        };
        getData();
    }, []);

    return (
        <div className="App">
            <h1>TEST 1 2 3 4</h1>
        </div>
    );
}

export default App;
