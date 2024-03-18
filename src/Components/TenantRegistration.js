import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import TenantLogin from "./TenantLogin";
import { Link } from "react-router-dom";

export default function TenantRegistration() {
  return (
    <div>
      <Form>
        <h2 style={{ textAlign: "center" }}>Tenant Signup</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Username" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="example@ghg.com" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select id="disabledSelect">
            <option hidden>Select Gender</option>
            <option>Female</option>
            <option>Male</option>
          </Form.Select>
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
