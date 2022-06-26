import "./locationSearch.css";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../../services/api";
import NavTitle from "../../components/nav-title/navTitle";
import { HiOutlineLocationMarker } from "react-icons/hi";

var weatherExport = {
    name: null,
    temp: null,
    feelsLike: null,
    isDay: null,
    humidity: null,
    cloud: null,
    airco: null,
    airno: null,
    airo: null,
    airpm: null,
    airpmm: null,
};

var searchQ = {
    searchWord: "Bucharest", //? asta ar trebui sa fie DEFAULT
};



function LocationSearch(props) {
    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        
        e.preventDefault();
        searchQ.searchWord = searchInput;
        //!weatherExport e null la prima montare a componentei si nu inteleg de ce, ca eu trimit in API searchwordul, nu se suprascrie chiar daca e initializat null?
        console.log(weatherExport);
        console.log(
            "search word: " +
                searchQ.searchWord +
                " object.temp: " +
                weatherData.temp +
                " city name " +
                weatherData.name
        );
        // navigate('/', {replace: true}); //! problema cu functia de switch, nu schimba...ramane pe search ; trebuie adaugat un validate
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
            const resLocation = response.location;
            const resAirQ = resCurrent.air_quality;
            const filteredData = {
                name: resLocation.name,

                temp: resCurrent.temp_c,
                feelsLike: resCurrent.feelslike_c,
                isDay: resCurrent.is_day,
                humidity: resCurrent.humidity,
                cloud: resCurrent.cloud,

                air_co: resAirQ.co,
                air_no: resAirQ.no2,
                air_o: resAirQ.o3,
                air_pm: resAirQ.pm2_5,
                air_pmm: resAirQ.pm10,
            };
            setWeatherData(filteredData);
        };

        getData();
        weatherExport = weatherData;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput]);

    //* - ar trebui sa mai fac un useEffect care sa urmareasca montarea initiala, asta de deasupra urmareste doar "searchInput" si cred ca deaia nu mi se monteaza orasul default

    

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
                        <HiOutlineLocationMarker />
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

// let weatherObject = {
//     location: {
//         name: "Bucharest",
//         region: "Bucuresti",
//         country: "Romania",
//         lat: 44.43,
//         lon: 26.1,
//         tz_id: "Europe/Bucharest",
//         localtime_epoch: 1656271983,
//         localtime: "2022-06-26 22:33",
//     },
//     current: {
//         last_updated_epoch: 1656271800,
//         last_updated: "2022-06-26 22:30",
//         temp_c: 19.0,
//         temp_f: 66.2,
//         is_day: 0,
//         condition: {
//             text: "Clear",
//             icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
//             code: 1000,
//         },
//         wind_mph: 2.2,
//         wind_kph: 3.6,
//         wind_degree: 344,
//         wind_dir: "NNW",
//         pressure_mb: 1017.0,
//         pressure_in: 30.03,
//         precip_mm: 0.0,
//         precip_in: 0.0,
//         humidity: 83,
//         cloud: 0,
//         feelslike_c: 19.0,
//         feelslike_f: 66.2,
//         vis_km: 10.0,
//         vis_miles: 6.0,
//         uv: 6.0,
//         gust_mph: 5.1,
//         gust_kph: 8.3,
//         air_quality: {
//             co: 210.3000030517578,
//             no2: 11.0,
//             o3: 29.0,
//             so2: 0.800000011920929,
//             pm2_5: 6.300000190734863,
//             pm10: 8.899999618530273,
//             "us-epa-index": 1,
//             "gb-defra-index": 1,
//         },
//     },
// };

// console.log(weatherObject)
