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

  // const images = [
  //   {
  //     img: "https://hips.hearstapps.com/hmg-prod/images/ghk070123homeminifeature-005-655b983d8bf5f.jpg?crop=1xw:0.9989583333333334xh;center,top&resize=980:*",
  //   },
  //   {
  //     img: "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg",
  //   },
  //   {
  //     img: "https://foyr.com/learn/wp-content/uploads/2021/09/master-bedroom-essentials.png",
  //   },
  //   {
  //     img: "https://st.hzcdn.com/simgs/pictures/bedrooms/lockhart-plan-greenway-impression-homes-img~c8e198a90e4f00bb_14-9072-1-2fd6d6c.jpg",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     img: "https://www.marthastewart.com/thmb/vVHdWeV4MVvO8suInhPAaKNjuCs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/small-bedroom-ideas-kerrie-kelly-design-lab-01-db0ca0ea8601416b811757235d094b09.JPG",
  //   },
  //   {
  //     img: "https://st.hzcdn.com/simgs/pictures/bedrooms/sims-hilditch-cotswold-manor-house-sims-hilditch-img~e231e0960447b138_14-1715-1-2bb87ae.jpg",
  //   },
  //   {
  //     img: "https://www.ikea.com/images/a-brimnes-bed-in-a-lilac-room-covered-in-lilac-nattsvaermare-aaa6875a0cc26b87aeae1ee1d2eaeb44.jpg",
  //   },
  //   {
  //     img: "https://photos.spotahome.com/fsobscale_1600_900_nonverified_ur_15_50/a9f703c7bb278e60ee755b45fd3bd39c102c00584d8a0092c9b8b8f3.jpg",
  //   },
  // ];

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
    loadData();
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
              boxShadow: "1px 1px 1px 1px grey",
            }}
          >
            <div>
              <PersonPinIcon className="" />
              <Button
                className="mt-2"
                variant="none"
                onClick={() => dispatch(showProfileUser())}
              >
                Profile
              </Button>
            </div>
            <hr />
            {isLogged === true &&
            ownerIsLogged === false &&
            adminIsLogged === false ? (
              <div>
                <FavoriteBorderIcon />
                <h6 className="mt-2">WishList</h6>
                <hr />
              </div>
            ) : (
              ""
            )}
            <div>
              <LogoutIcon />
            </div>
            <button
              className="mt-2"
              onClick={() => removeToken()}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              Logout
            </button>
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
      <div className="w-100">
        <CardCarouselCom propertyData={propertyData} />
      </div>

      <div className=" ">
        <CardComponent md={4} propertyData={propertyData} />
      </div>
      <div className="w-100 mt-5" style={{ backgroundColor: "#f7f7f7" }}>
        <WebsiteReviews />
      </div>
      <div>
        <FooterCom />
      </div>
    </div>
  );
}
