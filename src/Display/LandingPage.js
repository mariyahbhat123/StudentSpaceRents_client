import React, { useEffect, useState } from "react";
import NavBar from "../Components/navBar";
import CarouselComponent from "../Components/CarouselComponent";
import CardComponent from "../Components/CardComponent";
import "../Styles/landingPage.css";
import CardCarouselCom from "../Components/CardCarouselCom";

import SearchBar from "../Components/SearchBar";
import FooterCom from "../Components/FooterCom";
import WebsiteReviews from "../Components/WebsiteReviews";

import { useSelector, useDispatch } from "react-redux";
import { isLogged, isNotLogged } from "../Redux/Slices/isLoggedIn";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "react-bootstrap/esm/Button";
import {
  dontShowProfileUser,
  showProfileUser,
} from "../Redux/Slices/showProfileModalSlice";
import ProfileModal from "../Components/ProfileModal";
import { dontShowUserProfile } from "../Redux/Slices/showProfileSlice";
import { ownerNotLogged } from "../Redux/Slices/ownerIsLogged";
import { adminIsNotLogged } from "../Redux/Slices/adminLog";

export default function LandingPage() {
  const TOP_OFFSET = 600;
  const [navBackground, setNavBackground] = useState(false);
  const [propertyData, setPropertyData] = useState([]);

  //SHOW PROFILE DROPDOWN
  const showProfile = useSelector(
    (state) => state.showUsersProfile.showUserProfile
  );
  console.log(showProfile);

  //SHOW PROFILE DATA MODAL
  const showProfileModal = useSelector(
    (state) => state.showProfileModal.showProMod
  );

  //User Logged Slice
  const isLogged = useSelector((state) => state.isLoggedIn.isLogIn);
  console.log(isLogged);

  //OWNER LOGGED SLICE
  const ownerIsLogged = useSelector((state) => state.ownerLogOrNot.ownerIsLog);
  const dispatch = useDispatch();
  //ADMIN LOGGED STATE
  const adminIsLogged = useSelector((state) => state.adminLogged.isLogged);

  //HANDLING SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    //ON SCROLL CALLING FUNCTION HANDLESCROLL
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseModalUser = () => {
    dispatch(dontShowProfileUser());
  };

  const removeToken = () => {
    //REMOVING USER AUTH TOKEN AND OWNER AUTH TOKEN FROM LOCALSTORAGE ON REMOVETOKEN FUNCTION
    localStorage.removeItem("authToken");
    localStorage.removeItem("ownerAuthToken");
    localStorage.removeItem("adminAuthToken");

    //DISPATCHING ACTION USER IS NOT LOGGED, OWNER IS NOT LOGGED , DONT SHOW USER PROFILE ON REMOVETOKEN FUNCTION
    dispatch(isNotLogged(), dispatch(dontShowUserProfile()));
    dispatch(ownerNotLogged());
    dispatch(adminIsNotLogged());
  };

  console.log(showProfile);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/propertyData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setPropertyData(response);
  };

  useEffect(() => {
    const timerID = setInterval(() => loadData(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <div className="w-100">
      {/**CAROUSEL */}
      <div className="">
        <div className="carouselCom" style={{ position: "relative" }}>
          <CarouselComponent />
        </div>

        {/**NAVBAR*/}
        <div
          className="navB"
          style={
            navBackground === false
              ? {
                  backgroundColor: "transparent",
                }
              : { backgroundColor: "#ff385c" }
          }
        >
          {" "}
          <NavBar />{" "}
        </div>
        {showProfile === true ? (
          <div
            style={{
              position: "fixed",
              zIndex: "10",
              top: "10%",
              left: "85%",
              backgroundColor: "white",
              width: "200px",
              padding: "10px",
              boxShadow: "1px 1px 1px 1px #ff385c ",
              border: "1px solid #ff385c",
            }}
          >
            <div>
              <div>
                <PersonPinIcon className="" style={{ fontSize: "30px" }} />
              </div>
              <Button
                className="mt-1"
                variant="none"
                onClick={() => dispatch(showProfileUser())}
                style={{ boxShadow: "none", fontWeight: "bold" }}
              >
                Profile
              </Button>
              <hr style={{ color: "#ff385c", fontWeight: "bold" }} />
            </div>

            {/* {isLogged === true &&
            ownerIsLogged === false &&
            adminIsLogged === false ? (
              <div>
                <FavoriteBorderIcon />
                <h6 className="mt-2">WishList</h6>
                <hr />
              </div>
            ) : (
              ""
            )} */}
            <div>
              <div>
                <LogoutIcon />
              </div>
              <Button
                className="mt-1"
                variant="none"
                onClick={() => removeToken()}
                style={{
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}

        {showProfileModal === true ? (
          <ProfileModal show={showProfileModal} close={handleCloseModalUser} />
        ) : (
          ""
        )}

        {/**SEARCHBAR */}
        <div className="searchB w-100">
          <SearchBar />
        </div>
      </div>
      <div className="w-100 pb-5">
        <CardCarouselCom propertyData={propertyData} />
      </div>
      <hr />
      <div className="pb-5 ">
        <CardComponent md={4} propertyData={propertyData} title="Properties" />
      </div>
      <hr />
      <div className="w-100 mt-5" style={{ backgroundColor: "#f7f7f7" }}>
        <WebsiteReviews />
      </div>
      <div>
        <FooterCom />
      </div>
    </div>
  );
}
