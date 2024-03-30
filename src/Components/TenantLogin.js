import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import TenantRegistration from "./TenantRegistration";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isLoggedIn, { isLogged, isNotLogged } from "../Redux/Slices/isLoggedIn";
import { toggleOff } from "../Redux/Slices/toggleSlice";
import { jwtDecode } from "jwt-decode";
import { tenantUserData } from "../Redux/Slices/userDataSlice";
export default function TenantLogin() {
  const [checkCredentials, setCheckCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/loginUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: checkCredentials.email,
          password: checkCredentials.password,
        }),
      });
      const json = await response.json();
      if (!json) {
        alert("Enter valid credentials");
        console.log("not valid");
      } else if (json.success) {
        localStorage.setItem("authToken", json.authToken);
        console.log("success");
        if (authToken !== null) {
          dispatch(toggleOff());

          dispatch(isLogged());
          console.log("YPPPPP");
          const userData = json.userData;
          dispatch(tenantUserData(userData));
        } else {
          dispatch(isNotLogged());
        }
      }
    } catch (err) {
      console.log(err);
      console.log("write");
    }
  };
  const onChange = (e) => {
    setCheckCredentials({
      ...checkCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const authToken = localStorage.getItem("authToken");
  console.log(authToken);
  const decodedToken = jwtDecode(authToken);
  console.log(decodedToken);

  const user = useSelector((state) => state.tenantDataSlice);
  console.log(user);

  return (
    <div>
      <Form>
        <h2 style={{ textAlign: "center" }}>Tenant Login</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="email"
            value={checkCredentials.email}
            placeholder="name@gmail.com"
            onChange={onChange}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="password"
            value={checkCredentials.password}
            placeholder="Password"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button name="submit" onClick={handleLoginSubmit}>
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
