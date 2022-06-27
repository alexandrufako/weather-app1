import "./home.css";
import HomeCast from "../../components/home/home-forecast/home-cast";
import HomeAirQ from "../../components/home/home-air-quality/home-air-quality";
import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";
import { searchQ } from "../location-search/locationSearch";
import React, { useState } from "react";

const Home = () => {
    const [select, setSelect] = useState({
        forecast: "select-home-comp",
        airQ: "",
        container: <HomeCast />,
    });

    const handleSelect = (p) => {
        const tempSelect = { ...select };

        switch (p) {
            case "forecast":
                return (
                    (tempSelect.forecast = "select-home-comp"),
                    (tempSelect.airQ = ""),
                    (tempSelect.container = <HomeCast />),
                    setSelect(tempSelect)
                );

            case "airQ":
                return (
                    (tempSelect.forecast = ""),
                    (tempSelect.airQ = "select-home-comp"),
                    (tempSelect.container = <HomeAirQ />),
                    setSelect(tempSelect)
                );

            default:
                return (
                    (tempSelect.forecast = "select-home-comp"),
                    (tempSelect.airQ = ""),
                    (tempSelect.container = <HomeCast />),
                    setSelect(tempSelect)
                );
        }
    };

    const cityName =
        searchQ.searchWord.charAt(0).toUpperCase() +
        searchQ.searchWord.slice(1);

    return (
        <div className="home-container">
            <>
                <NavTitle title={`${cityName}` || `Pick a location`} />
                <div className="today">{dateText.date}</div>
            </>
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
            {select.container}
        </div>
    );
};

export default Home;
