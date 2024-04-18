import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { isLogged } from "../Redux/Slices/isLoggedIn";
import { toggleOff } from "../Redux/Slices/toggleSlice";
import "../Styles/LogReg.css";

export default function LandlordRegistration() {
  const [ownerCredentials, setOwnerCredentials] = useState({
    username: "",
    email: "",
    number: null,
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setOwnerCredentials({
      ...ownerCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/owners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: ownerCredentials.username,
          email: ownerCredentials.email,
          number: ownerCredentials.number,
          password: ownerCredentials.password,
          confirmPassword: ownerCredentials.confirmPassword,
        }),
      });
      const json = await response.json();
      if (!json) {
        return alert("Please enter correct credentials");
      } else if (json.success) {
        dispatch(isLogged());
        dispatch(toggleOff());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {" "}
      <Form>
        <h2 className="userLog-Reg" style={{ textAlign: "center" }}>
          Owner Signup
        </h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            onChange={onChange}
            autoFocus
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            name="number"
            placeholder="Mobile Number"
            className="userInput"
            minLength={10}
            maxLength={10}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="password"
            className="userInput"
            placeholder="Password"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="confirmPassword"
            className="userInput"
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button variant="none" onClick={handleSubmit} bsPrefix="submitBtn">
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
