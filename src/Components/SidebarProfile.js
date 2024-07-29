import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  ProSidebarProvider,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddHomeIcon from "@mui/icons-material/AddHome";
import ViewListIcon from "@mui/icons-material/ViewList";
import { dontShowProfile } from "../Redux/Slices/profileSlice";
import { showProfile } from "../Redux/Slices/profileSlice";

import { dontShowUserProfile } from "../Redux/Slices/showProfileSlice";
import { ownerNotLogged } from "../Redux/Slices/ownerIsLogged";
import { adminIsNotLogged } from "../Redux/Slices/adminLog";
import {
  dontShowOwnerAddProperty,
  showOwnerAddProperty,
} from "../Redux/Slices/ownerAddPropertySlice";
import showOwnerListProperties, {
  dontShowOwnerProperty,
  showOwnerProperty,
} from "../Redux/Slices/showOwnerListProperties";
import { isLogged, isNotLogged } from "../Redux/Slices/isLoggedIn";
import {
  dontShowProfileUser,
  showProfileUser,
} from "../Redux/Slices/showProfileModalSlice";
export default function SidebarProfile() {
  const [anchorElUser, setAnchorElUser] = useState(false);
  const [show, setShow] = useState(false);
  const { collapseSidebar, collapsed } = useProSidebar();
  const toggle = () => {
    if (collapsed) {
      collapseSidebar(false);
      setShow(true);
    } else {
      collapseSidebar(true);
      setShow(false);
    }
  };

  //OWNER LOGGED IN OR NOT
  const ownerIsLogged = useSelector((state) => state.ownerLogOrNot.ownerIsLog);
  console.log(ownerIsLogged);

  //TENANT LOGGED IN OR NOT
  const isLogged = useSelector((state) => state.isLoggedIn.isLogIn);

  const tenantData = useSelector((state) => state.tenantDataSlice.tenantD);

  //CHECKING ADMIN IS LOGGED STATE
  const adminIsLogged = useSelector((state) => state.adminLogged.isLogged);

  //Profile
  const showProfOrNot = useSelector(
    (state) => state.showProfOrNot.showOrNoProf
  );

  //Owner Property List
  const ownerPropertyList = useSelector(
    (state) => state.showOwnerProperties.showOwnerProperty
  );

  //ADD PROPERTY
  const showOrNotAddPro = useSelector(
    (state) => state.showOrNotAddPro.showOrNoOwnerAddPro
  );

  const [userIconLogout, setUserIconLogout] = useState(false);
  const handleOpenCloseUserMenu = (e) => {
    if (anchorElUser === null) {
      setAnchorElUser(true);
    } else {
      setAnchorElUser(null);
    }
  };
  // const handleCloseUserMenu = () => {

  // };

  useEffect(() => {}, [anchorElUser]);

  const dispatch = useDispatch();
  const handleProfile = () => {
    if (showProfOrNot === false) {
      dispatch(showProfile());
      dispatch(dontShowOwnerAddProperty());
      dispatch(dontShowOwnerProperty());
    }
  };

  const handleAddProperty = () => {
    if (showOrNotAddPro === false) {
      dispatch(showOwnerAddProperty());
      dispatch(dontShowProfile());
      dispatch(dontShowOwnerProperty());
    }
  };

  const handleOwnerPropertyList = () => {
    if (ownerPropertyList === false) {
      dispatch(showOwnerProperty());
      dispatch(dontShowProfile());
      dispatch(dontShowOwnerAddProperty());
    }
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
    dispatch(dontShowProfileUser());
  };

  const tenantD = localStorage.getItem("tenantData");
  const tenantDatas = JSON.parse(tenantD);

  const ownerD = localStorage.getItem("ownerData");
  const ownerDatas = JSON.parse(ownerD);

  return (
    <div className="">
      <Sidebar collapsed={!show} style={{ height: "80vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
              toggle();
            }}
          >
            Student Space
          </MenuItem>

          <MenuItem icon={<PersonIcon />} onClick={() => handleProfile()}>
            Profile{" "}
          </MenuItem>
          {/* {isLogged === true ? (
            // <MenuItem icon={<FavoriteBorderIcon />}> WishList </MenuItem>
          ) : (
            ""
          )} */}

          {ownerIsLogged === true ? (
            <>
              <MenuItem
                icon={<AddHomeIcon />}
                onClick={() => handleAddProperty()}
              >
                Add Property
              </MenuItem>
              <MenuItem
                icon={<ViewListIcon />}
                onClick={() => handleOwnerPropertyList()}
              >
                Advertised Property
              </MenuItem>
            </>
          ) : (
            ""
          )}
          {adminIsLogged === true ? (
            <>
              {" "}
              <MenuItem icon={<AddHomeIcon />}>Properties</MenuItem>
            </>
          ) : (
            ""
          )}
        </Menu>
        <Box
          sx={{ flexGrow: 0 }}
          display={"flex"}
          justifyContent={"center"}
          marginTop={isLogged === true ? 50 : 40}
        >
          <Tooltip title="Logout" placement="top">
            <IconButton
              // onClick={
              //   anchorElUser === null
              //     ? setAnchorElUser(true)
              //     : setAnchorElUser(null)
              // }

              onClick={handleOpenCloseUserMenu}
              sx={{ p: 1 }}
            >
              <Avatar
                alt="Remy Sharp"
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
                sx={
                  isLogged === true
                    ? { height: "45px", width: "45px" }
                    : { height: "42px", width: "40px" }
                }
              ></Avatar>
            </IconButton>{" "}
          </Tooltip>
        </Box>{" "}
        <Menu>
          {anchorElUser ? (
            <MenuItem
            //onClick={handleOpenCloseUserMenu}
            >
              {" "}
              <Typography textAlign="center">
                {!show ? (
                  <Link to="/">
                    <MenuItem
                      icon={<LogoutIcon />}
                      style={{ padding: "0px", color: "black" }}
                      onClick={removeToken}
                    />
                  </Link>
                ) : (
                  <Link to="/" onClick={removeToken} style={{ color: "black" }}>
                    Logout
                  </Link>
                )}
              </Typography>
            </MenuItem>
          ) : (
            ""
          )}
        </Menu>
      </Sidebar>
    </div>
  );
}
