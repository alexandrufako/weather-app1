import { searchQ } from "../pages/location-search/locationSearch";

const baseUrl = "https://api.weatherapi.com/v1/";
const apiKey = "a8c8893145184dc884f133217222306";

const aqi = "yes";  //air quality information - fara "yes" nu trimite obiectele de air_quality

const city = searchQ?.searchWord || 'Bucharest';

//call example http://api.weatherapi.com/v1/current.json?key=a8c8893145184dc884f133217222306&q=Bucharest&aqi=no

const getCurrentWeather = async () => {
    const response = await fetch(
        `${baseUrl}current.json?key=${apiKey}&q=${searchQ.searchWord}&aqi=${aqi}`
    );
    const data = await response.json();
    return data;
};

export { getCurrentWeather };
export { city };
