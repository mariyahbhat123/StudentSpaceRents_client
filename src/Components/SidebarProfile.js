import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
export default function SidebarProfile() {
  return (
    <div>
      <Sidebar>
        <Menu>
          <MenuItem>Profile </MenuItem>
          <MenuItem> WishList </MenuItem>

          <MenuItem> Cart</MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
