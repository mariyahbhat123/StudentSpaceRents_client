import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { showProfileUser } from "../Redux/Slices/showProfileModalSlice";
import {
  dontShowUserProfile,
  showProfile,
} from "../Redux/Slices/showProfileSlice";
import { ownerNotLogged } from "../Redux/Slices/ownerIsLogged";
import { adminIsNotLogged } from "../Redux/Slices/adminLog";
import { isNotLogged } from "../Redux/Slices/isLoggedIn";

export default function ProfileLogoutContainer() {
  const dispatch = useDispatch();

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

  //SHOW PROFILE DROPDOWN
  const showProfileM = useSelector(
    (state) => state.showUsersProfile.showUserProfile
  );

  const TOP_OFFSET = 310;

  //HANDLING SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        dispatch(dontShowUserProfile());
      } else {
        dispatch(showProfile());
      }
    };
    //ON SCROLL CALLING FUNCTION HANDLESCROLL
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="ProfileLogoutContainer" style={{ position: "absolute" }}>
        <div>
          <div>
            <PersonPinIcon className="" style={{ fontSize: "30px" }} />
            <Button
              className="mt-1"
              variant="none"
              onClick={() => {
                return dispatch(showProfileUser());
              }}
              style={{ boxShadow: "none", fontWeight: "bold" }}
            >
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
            <LogoutIcon />

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
          <hr style={{ color: "#ff385c", fontWeight: "bold" }} />
        </div>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <div>
            {" "}
            <CloseIcon className="" />
            <Button
              className=""
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
              close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
