import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function AdminLogin() {
  return (
    <div>
      {" "}
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="email"
            placeholder="example@hdh.com"
            autoFocus
            className="userInput"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className="userInput"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button variant="none" bsPrefix="submitBtn">
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
