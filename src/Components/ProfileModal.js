import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SidebarProfile from "./SidebarProfile";
import { useDispatch, useSelector } from "react-redux";
import { dontShowProfileUser } from "../Redux/Slices/showProfileModalSlice";
import UserProfile from "./UserProfile";
import AddProperty from "./AddProperty";
import { dontShowProfile } from "../Redux/Slices/profileSlice";
import ListOfOwnerProperties from "./ListOfOwnerProperties";

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

  const ownerPropertyList = useSelector(
    (state) => state.showOwnerProperties.showOwnerProperty
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
            {showProfOrNot === true && showOrNotAddPro === false ? (
              <div className="mt-5">
                <UserProfile />
              </div>
            ) : (
              ""
            )}
            {showOrNotAddPro === true && showProfOrNot === false ? (
              <AddProperty />
            ) : (
              ""
            )}
            {ownerPropertyList === true &&
            showProfOrNot === false &&
            showOrNotAddPro === false ? (
              <div className="d-flex" style={{ justifyContent: "center" }}>
                <ListOfOwnerProperties />
              </div>
            ) : (
              ""
            )}
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
