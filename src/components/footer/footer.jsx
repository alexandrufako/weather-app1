import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
    const [select, setSelect] = useState({
        home: "",
        search: "",
        forecast: "",
        settings: "",
    });

    const selected = (param) => {
        const tempObj = { ...select };

        switch (param) {
            case "home":
                return (
                    tempObj.home= "selected",
                    tempObj.search= "",
                    tempObj.forecast= "",
                    tempObj.settings= "",
                    setSelect(tempObj)
                )
        

            case "search":
                return (
                    tempObj.home= "",
                    tempObj.search= "search",
                    tempObj.forecast= "",
                    tempObj.settings= "",
                    setSelect(tempObj)
                )

            case "forecast":
                return (
                    tempObj.home= "",
                    tempObj.search= "",
                    tempObj.forecast= "selected",
                    tempObj.settings= "",
                    setSelect(tempObj)
                )

            case "settings":
                return (
                    tempObj.home= "",
                    tempObj.search= "",
                    tempObj.forecast= "",
                    tempObj.settings= "selected",
                    setSelect(tempObj)
                )

            default:
                return (
                    tempObj.home= "",
                    tempObj.search= "",
                    tempObj.forecast= "",
                    tempObj.settings= "",
                    setSelect(tempObj)
                );
        };
        
    };
    // console.log(select.home);
    return (
        <div className="footer-container">
            <Link
                to="/"
                className={`footer-btn ${select.home}`}
                onClick={() => selected("home")}
            >
                <FiHome />
            </Link>
            <Link
                to="/search"
                className={`footer-btn ${select.search}`}
                onClick={() => selected("search")}
            >
                <FiSearch />
            </Link>
            <Link
                to="/forecast"
                className={`footer-btn ${select.forecast}`}
                onClick={() => selected("forecast")}
            >
                <MdAutoGraph />
            </Link>
            <Link
                to="/settings"
                className={`footer-btn ${select.settings}`}
                onClick={() => selected("settings")}
            >
                <FiSettings />
            </Link>
        </div>
    );
};

export default Footer;
