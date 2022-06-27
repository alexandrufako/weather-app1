import "./home-air-quality.css"

const HomeAirQ = ({ weatherExport }) => {
    return (
        <div className="home-air-container">
            <div className="air-details">
                <p className="">CO2</p>
                <p className="">{`${weatherExport?.airco?.toFixed(2)}`}</p>
            </div>
            <div className="air-details"></div>
            <div className="air-details"></div>
            <div className="air-details"></div>
            <div className="air-details"></div>
        </div>
    );
};

export default HomeAirQ;

// air_co: resAirQ.co,
//                 air_no: resAirQ.no2,
//                 air_o: resAirQ.o3,
//                 air_pm: resAirQ.pm2_5,
//                 air_pmm: resAirQ.pm10,
