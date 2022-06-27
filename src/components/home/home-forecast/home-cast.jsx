import "./home-cast.css";
import icon from "../../../img/weather-icons/icon_clear_sky_day.png";

const HomeCast = ({ weatherExport }) => {
    return (
        <div className="homecast-container">
            <div className="image">
                <img src={icon} alt="" />
            </div>
            <div className="details-container">
                <div className="details">
                    <p className="p1">Temp</p>
                    <p className="p2">{`${weatherExport?.temp}°`}</p>
                </div>
                <div className="details">
                    <p className="p1">Wind</p>
                    <p className="p2">{`${weatherExport?.wind}km/h`}</p>
                </div>
                <div className="details">
                    <p className="p1">Humidity</p>
                    <p className="p2">{`${weatherExport?.humidity}%`}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCast;
