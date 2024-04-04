import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import CheckboxAddProperty from "./CheckboxAddProperty";

export default function AddProperty() {
  const [propertyDetails, setPropertyDetails] = useState({
    img0: "",
    img1: "",
    img2: "",
    img3: "",
    ownerEmail: "",
    ownerName: "",
    landmark: "",
    address: "",
    coordinates: {
      lat: null,
      long: null,
    },
    district: "",
    for: "",
    amenities: {
      storageSpace: null,
      heatingAndCooling: null,
      furniture: null,
    },
    foodIncluded: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    description: "",
    propertyType: "",
    monthlyRent: null,
  });

  const onClick = (e) => {
    setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-100 ms-3">
      <Form
        className="d-flex justify-content-center"
        style={{ boxShadow: "10px", border: "1px solid black" }}
        onSubmit={onClick}
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
                name="district"
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
                name="propertyType"
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
                name="for"
              >
                <option disabled>FOR</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
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
                name="lat"
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
                name="long"
                placeholder="LONGITUDE"
                autoFocus
                style={{ width: "100%" }}
              />
            </Form.Group>
          </div>
          <div className="d-flex">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <div
                style={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "10px",
                }}
              >
                <h6 style={{ textAlign: "center" }}>Food Included</h6>
                <div className="ms-1">
                  <CheckboxAddProperty
                    one="Breakfast"
                    two="Lunch"
                    three="dinner"
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 ms-3"
              controlId="exampleForm.ControlInput1"
              style={{ width: "50%" }}
            >
              <div
                style={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "10px",
                }}
              >
                <h6 style={{ textAlign: "center" }}>Amenities Included</h6>
                <div className="ms-1">
                  <CheckboxAddProperty
                    one="HeatingAndCooling"
                    two="Storage Space"
                    three="Internet"
                  />
                </div>
              </div>
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
