import { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import TenantLogin from "./TenantLogin";
import LandlordLogin from "./LandlordLogin";
import TenantRegistration from "./TenantRegistration";
import { Link } from "react-router-dom";
import LandlordRegistration from "./LandlordRegistration";
import "../Styles/modalCom.css";

function ModalCom(props) {
  const [toggle, setToggle] = useState(false);
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
      >
        <Modal.Header closeButton className="">
          <div
            className="w-100 ms-5 me-5  d-flex justify-content-center"
            style={{ backgroundColor: "#ff385c" }}
          >
            <Button
              variant="none"
              className="w-50 "
              style={{
                borderColor: "",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => setToggle(false)}
            >
              Tenant
            </Button>
            <Button
              variant="none"
              className="w-50"
              style={{
                borderColor: "",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => setToggle(true)}
            >
              LandLord
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          {toggle === false ? (
            tenantRegistration === false ? (
              <div>
                <p>Dont have a account?</p>{" "}
                <Link onClick={() => setTenantRegisteration(true)}>
                  Sign up
                </Link>
              </div>
            ) : (
              <div>
                <p>Already have a account?</p>{" "}
                <Link onClick={() => setTenantRegisteration(false)}>
                  Sign In
                </Link>
              </div>
            )
          ) : landlordRegistration === false ? (
            <div>
              <p>Dont have a Account?</p>
              <Link onClick={() => setLandlordRegistration(true)}>Sign up</Link>
            </div>
          ) : (
            <div>
              <p>Already have a Account?</p>
              <Link onClick={() => setLandlordRegistration(false)}>
                Sign in
              </Link>
            </div>
          )}
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCom;
