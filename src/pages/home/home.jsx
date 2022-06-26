import "./home.css"
import HomeCast from "../../components/home/home-forecast/home-cast";
import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";
import { searchQ } from "../location-search/locationSearch";

const Home = () => {
    const cityName = searchQ.searchWord.charAt(0).toUpperCase() + searchQ.searchWord.slice(1)

    return (
        <div className="home-container">
            <>
                <NavTitle title={`${cityName}` || `Pick a location`} />
                <div className="today">{dateText.date}</div>
            </>
            <HomeCast />


        </div>
    );
};

export default Home;
