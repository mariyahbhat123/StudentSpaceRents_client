import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SidebarProfile from "./SidebarProfile";
import { useDispatch, useSelector } from "react-redux";
import { dontShowProfileUser } from "../Redux/Slices/showProfileModalSlice";
import UserProfile from "./UserProfile";

export default function ProfileModal() {
  const showProfileModal = useSelector(
    (state) => state.showProfileModal.showProMod
  );

  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <Modal
        size="lg"
        show={showProfileModal}
        onHide={() => dispatch(dontShowProfileUser())}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <div className="d-flex">
            <SidebarProfile />
            <UserProfile />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
