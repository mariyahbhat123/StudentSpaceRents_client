import React from "react";
import k from "../CarouselImages/k.jpg";
import NavBar from "../Components/navBar";
import FooterCom from "../Components/FooterCom";
import home from "../AboutUsicons/home (2).png";
import listing from "../AboutUsicons/work-order.png";
import brokers from "../AboutUsicons/avoid-crowds.png";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "react-bootstrap/esm/Button";
import { dontShowUserProfile } from "../Redux/Slices/showProfileSlice";
import { ownerNotLogged } from "../Redux/Slices/ownerIsLogged";
import { adminIsNotLogged } from "../Redux/Slices/adminLog";
import { isNotLogged } from "../Redux/Slices/isLoggedIn";
import { useDispatch, useSelector } from "react-redux";

export default function AboutUs() {
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

  const dispatch = useDispatch();

  const showProfile = useSelector(
    (state) => state.showUsersProfile.showUserProfile
  );
  return (
    <div>
      <div>
        <NavBar />
      </div>

      {showProfile === true ? (
        <div className="ProfileLogoutContainer" style={{}}>
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
      <div>
        <img src={k} alt="" style={{ width: "100%", height: "35rem" }} />
      </div>
      <div className="mt-5 mb-5">
        <div>
          <h3>About Us</h3>
        </div>
        <div className="mt-4">
          <p>
            <b>
              Welcome to Student Space Rents, your premier destination for
              finding the perfect room/apartment to rent.
              <br /> Whether you're a student, a professional, or someone
              seeking a new adventure in a different city,
              <br /> Student Space Rents is here to help you find a comfortable,
              <br />
              affordable, and convenient place to call home.
            </b>
          </p>
        </div>
      </div>

      <div>
        {" "}
        <hr />
        <div className="mt-5 mb-5">
          <h3>Why use Student Space Rents?</h3>
        </div>
        <div className="d-flex mb-5" style={{ flexDirection: "row" }}>
          <div>
            <div>
              <img src={brokers} alt="" style={{ width: "20%" }} />
            </div>
            <div className="mt-3">
              <h5>Avoid Brokers</h5>
              <p>
                We directly connect you to owners
                <br />
                to save brokerage
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={listing} alt="" style={{ width: "20%" }} />
            </div>
            <div className="mt-3">
              <h5>Free Listing</h5>
              <p>
                Easy listing process for
                <br />
                tenants
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={home} alt="" style={{ width: "20%" }} />
            </div>
            <div className="mt-3">
              <h5>Shortlist without Visit</h5>
              <p>
                Extensive Information
                <br />
                makes it easy
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="mb-5 p-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="mb-4">
          <h3>Fast Facts</h3>
        </div>
        <div
          className="d-flex mb-5"
          style={{ flexDirection: "row", justifyContent: "space-evenly" }}
        >
          <div
            className="p-5"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "22%",
              backgroundColor: "white",
            }}
          >
            <div>
              <h2>7.7M+</h2>
              <p>
                <b>active listings worldwide</b>
              </p>
            </div>
            <div className="">
              <p style={{ fontSize: "14px" }}>as of December 31,2023</p>
            </div>
          </div>

          <div
            className="p-5"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "22%",
              backgroundColor: "white",
            }}
          >
            <div>
              <h2>10+</h2>
              <p>
                <b>cities and towns with active SSR listings</b>
              </p>
            </div>
            <div>
              <p style={{ fontSize: "14px" }}>as of December 31,2023</p>
            </div>
          </div>

          <div
            className="p-5"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "22%",
              backgroundColor: "white",
            }}
          >
            <div>
              <h2>1.5k+</h2>{" "}
              <p>
                <b>SSR guest arrivals all time</b>
              </p>{" "}
            </div>
            <div>
              <p style={{ fontSize: "14px" }}>as of December 31,2023</p>
            </div>
          </div>

          <div
            className="p-5"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width: "22%",
              backgroundColor: "white",
            }}
          >
            <div>
              <h2>10+</h2>
              <p>
                <b>Owners on SSR</b>
              </p>
            </div>
            <div>
              <p style={{ fontSize: "14px" }}>as of December 31,2023</p>
            </div>
          </div>
        </div>{" "}
      </div>

      <div>
        <FooterCom />
      </div>
    </div>
  );
}
