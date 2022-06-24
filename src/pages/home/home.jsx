import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";
import { city } from '../../services/api'

const Home = () => {

    return (
        <div className="home-container">
            <NavTitle title={city} />

            <div className="today">{dateText.day}</div>
        </div>
    );
};

export default Home;
