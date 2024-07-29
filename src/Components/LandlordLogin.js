import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { isLogged, isNotLogged } from "../Redux/Slices/isLoggedIn";
import { toggleOff } from "../Redux/Slices/toggleSlice";
import { ownerLoggedIn, ownerNotLogged } from "../Redux/Slices/ownerIsLogged";
import { ownerData } from "../Redux/Slices/ownerDataSlice";
import "../Styles/LogReg.css";

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

  const [err, setErr] = useState();
  console.log(err);

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
        const ownerDetail = json.ownerDetail;
        const name = ownerDetail.name;
        const email = ownerDetail.email;
        const img = ownerDetail.img;
        localStorage.setItem("ownerData", JSON.stringify(ownerDetail));
        dispatch(ownerData({ name: name, email: email, img: img }));

        dispatch(ownerLoggedIn());
        dispatch(toggleOff());
      } else {
        if (json.error[0].path) {
          setErr(json.error[0].path);
          dispatch(ownerNotLogged());
        } else {
          setErr(json.error);
          dispatch(ownerNotLogged());
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Form>
        <h2 className="userLog-Reg" style={{ textAlign: "center" }}>
          Owner Login
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
            value={ownerLoginCredentials.email}
            placeholder="example@hdh.com"
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
            placeholder="Password"
            value={ownerLoginCredentials.password}
            onChange={onChange}
            className="userInput"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Button
            variant="none"
            onClick={handleLoginSubmit}
            bsPrefix="submitBtn"
          >
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
