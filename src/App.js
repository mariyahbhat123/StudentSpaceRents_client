import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./Display/LandingPage";
import "./App.css";
import ModalCom from "./Components/ModalCom";
import AboutUs from "./Components/AboutUs";
import ListAd from "./Components/ListAd";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/ListAd" element={<ListAd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
