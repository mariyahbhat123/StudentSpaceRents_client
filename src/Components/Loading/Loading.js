import React from "react";
import { Modal } from "@mui/material";
import "../../Styles/Loading.css";

export default function Loading() {
  return (
    <div>
      <div>
        {" "}
        {/* <Modal> */}
        <div className="loading"></div>
        {/* <Modal.Body>LOADINGGG...</Modal.Body>
        </Modal> */}
        <h6 className="mt-3">LOADING....</h6>
      </div>
    </div>
  );
}
