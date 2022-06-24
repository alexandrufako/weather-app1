import "./locationSearch.css";

import React, { useState, useEffect, useRef } from "react";
import { getCurrentWeather } from "../../services/api";
import NavTitle from "../../components/nav-title/navTitle";


function LocationSearch(props) {
    const [searchInput, setSearchInput] = useState({
        query: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(searchInput);
    };
    console.log(searchInput)

    const handleOnChange = (e) => {
        const inputQ = e.target.query;
        const inputValue = e.target.value;
        const tempValue = {...searchInput};
        tempValue[inputQ] = inputValue;
        setSearchInput(tempValue);
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
    }, []);

    return (
        <div className=".location-container">
            <NavTitle title="Pick location" />
            <p>
                Find the area or city that you want to know the detailed weather
                info at this time
            </p>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    value={searchInput.q}
                    type="text"
                    placeholder="Search for a city..."
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

