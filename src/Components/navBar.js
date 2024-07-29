import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalCom from "./ModalCom";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleOff, toggleOn } from "../Redux/Slices/toggleSlice";
import { Avatar } from "@mui/material";
import { dontShowProfile, shwProfile } from "../Redux/Slices/isLoggedIn";
import HouseHeartFill from "react-bootstrap-icons/dist/icons/house-heart-fill";
import SSR from "../Logo/home.png";
import {
  showProfile,
  dontShowUserProfile,
} from "../Redux/Slices/showProfileSlice";
import AdminLogin from "./AdminLogin";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavBar(props) {
  const [show, setShow] = useState(false);
  // const [adminLog, setAdminLog] = useState(false);
  const color = props.color;
  const dispatch = useDispatch();
  const toggleValue = useSelector((state) => state.toggle.active);

  //CHECKING TENANT IS LOGGED STATE
  const isLogged = useSelector((state) => state.isLoggedIn.isLogIn);
  console.log(isLogged);

  //CHECKING OWNER IS LOGGED STATE
  const ownerIsLogged = useSelector((state) => state.ownerLogOrNot.ownerIsLog);

  // //CHECKING ADMIN IS LOGGED STATE
  // const adminIsLogged = useSelector((state) => state.adminLogged.isLogged);

  //SHOWUSERPROFILE STATE
  const showUserProfile = useSelector(
    (state) => state.showUsersProfile.showUserProfile
  );
  console.log(showUserProfile);

  console.log(isLogged);

  //CLOSING MODEL FUNCTION
  const handleClose = () => {
    if (toggleValue === true) {
      dispatch(toggleOff());
    }
  };

  //SHOW MODAL FOR TENANT AND OWNER LOGIN/REGISTER
  const handleShow = () => {
    if (toggleValue === false) {
      dispatch(toggleOn());
    } else {
      dispatch(toggleOff());
    }
  };

  // //SHOW MODAL FOR ADMIN MODAL LOGIN
  // const handleShowAdmin = () => {
  //   if (toggleValue === false && adminLog === false) {
  //     dispatch(toggleOn());
  //     setAdminLog(true);
  //   } else {
  //     dispatch(toggleOff());
  //     setAdminLog(false);
  //   }
  // };

  const onClickShowProfile = (e) => {
    if (showUserProfile === false) {
      dispatch(showProfile());
    }
  };
  const onClickDontShowProfile = () => {
    if (showUserProfile === true) {
      dispatch(dontShowUserProfile());
    }
  };

  const tenantD = localStorage.getItem("tenantData");
  const tenantDatas = JSON.parse(tenantD);

  const ownerD = localStorage.getItem("ownerData");
  const ownerDatas = JSON.parse(ownerD);

  console.log(toggleValue);
  return (
    <div style={{ position: "sticky", zIndex: 999 }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        style={{ fontWeight: "bold", boxShadow: "none" }}
      >
        <Container className="">
          <Navbar.Brand href="#home" className="d-flex">
            <div className="iconNavbar me-1 mb-1 d-flex">
              <img
                className=""
                src={SSR}
                alt=""
                style={{ width: "26px", height: "23px" }}
              />
              <div className="ms-1" style={{ color: color }}>
                StudentSpaceRents
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-2 " style={{}}>
              <Link
                to="/"
                className="mt-2 "
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="mt-2 ml-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                About us
              </Link>
              <NavDropdown
                title="More Details"
                className="ml-2"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  <Link to="/termsAndCondition">Terms & Conditions </Link>
                </NavDropdown.Item>
                <hr />{" "}
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/howToUse"> How To Use</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="AvatarSignContainer ms-auto me-4">
              {isLogged === true || ownerIsLogged === true ? (
                <Button
                  onClick={() =>
                    showUserProfile == true
                      ? dispatch(dontShowUserProfile())
                      : dispatch(showProfile())
                  }
                  variant="none"
                  className="AvatarContainer"
                  style={{
                    overflow: "hidden",
                    width: "60px",
                    background: "transparent",
                    border: "0px",
                    boxShadow: "none",
                  }}
                >
                  {" "}
                  <Avatar
                    className=""
                    sx={{ width: 45, height: 45 }}
                    src={
                      ownerIsLogged === true
                        ? ownerDatas.gender === "female"
                          ? "https://cdn.icon-icons.com/icons2/3653/PNG/512/profile_account_user_icon_228272.png"
                          : "https://cdn.icon-icons.com/icons2/3653/PNG/512/profile_account_user_icon_228272.png"
                        : isLogged === true
                        ? tenantDatas.gender === "female"
                          ? "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                          : "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_male_icon_192702.png"
                        : ""
                    }
                  >
                    {/* <img
                      src={
                        ownerIsLogged === true
                          ? ownerDatas.gender === "female"
                            ? "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                            : "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_male_icon_192702.png"
                          : isLogged === true
                          ? tenantDatas.gender === "female"
                            ? "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                            : "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_male_icon_192702.png"
                          : ""
                      }
                      width="90"
                      class="rounded-circle  "
                    /> */}
                  </Avatar>
                </Button>
              ) : (
                <Button
                  variant="none"
                  onClick={handleShow}
                  style={{ boxShadow: "none", fontWeight: "bold" }}
                >
                  Sign up/Login
                </Button>
              )}

              {toggleValue === true ? (
                <ModalCom show={toggleValue} close={handleClose} />
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>{" "}
        </Container>
      </Navbar>{" "}
      {/* {isLogged === true && show === true ? (
        <div style={{ zIndex: "10", top: "100%" }}>
          <p>Profile</p>
          <button onClick={() => dispatch(isNotLogged())}>Logout</button>
        </div>
      ) : (
        ""
      )}*/}
    </div>
  );
}
