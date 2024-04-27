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
import {
  showProfile,
  dontShowUserProfile,
} from "../Redux/Slices/showProfileSlice";
import AdminLogin from "./AdminLogin";
export default function NavBar() {
  const [show, setShow] = useState(false);
  const [adminLog, setAdminLog] = useState(false);

  const dispatch = useDispatch();
  const toggleValue = useSelector((state) => state.toggle.active);

  //CHECKING TENANT IS LOGGED STATE
  const isLogged = useSelector((state) => state.isLoggedIn.isLogIn);
  console.log(isLogged);

  //CHECKING OWNER IS LOGGED STATE
  const ownerIsLogged = useSelector((state) => state.ownerLogOrNot.ownerIsLog);

  //CHECKING ADMIN IS LOGGED STATE
  const adminIsLogged = useSelector((state) => state.adminLogged.isLogged);

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
      setAdminLog(false);
    }
  };

  //SHOW MODAL FOR TENANT AND OWNER LOGIN/REGISTER
  const handleShow = () => {
    if (toggleValue === false) {
      dispatch(toggleOn());
      setAdminLog(false);
    } else {
      dispatch(toggleOff());
    }
  };

  //SHOW MODAL FOR ADMIN MODAL LOGIN
  const handleShowAdmin = () => {
    if (toggleValue === false && adminLog === false) {
      dispatch(toggleOn());
      setAdminLog(true);
    } else {
      dispatch(toggleOff());
      setAdminLog(false);
    }
  };

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

  console.log(toggleValue);
  return (
    <div style={{ position: "sticky" }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        style={{ fontWeight: "bold", boxShadow: "none" }}
      >
        <Container className="">
          <Navbar.Brand href="#home" className="d-flex">
            <div className="me-1 mb-1 d-flex">
              <HouseHeartFill />
            </div>
            <div>StudentSpaceRents</div>
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
                title="Dropdown"
                id="collapsible-nav-dropdown"
                className="ml-2"
              >
                <Link to="/termsAndCondition">
                  <NavDropdown.Item href="#action/3.1">
                    Terms & Conditions
                  </NavDropdown.Item>
                </Link>
                <Link to="/howToUse">
                  {" "}
                  <NavDropdown.Item href="#action/3.2">
                    How To Use
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              {isLogged === true ||
              ownerIsLogged === true ||
              adminIsLogged === true ? (
                <Button
                  onClick={() =>
                    showUserProfile == true
                      ? dispatch(dontShowUserProfile())
                      : dispatch(showProfile())
                  }
                  variant="none"
                  style={{
                    overflow: "hidden",
                    width: "60px",
                    background: "transparent",
                    border: "0px",
                    boxShadow: "none",
                  }}
                >
                  {" "}
                  <Avatar style={{ width: "" }}></Avatar>
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
              {adminIsLogged === false &&
              isLogged === false &&
              ownerIsLogged === false ? (
                <Button
                  variant="none"
                  onClick={handleShowAdmin}
                  style={{ boxShadow: "none", fontWeight: "bold" }}
                >
                  Admin
                </Button>
              ) : (
                ""
              )}
              {toggleValue === true && adminLog === true ? (
                <ModalCom show={toggleValue} close={handleClose} admin={true} />
              ) : toggleValue === true && adminLog === false ? (
                <ModalCom
                  show={toggleValue}
                  close={handleClose}
                  admin={false}
                />
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
