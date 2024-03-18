import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import TenantRegistration from "./TenantRegistration";
import { Link } from "react-router-dom";
export default function TenantLogin() {
  return (
    <div>
      <Form>
        <h2 style={{ textAlign: "center" }}>Tenant Login</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Username" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
    </div>
  );
}
