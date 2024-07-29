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
import "../Styles/LogReg.css";
export default function TenantLogin() {
  const [checkCredentials, setCheckCredentials] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState();
  console.log(err);
  const [errPass, setErrPass] = useState("");

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

        const tenantDetail = json.userDetail;
        console.log(tenantDetail.name);
        const name = tenantDetail.name;
        const email = tenantDetail.email;
        const gender = tenantDetail.gender;
        const img = tenantDetail.img;
        localStorage.setItem("tenantData", JSON.stringify(tenantDetail));
        dispatch(
          tenantUserData({
            name: name,
            email: email,
            gender: gender,
            img: img,
          })
        );

        console.log("success");
        dispatch(toggleOff());

        dispatch(isLogged());
        console.log("YPPPPP");
      } else {
        setErr(json.error);

        dispatch(isNotLogged());
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

  const user = useSelector((state) => state.tenantDataSlice);
  console.log(user);

  return (
    <div>
      <Form>
        <h2 className="userLog-Reg" style={{ textAlign: "center" }}>
          Tenant Login
        </h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {err ? (
            err === "email" ? (
              <p
                style={{
                  backgroundColor: "#FFCCCC ",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Please Enter a valid email address
              </p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <Form.Control
            type="email"
            name="email"
            value={checkCredentials.email}
            placeholder="name@gmail.com"
            onChange={onChange}
            autoFocus
            className="userInput"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          {err ? (
            err === "password" ? (
              <p
                style={{
                  backgroundColor: "#FFCCCC ",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Please Enter a valid password
              </p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <Form.Control
            type="password"
            name="password"
            value={checkCredentials.password}
            placeholder="Password"
            onChange={onChange}
            className="userInput"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button
            name="submit"
            variant="none"
            onClick={handleLoginSubmit}
            className=""
            bsPrefix="submitBtn"
          >
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
