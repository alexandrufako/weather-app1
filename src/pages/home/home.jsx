import "./home.css"

import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";
import { searchQ } from "../location-search/locationSearch";

const Home = () => {
    return (
        <div className="home-container">
            <>
                <NavTitle title={`${searchQ.searchWord}` || `Pick a location`} />
                <div className="today">{dateText.date}</div>
            </>


        </div>
    );
};

export default Home;
