import "./home-cast.css";

import React, { useState } from "react";
import { weatherExport } from "../../../pages/location-search/locationSearch";
import icon from "../../../img/weather-icons/icon_clear_sky_day.png";

const HomeCast = () => {
    const [select, setSelect] = useState({
        forecast: "select-home-comp",
        airQ: "",
    });

    const handleSelect = (p) => {
        const tempSelect = { ...select };

        switch (p) {
            case "forecast":
                return (
                    (tempSelect.forecast = "select-home-comp"),
                    (tempSelect.airQ = ""),
                    setSelect(tempSelect)
                );

            case "airQ":
                return (
                    (tempSelect.forecast = ""),
                    (tempSelect.airQ = "select-home-comp"),
                    setSelect(tempSelect)
                );

            default:
                return (
                    (tempSelect.forecast = "select-home-comp"),
                    (tempSelect.airQ = ""),
                    setSelect(tempSelect)
                );
        }
    };

    return (
        <div className="homecast-container">
            <div className="switch">
                <div
                    className={`switch-btn ${select.forecast}`}
                    onClick={() => handleSelect("forecast")}
                >
                    Forecast
                </div>
                <div
                    className={`switch-btn ${select.airQ}`}
                    onClick={() => handleSelect("airQ")}
                >
                    Air quality
                </div>
            </div>
            <div className="image">
                <img src={icon} alt="" />
            </div>
            <div className="details-container">
                <div className="details">
                    <p className="p1">Temp</p>
                    <p className="p2">16°</p>
                </div>
                <div className="details">
                    <p className="p1">Wind</p>
                    <p className="p2">10km/h</p>
                </div>
                <div className="details">
                    <p className="p1">Humidity</p>
                    <p className="p2">75%</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCast;
console.log(weatherExport);
