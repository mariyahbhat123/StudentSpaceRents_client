import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SidebarProfile from "./SidebarProfile";
import { useDispatch, useSelector } from "react-redux";
import { dontShowProfileUser } from "../Redux/Slices/showProfileModalSlice";
import UserProfile from "./UserProfile";
import AddProperty from "./AddProperty";
import { dontShowProfile } from "../Redux/Slices/profileSlice";

export default function ProfileModal() {
  const showProfileModal = useSelector(
    (state) => state.showProfileModal.showProMod
  );

  const dispatch = useDispatch();

  const showProfOrNot = useSelector(
    (state) => state.showProfOrNot.showOrNoProf
  );
  console.log(showProfOrNot);

  const showOrNotAddPro = useSelector(
    (state) => state.showOrNotAddPro.showOrNoOwnerAddPro
  );
  return (
    <div>
      {" "}
      <Modal
        size="lg"
        show={showProfileModal}
        onHide={() => dispatch(dontShowProfileUser())}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{ overflowY: "initial !important" }}
      >
        {" "}
        <div className="d-flex">
          <SidebarProfile />
          <Modal.Body style={{ height: "80vh", overflowX: "auto" }}>
            {showProfOrNot === true ? <UserProfile /> : ""}
            {showOrNotAddPro === true && showProfOrNot === false ? (
              <AddProperty />
            ) : (
              ""
            )}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
