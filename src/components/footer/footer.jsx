import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiTwotoneHome } from "react-icons/ai";
import { RiSearchFill } from "react-icons/ri";
import { BsFileBarGraphFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import "./footer.css";

const Footer = () => {
    const [select, setSelect] = useState({
        home: <AiTwotoneHome />,
        search: <RiSearchLine/>,
        forecast: <BsFileBarGraph/>,
        settings: <FiSettings/>,
    });

    const selected = (param) => {
        const tempObj = { ...select };

        switch (param) {
            case "home":
                return (
                    tempObj.home= <AiTwotoneHome />,
                    tempObj.search= <RiSearchLine/>,
                    tempObj.forecast= <BsFileBarGraph/> ,
                    tempObj.settings= <FiSettings/> ,
                    setSelect(tempObj)
                )
        

            case "search":
                return (
                    tempObj.home= <FiHome/> ,
                    tempObj.search= <RiSearchFill/> ,
                    tempObj.forecast= <BsFileBarGraph/> ,
                    tempObj.settings= <FiSettings/> ,
                    setSelect(tempObj)
                )

            case "forecast":
                return (
                    tempObj.home= <FiHome/> ,
                    tempObj.search= <RiSearchLine/> ,
                    tempObj.forecast= <BsFileBarGraphFill/>,
                    tempObj.settings= <FiSettings/> ,
                    setSelect(tempObj)
                )

            case "settings":
                return (
                    tempObj.home= <FiHome/> ,
                    tempObj.search= <RiSearchLine/> ,
                    tempObj.forecast= <BsFileBarGraph/> ,
                    tempObj.settings= <IoMdSettings/> ,
                    setSelect(tempObj)
                )

            default:
                return (
                    tempObj.home= <FiHome/> ,
                    tempObj.search= <RiSearchLine/> ,
                    tempObj.forecast= <BsFileBarGraph/> ,
                    tempObj.settings= <FiSettings/> ,
                    setSelect(tempObj)
                );
        };
        
    };
    // console.log(select.home);
    return (
        <div className="footer-container">
            <Link
                to="/"
                className={`footer-btn `}
                onClick={() => selected("home")}
            >
                {select.home}
            </Link>
            <Link
                to="/search"
                className={`footer-btn `}
                onClick={() => selected("search")}
            >
                {select.search}
            </Link>
            <Link
                to="/forecast"
                className={`footer-btn `}
                onClick={() => selected("forecast")}
            >
                {select.forecast}
            </Link>
            <Link
                to="/settings"
                className={`footer-btn `}
                onClick={() => selected("settings")}
            >
                {select.settings}
            </Link>
        </div>
    );
};

export default Footer;
