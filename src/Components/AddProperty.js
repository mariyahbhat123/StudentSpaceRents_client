import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function AddProperty() {
  return (
    <div className="w-100 ms-3">
      <Form
        className="d-flex justify-content-center"
        style={{ boxShadow: "10px", border: "1px solid black" }}
      >
        <div className="">
          <div className="d-flex justify-content-center">
            <h5>Add Property</h5>
          </div>
          <div className="d-flex ">
            <Form.Group
              className="mb-3  "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                className="w-40 "
                type="file"
                name="img0"
                placeholder="Select Image"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                className="w-40 "
                type="file"
                name="img1"
                placeholder="Password"
              />
            </Form.Group>
          </div>
          <div className="d-flex">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="w-40"
                type="file"
                name="img2"
                placeholder="Select Image"
                autoFocus
              />{" "}
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                className=" w-40"
                type="file"
                name="img3"
                placeholder="Select Image"
                autoFocus
              />
            </Form.Group>
          </div>
          <div className=" d-flex ">
            <Form.Group
              className="mb-3 "
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Control
                className=""
                type="text"
                name="ownerName"
                placeholder="OWNER NAME"
                style={{ width: "100%" }}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                name="ownerEmail"
                placeholder="OWNER EMAIL"
                autoFocus
                style={{ width: "100%" }}
              />
            </Form.Group>
          </div>
          <div className="d-flex ">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100%" }}
              >
                <option>SELECT DISTRICT</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100%" }}
              >
                <option>PROPERTY TYPE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100%" }}
              >
                <option>FOR</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100%" }}
              >
                <option>Amenities</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </Form.Select>
            </Form.Group>{" "}
          </div>
          <div className="d-flex justify-content-center">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100%" }}
              >
                <option>Food included</option>
                <option value="1">One</option>
                <option value="2">Two</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="number"
                name="monthlyRent"
                placeholder="Monthly Rent"
                autoFocus
                style={{ width: "100%" }}
              />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                name="address"
                placeholder="ADDRESS"
                autoFocus
                style={{ width: "100%" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                name="landmark"
                placeholder="LANDMARK IF ANY"
                autoFocus
                style={{ width: "100%" }}
              />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                name="address"
                placeholder="LATITUDE"
                autoFocus
                style={{ width: "100%" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ms-2"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                name="landmark"
                placeholder="LONGITUDE"
                autoFocus
                style={{ width: "100%" }}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="textbox"
              name="description"
              placeholder="DESCRIPTION"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="exampleForm.ControlTextarea1"
          >
            <Button name="submit">Submit</Button>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}
