import NavTitle from "../../components/nav-title/navTitle";
import { dateText } from "../../services/date";

const Forecast = () => {
    return (
        <div>
            <NavTitle title='Forecast report'/>
            <div className="today">
                <div>{dateText.day}</div>
                <div>{dateText.date}</div>
            </div>
        </div>
    )
};

export default Forecast;