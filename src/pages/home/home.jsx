import "./home.css";
import HomeCast from "../../components/home/home-forecast/home-cast";
import HomeAirQ from "../../components/home/home-air-quality/home-air-quality";
import NavTitle from "../../components/nav-title/navTitle";
import { getCurrentWeather } from "../../services/api";
import { dateText } from "../../services/date";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [select, setSelect] = useState({
    forecast: "select-home-comp",
    airQ: "",
    container: "forecast",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCurrentWeather(null, "yes");
        console.log({ res });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, []);

  const handleSelect = (p) => {
    const tempSelect = { ...select };

    switch (p) {
      case "forecast":
        tempSelect.forecast = "select-home-comp";
        tempSelect.airQ = "";
        tempSelect.container = "forecast";
        setSelect(tempSelect);
        break;
      case "airQ":
        tempSelect.forecast = "";
        tempSelect.airQ = "select-home-comp";
        tempSelect.container = "airQ";
        setSelect(tempSelect);
        break;
      default:
        tempSelect.forecast = "select-home-comp";
        tempSelect.airQ = "";
        tempSelect.container = "forecast";
        setSelect(tempSelect);
        break;
    }
  };

  const cityName = "";
  // searchQ.searchWord.charAt(0).toUpperCase() + searchQ.searchWord.slice(1);

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
      {select.container === "forecast" && <HomeCast />}
      {select.container === "airQ" && <HomeAirQ />}
    </div>
  );
};

export default Home;
