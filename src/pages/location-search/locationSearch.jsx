import "./locationSearch.css";

import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../../services/api";
import NavTitle from "../../components/nav-title/navTitle";
import { HiOutlineLocationMarker } from 'react-icons/hi'

var searchQ = {
    searchWord: "Bucharest",
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
            <p className="location-paragraf">
                Find the area or city that you want to know the detailed weather
                info at this time
            </p>
            <div className="search-container">
                <form className="search" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search for a city..."
                        name="search"
                        value={searchInput}
                        onChange={handleOnChange}
                    />
                    <button className="search-btn" type="submit">
                    <HiOutlineLocationMarker/>
                    </button>
                    
                </form>
            </div>
            <div className="cities">
                <div className="city">California</div>
                <div className="city spatiu">Paris</div>
                <div className="city">London</div>
                <div className="city">Milan</div>
            </div>
        </div>
    );
}

export default LocationSearch;

export { searchQ };
export { weatherExport };
