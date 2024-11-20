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
import { isNotLogged } from "../Redux/Slices/isLoggedIn";
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
import { showProfile } from "../Redux/Slices/profileSlice";

//Carousel Component
import bed from "../CarouselImages/bed.jpg";
import living1 from "../CarouselImages/living1.jpg";
import living2 from "../CarouselImages/living2.jpg";
import kitchen1 from "../CarouselImages/kitchen1.jpg";

import CloseIcon from "@mui/icons-material/Close";

export default function LandingPage() {
  //Scroll 600
  const TOP_OFFSET = 600;
  //Background setting
  const [navBackground, setNavBackground] = useState(false);

  const [md, setMd] = useState(4);

  const [propertyData, setPropertyData] = useState([]);

  //SHOW PROFILE DROPDOWN
  const showProfileM = useSelector(
    (state) => state.showUsersProfile.showUserProfile
  );

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
    localStorage.removeItem("tenantData");
    localStorage.removeItem("ownerData");

    //DISPATCHING ACTION USER IS NOT LOGGED, OWNER IS NOT LOGGED , DONT SHOW USER PROFILE ON REMOVETOKEN FUNCTION
    dispatch(isNotLogged(), dispatch(dontShowUserProfile()));
    dispatch(ownerNotLogged());
    dispatch(adminIsNotLogged());
  };

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
    loadData();
  }, []);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setMd(2);
    } else if (window.screen.width === 1024) {
      setMd(3);
    }
  }, [md]);
  return (
    <div className="w-100">
      {/**CAROUSEL */}
      <div className="">
        <div className="carouselCom" style={{ position: "relative" }}>
          <CarouselComponent img0={bed} img1={living1} img2={kitchen1} />
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
          {navBackground === false ? (
            <>
              <NavBar color="#ED697F" />
            </>
          ) : (
            <NavBar color="#FED8E4" />
          )}{" "}
        </div>
        {showProfileM === true ? (
          <div className="ProfileLogoutContainer" style={{}}>
            <div>
              <div>
                <Button
                  className="sideShowClick mt-1"
                  variant="none"
                  onClick={() => {
                    return dispatch(showProfileUser());
                  }}
                  style={{
                    boxShadow: "none",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <PersonPinIcon
                    className="me-3"
                    style={{ fontSize: "30px" }}
                  />
                  Profile
                </Button>{" "}
              </div>
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
                {" "}
                <Button
                  className="sideShowClick mt-1"
                  variant="none"
                  onClick={() => removeToken()}
                  style={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  <LogoutIcon className="me-3" />
                  Logout
                </Button>
              </div>
              <hr style={{ color: "#ff385c", fontWeight: "bold" }} />
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <div>
                {" "}
                <Button
                  className="sideShowClick"
                  variant="none"
                  onClick={() =>
                    showProfileM == true ? dispatch(dontShowUserProfile()) : ""
                  }
                  style={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  <CloseIcon className="me-3" />
                  close
                </Button>
              </div>
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
      <div className="cardCarouselComContainer pb-5">
        <CardCarouselCom propertyData={propertyData} />
      </div>
      <hr />
      <div className="cardComponent pb-5 ">
        <CardComponent md={md} propertyData={propertyData} title="PROPERTIES" />
      </div>
      <hr />
      <div className="reviewParentComponent">
        <h2 className="p-5">What tenants and owners say about us</h2>
        <div
          className="reviewComponent "
          style={{
            backgroundColor: "#f7f7f7",
          }}
        >
          <WebsiteReviews name="Seerat" />
          <WebsiteReviews name="Sehrish" />
          <WebsiteReviews name="Baseema" />
        </div>
        <p className=" mt-4">More Testimonials?</p>
        <hr className="mt-5 pb-4" style={{ color: "black" }} />
      </div>{" "}
      <div className="footerComponent">
        <FooterCom />
      </div>
    </div>
  );
}
