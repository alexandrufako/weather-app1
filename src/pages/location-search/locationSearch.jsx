import "./locationSearch.css";

import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../../services/api";
import NavTitle from "../../components/nav-title/navTitle";

var searchQ = {
    searchWord: "Pick a city",
};

var weatherExport = {
    temp: null,
    feelsLike: null,
    isDay: null,
    humidity: null,
    cloud: null,
};

function LocationSearch(props) {
    const [searchInput, setSearchInput] = useState("");
    const [start, setStart] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchQ.searchWord = searchInput;
        setStart(start + 1);
        console.log(weatherExport);
    };

    const handleOnChange = (e) => {
        const inputValue = e.target.value;
        let tempObj = inputValue;
        setSearchInput(tempObj);
    };

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
        weatherExport = weatherData;
    }, [start]);

    return (
        <div className=".location-container">
            <NavTitle title="Pick location" />
            <p>
                Find the area or city that you want to know the detailed weather
                info at this time
            </p>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a city..."
                    name="search"
                    value={searchInput}
                    onChange={handleOnChange}
                />
                <button type="submit">Search</button>
            </form>
            <div className="city">California</div>
            <div className="city">Paris</div>
            <div className="city">London</div>
            <div className="city">Milan</div>
        </div>
    );
}

export default LocationSearch;

export { searchQ };
export { weatherExport };