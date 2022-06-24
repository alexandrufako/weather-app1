import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";

const Home = () => {
console.log(dateText)
    return (
        <div className="home-container">
            <NavTitle title="Home" />
            <div className="today"></div>
        </div>
    );
};

export default Home;
