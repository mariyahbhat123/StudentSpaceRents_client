import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "../Display/LandingPage";
import TermsConditionMain from "./TermsAndConditionPage/TermsConditionMain";
import ModalCom from "../Components/ModalCom";
import AboutUs from "../Display/AboutUs";
import ListAd from "../Components/ListAd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "../Redux/Slices/isLoggedIn";
import { ownerLoggedIn } from "../Redux/Slices/ownerIsLogged";
import AddProperty from "./AddProperty";
import GoogleMaps from "./GoogleMaps";
import PropertyDetail from "./PropertyDetail";

import HowToUseMain from "./HowUse/HowToUseMain";
import { adminIsLoggedIn } from "../Redux/Slices/adminLog";
import ScheduleVisit from "./ScheduleVisit";
import Loading from "./Loading/Loading";

export default function StudentSpaceRoutes() {
  const [secretData, setSecretData] = useState("");
  const token = localStorage.getItem("authToken");
  const ownerToken = localStorage.getItem("ownerAuthToken");
  const adminToken = localStorage.getItem("adminAuthToken");

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

  //ADMIN TOKEN
  const handleadminAuthToken = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/adminAuthApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: adminToken }),
      });
      const json = await response.json();
      if (!json) {
        console.log("not valid");
      } else if (json.login === true) {
        dispatch(adminIsLoggedIn());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAuthToken();
    handleOwnerAuthToken();
    handleadminAuthToken();
  }, []);

  console.log(secretData);
  return (
    <div>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/howToUse" element={<HowToUseMain />} />
          <Route path="/termsAndCondition" element={<TermsConditionMain />} />
          <Route path="/ScheduleVisit" element={<ScheduleVisit />} />

          <Route path="/ListAd" element={<ListAd />} />
          <Route path="/googleMaps" element={<GoogleMaps />} />
          <Route path="/PropertyDetail" element={<PropertyDetail />} />
          <Route path="/Load" element={<Loading />} />
        </Routes>
      </Router>
    </div>
  );
}
