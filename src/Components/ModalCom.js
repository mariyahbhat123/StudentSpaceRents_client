import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalCom(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Modal show={props.show} onHide={props.close} animation={true}>
        <Modal.Header closeButton className="">
          <div
            className="w-100 ms-5 me-5  d-flex justify-content-center"
            style={{ backgroundColor: "aqua" }}
          >
            <Button
              variant="none"
              className="w-50 "
              style={{ borderColor: "black" }}
              onClick={() => setToggle(false)}
            >
              Tenant
            </Button>
            <Button
              variant="none"
              className="w-50"
              style={{ borderColor: "black" }}
              onClick={() => setToggle(true)}
            >
              LandLord
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h2 style={{ textAlign: "center" }}>
              {toggle === true ? "Sign Up" : "Login"}
            </h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="password"
                placeholder="Password'
              "
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-center"
              controlId="exampleForm.ControlTextarea1"
            >
              <Button>Sign In</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCom;
