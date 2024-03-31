import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "../Display/LandingPage";
import ModalCom from "../Components/ModalCom";
import AboutUs from "../Components/AboutUs";
import ListAd from "../Components/ListAd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "../Redux/Slices/isLoggedIn";

export default function StudentSpaceRoutes() {
  const [secretData, setSecretData] = useState("");
  const token = localStorage.getItem("authToken");

  const dispatch = useDispatch();

  const isLoggedin = useSelector((state) => state.isLoggedIn.isLogIn);
  console.log(isLoggedin);

  const handleAuthToken = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/authApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      });
      const json = await response.json();
      if (!json) {
        console.log("not valid");
      } else if (json.login === true) {
        dispatch(isLogged());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAuthToken();
  }, []);

  console.log(secretData);
  return (
    <div>
      {" "}
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
