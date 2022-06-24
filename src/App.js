import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForecastReport from "./pages/forecast-report/forecastReport";
import Home from "./pages/home/home";
import LocationSearch from "./pages/location-search/locationSearch";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <index element={<Home />} />
                    <Route path="/search" element={<LocationSearch />} />
                    <Route
                        path="/forecast-report"
                        element={<ForecastReport />}
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
