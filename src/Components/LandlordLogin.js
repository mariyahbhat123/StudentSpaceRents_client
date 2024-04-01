import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { isLogged, isNotLogged } from "../Redux/Slices/isLoggedIn";
import { toggleOff } from "../Redux/Slices/toggleSlice";
import { ownerLoggedIn, ownerNotLogged } from "../Redux/Slices/ownerIsLogged";

export default function LandlordLogin() {
  const [ownerLoginCredentials, setOwnerLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setOwnerLoginCredentials({
      ...ownerLoginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/ownerLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: ownerLoginCredentials.email,
          password: ownerLoginCredentials.password,
        }),
      });
      const json = await response.json();
      if (!json) {
        return;
      } else if (json.success) {
        localStorage.setItem("ownerAuthToken", json.ownerAuthToken);
        dispatch(ownerLoggedIn());
        dispatch(toggleOff());
      } else {
        dispatch(ownerNotLogged());
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Form>
        <h2 style={{ textAlign: "center" }}>Landlord Login</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="email"
            value={ownerLoginCredentials.email}
            placeholder="example@hdh.com"
            onChange={onChange}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={ownerLoginCredentials.password}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button onClick={handleLoginSubmit}>Sign In</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
