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
    img: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  });

  const [err, setErr] = useState("");
  console.log(err);
  const [errMsg, setErrMsg] = useState("");
  console.log(errMsg);

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
      if (json.success) {
        localStorage.setItem("ownerAuthToken", json.ownerAuthToken);
        localStorage.setItem("ownerData", JSON.stringify(ownerCredentials));
        dispatch(isLogged());
        dispatch(toggleOff());
      } else {
        if (json.error) {
          setErr(json.error);
        }
        if (json.msg) {
          setErr(json.error);
          setErrMsg(json.msg);
        }
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
          {err[0].path === "email" ? (
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {err[1].path === "number" ? (
            <p
              style={{
                backgroundColor: "#FFCCCC ",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Please enter Valid Number
            </p>
          ) : err === "number" ? (
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
        {err === "password" ? (
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
