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
import { tenantUserData } from "../Redux/Slices/userDataSlice";
export default function TenantRegistration() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    confirmPassword: "",
    img: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  });

  const [err, setErr] = useState("");
  const [errMsg, setErrMsg] = useState("");
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

      if (json.success) {
        localStorage.setItem("authToken", json.token);
        localStorage.setItem("tenantData", JSON.stringify(credentials));
        dispatch(
          tenantUserData({
            name: credentials.name,
            email: credentials.email,
            gender: credentials.gender,
            img: credentials.img,
          })
        );
        dispatch(toggleOff());
        dispatch(isLogged());
      } else {
        if (json.error[0].path) {
          setErr(json.error[0].path);
        } else if (json.error) {
          setErr(json.error);
          setErrMsg(json.msg);
        }
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
          {err === "email" ? (
            <p
              style={{
                backgroundColor: "#FFCCCC ",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Please Enter a valid email address
            </p>
          ) : err === "emailExist" ? (
            <p
              style={{
                backgroundColor: "#FFCCCC ",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {errMsg}
            </p>
          ) : (
            ""
          )}
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
        {err == "password" ? (
          <p
            style={{
              backgroundColor: "#FFCCCC ",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {errMsg}
          </p>
        ) : (
          ""
        )}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={credentials.confirmPassword}
            onChange={onChange}
            className="userInput"
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
