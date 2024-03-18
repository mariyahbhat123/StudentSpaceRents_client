import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function LandlordRegistration() {
  return (
    <div>
      {" "}
      <Form>
        <h2 style={{ textAlign: "center" }}>LandLord Signup</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Username" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="example@ghg.com" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="Mobile Number"
            autoFocus
            minLength={10}
            maxLength={10}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            placeholder="Password'
              "
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            placeholder="Comfirm Password'
              "
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button>Sign Up</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
