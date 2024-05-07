import React, { useState } from "react";
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
import {
  dontShowOwnerAddProperty,
  showOwnerAddProperty,
} from "../Redux/Slices/ownerAddPropertySlice";
import showOwnerListProperties, {
  dontShowOwnerProperty,
  showOwnerProperty,
} from "../Redux/Slices/showOwnerListProperties";
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
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(true);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();
  const handleProfile = () => {
    if (showProfOrNot === false) {
      dispatch(showProfile());
      dispatch(dontShowOwnerAddProperty());
      dispatch(dontShowOwnerProperty());
    } else {
      dispatch(dontShowProfile());
    }
  };

  const handleAddProperty = () => {
    if (showOrNotAddPro === false) {
      dispatch(showOwnerAddProperty());
      dispatch(dontShowProfile());
      dispatch(dontShowOwnerProperty());
    } else {
      dispatch(dontShowOwnerAddProperty());
    }
  };

  const handleOwnerPropertyList = () => {
    if (ownerPropertyList === false) {
      dispatch(showOwnerProperty());
      dispatch(dontShowProfile());
      dispatch(dontShowProfile());
    } else {
      dispatch(dontShowOwnerProperty());
    }
  };
  return (
    <div className="me-3">
      <Sidebar collapsed={!show}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
              toggle();
            }}
          >
            Admin
          </MenuItem>

          <MenuItem icon={<PersonIcon />} onClick={() => handleProfile()}>
            Profile{" "}
          </MenuItem>
          {isLogged === true ? (
            <MenuItem icon={<FavoriteBorderIcon />}> WishList </MenuItem>
          ) : (
            ""
          )}

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
          marginTop={40}
        >
          <Tooltip title="Logout" placement="top">
            <IconButton
              onClick={
                anchorElUser == null ? handleOpenUserMenu : handleCloseUserMenu
              }
              sx={{ p: 1 }}
            >
              <Avatar
                alt="Remy Sharp"
                src={
                  ownerIsLogged === true
                    ? ""
                    : isLogged === true
                    ? tenantData.img
                    : ""
                }
                sx={{ height: "42px", width: "42px" }}
              ></Avatar>
            </IconButton>{" "}
          </Tooltip>
        </Box>{" "}
        <Menu>
          {anchorElUser ? (
            <MenuItem onClick={handleCloseUserMenu}>
              {" "}
              <Typography textAlign="center">
                {!show ? (
                  <Link to="/">
                    <MenuItem
                      icon={<LogoutIcon />}
                      style={{ padding: "0px" }}
                    />
                  </Link>
                ) : (
                  <Link to="/">Logout</Link>
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
