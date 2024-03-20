import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Display/LandingPage";
import "./App.css";
import ModalCom from "./Components/ModalCom";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
