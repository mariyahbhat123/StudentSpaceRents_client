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
import { ownerLoggedIn } from "../Redux/Slices/ownerIsLogged";

export default function StudentSpaceRoutes() {
  const [secretData, setSecretData] = useState("");
  const token = localStorage.getItem("authToken");
  const ownerToken = localStorage.getItem("ownerAuthToken");

  const dispatch = useDispatch();

  const isLoggedin = useSelector((state) => state.isLoggedIn.isLogIn);
  console.log(isLoggedin);

  const ownerIsLogged = useSelector((state) => state.ownerLogOrNot);
  console.log(ownerIsLogged);

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

  //OWNER TOKEN
  const handleOwnerAuthToken = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/ownerAuthApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: ownerToken }),
      });
      const json = await response.json();
      if (!json) {
        console.log("not valid");
      } else if (json.login === true) {
        dispatch(ownerLoggedIn());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAuthToken();
    handleOwnerAuthToken();
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
