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
import {
  showProfile,
  dontShowUserProfile,
} from "../Redux/Slices/showProfileSlice";
export default function NavBar() {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const toggleValue = useSelector((state) => state.toggle.active);

  const isLogged = useSelector((state) => state.isLoggedIn.isLogIn);
  const showUserProfile = useSelector(
    (state) => state.showUsersProfile.showUserProfile
  );
  console.log(showUserProfile);

  console.log(isLogged);
  const handleClose = () => {
    if (toggleValue === true) {
      dispatch(toggleOff());
    }
  };
  const handleShow = () => {
    if (toggleValue === false) {
      dispatch(toggleOn());
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
          <Navbar.Brand href="#home">StudentSpaceRents</Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.1">
                  Terms & conditions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
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
              {isLogged === true ? (
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
