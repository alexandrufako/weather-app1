import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";

const Home = () => {
//  const day = dateText;
 console.log(dateText)
    return (
        <div className="home-container">
            <NavTitle title="Home" />

            <div className="today">{dateText.day}</div>
        </div>
    );
};

export default Home;
