import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function AdminLogin() {
  const [adminCredentials, setAdminCredentials] = useState({
    email: "",
    password: "",
  });

  console.log(adminCredentials);

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
        const adminDetail = json.adminDetail;
        const name = adminDetail.name;
        const email = adminDetail.email;
        console.log(name);
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
