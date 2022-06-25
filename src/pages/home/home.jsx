import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";
import { searchQ } from "../location-search/locationSearch";

const Home = () => {

    return (
        <div className="home-container">
            <NavTitle title={`${searchQ.searchWord}` || `Pick a city`} />

            <div className="today">{dateText.day}</div>
        </div>
    );
};

export default Home;
