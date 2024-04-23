import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { adminIsLoggedIn, adminIsNotLogged } from "../Redux/Slices/adminLog";
import { toggleOff } from "../Redux/Slices/toggleSlice";

export default function AdminLogin() {
  const [adminCredentials, setAdminCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const adminIsLogged = useSelector((state) => state.adminLogged.isLogged);
  console.log(adminIsLogged);
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: adminCredentials.email,
          password: adminCredentials.password,
        }),
      });
      const json = await response.json();
      if (!json) {
        return console.log("error");
      } else if (json.success) {
        localStorage.setItem("adminAuthToken", json.adminAuthToken);
        const adminDetail = json.adminDetail;
        const name = adminDetail.name;
        const email = adminDetail.email;
        dispatch(adminIsLoggedIn());
        dispatch(toggleOff());
        console.log(name);
      } else {
        dispatch(adminIsNotLogged());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setAdminCredentials({
      ...adminCredentials,
      [e.target.name]: e.target.value,
    });
  };
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
            value={adminCredentials.email}
            className="userInput"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className="userInput"
            value={adminCredentials.password}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button
            variant="none"
            bsPrefix="submitBtn"
            onClick={handleAdminLogin}
          >
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
