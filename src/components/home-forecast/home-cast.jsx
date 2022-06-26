import { weatherExport } from "../../pages/location-search/locationSearch";

const HomeCast = () => {
    return (
        <div className="homecast-container">
            <div className="image"></div>
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