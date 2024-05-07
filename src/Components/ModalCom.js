import { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import TenantLogin from "./TenantLogin";
import LandlordLogin from "./LandlordLogin";
import TenantRegistration from "./TenantRegistration";
import { Link } from "react-router-dom";
import LandlordRegistration from "./LandlordRegistration";
import "../Styles/modalCom.css";
import AdminLogin from "./AdminLogin";

function ModalCom(props) {
  const [toggle, setToggle] = useState(false);
  const Admin = props.admin;

  const [tenantRegistration, setTenantRegisteration] = useState(false);
  const [landlordRegistration, setLandlordRegistration] = useState(false);

  return (
    <div className="">
      <Modal
        className="modal mt-5 "
        show={props.show}
        onHide={props.close}
        animation
        autoFocus
        contentClassName="custom-modal"
      >
        <Modal.Header closeButton className="">
          <div
            className="btnsTntOwn w-100 ms-5 me-5  d-flex justify-content-center"
            style={{ backgroundColor: "#ff385c" }}
          >
            <div className="d-flex">
              <Button
                variant="none"
                className="btnTnt w-50 "
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => setToggle(false)}
              >
                Tenant
              </Button>
              <Button
                variant="none"
                className="btnOwn w-50"
                style={{
                  borderColor: "",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => setToggle(true)}
              >
                Owner
              </Button>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            {toggle === true ? (
              landlordRegistration === false ? (
                <LandlordLogin />
              ) : (
                <LandlordRegistration />
              )
            ) : tenantRegistration === false ? (
              <TenantLogin />
            ) : (
              <TenantRegistration />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {toggle === false ? (
            tenantRegistration === false ? (
              <div className="w-100 userSign">
                Dont have a account?
                <br />{" "}
                <Link
                  className="userSignIn-Up"
                  onClick={() => setTenantRegisteration(true)}
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="w-100 userSign">
                Already have a account?
                <br />{" "}
                <Link
                  className="userSignIn-Up"
                  onClick={() => setTenantRegisteration(false)}
                >
                  Sign In
                </Link>
              </div>
            )
          ) : landlordRegistration === false ? (
            <div className="w-100 userSign">
              Dont have a Account?
              <br />
              <Link
                className="userSignIn-Up"
                onClick={() => setLandlordRegistration(true)}
              >
                Sign up
              </Link>
            </div>
          ) : (
            <div className="w-100 userSign">
              Already have a Account?
              <br />
              <Link
                className="userSignIn-Up"
                onClick={() => setLandlordRegistration(false)}
              >
                Sign in
              </Link>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCom;
