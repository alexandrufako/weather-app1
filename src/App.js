import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import LocationSearch from "./pages/location-search/locationSearch";
import Footer from "./components/footer/footer";
import Forecast from "./pages/forecast/forecastReport";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/search" element={<LocationSearch />} />
                    <Route path="/forecast" element={<Forecast />} />
                    <Route path="/settings" element={<Forecast />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
