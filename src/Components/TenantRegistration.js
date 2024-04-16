import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import TenantLogin from "./TenantLogin";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleOff } from "../Redux/Slices/toggleSlice";
import { isLogged } from "../Redux/Slices/isLoggedIn";
import "../Styles/LogReg.css";

export default function TenantRegistration() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    confirmPassword: "",
  });

  const closeReg = useSelector((state) => state.toggle.active);
  console.log(closeReg);
  const dispatch = useDispatch();
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
          confirmPassword: credentials.confirmPassword,
        }),
      });

      const json = await response.json();
      if (!json) {
        alert("Enter valid credentials");
      }
      if (json.success) {
        dispatch(toggleOff());
        dispatch(isLogged());
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
        <h2 className="userLog-Reg" style={{ textAlign: "center" }}>
          Tenant Signup
        </h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            name="name"
            placeholder="Username"
            value={credentials.name}
            autoFocus
            onChange={onChange}
            className="userInput"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="email"
            placeholder="example@ghg.com"
            onChange={onChange}
            className="userInput"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            id="disabledSelect"
            name="gender"
            value={credentials.gender}
            onChange={onChange}
            className="userInput"
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
            placeholder="Password"
            className="userInput"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Comfirm Password"
            value={credentials.confirmPassword}
            onChange={onChange}
            className="userInput"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button variant="none" onClick={handleSubmit} className="submitBtn">
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
