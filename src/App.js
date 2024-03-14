import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Display/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
