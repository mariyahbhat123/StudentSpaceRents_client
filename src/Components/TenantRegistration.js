import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import TenantLogin from "./TenantLogin";
import { Link } from "react-router-dom";

export default function TenantRegistration() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          gender: credentials.gender,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      if (!json) {
        alert("Enter valid credentials");
      }
      if (json.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <h2 style={{ textAlign: "center" }}>Tenant Signup</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            name="name"
            placeholder="Username"
            value={credentials.name}
            autoFocus
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="email"
            placeholder="example@ghg.com"
            autoFocus
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            id="disabledSelect"
            name="gender"
            value={credentials.gender}
            onChange={onChange}
          >
            <option hidden>Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
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
          <Button onClick={handleSubmit}>Sign Up</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
