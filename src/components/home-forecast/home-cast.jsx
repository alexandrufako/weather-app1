import { weatherExport } from "../../pages/location-search/locationSearch";
import icon from '../../img/weather-icons/icon_clear_sky_day.png'

const HomeCast = () => {
    return (
        <div className="homecast-container">
            <div className="image"><img src={icon} alt="" /></div>
            <div className="temp">
                <p className="p1"></p>
                <p className="p2"></p>
            </div>
            <div className="wind">
                <p className="p1"></p>
                <p className="p2"></p>
            </div>
            <div className="humidity">
                <p className="p1"></p>
                <p className="p2"></p>
            </div>
        </div>
    );
};

export default HomeCast;
console.log(weatherExport);