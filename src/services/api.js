const baseUrl = 'http://api.weatherapi.com/v1/'
const apiKey = 'a8c8893145184dc884f133217222306'
const city = 'Bucharest'
const aqi = 'no'

//call example http://api.weatherapi.com/v1/current.json?key=a8c8893145184dc884f133217222306&q=Bucharest&aqi=no

const getCurrentWeather = async() => {
const response = await fetch(`${baseUrl}current.json?key=${apiKey}&q=${city}&aqi=${aqi}`);
const data = await response.json();
return data;
}

export { getCurrentWeather };
