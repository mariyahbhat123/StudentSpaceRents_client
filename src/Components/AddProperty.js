import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import CheckboxAddProperty from "./CheckboxAddProperty";
import GoogleMaps from "./GoogleMaps";
import GooglePlaces from "./GooglePlaces";

export default function AddProperty() {
  const [propertyDetails, setPropertyDetails] = useState({
    landmark: "",
    address: "",

    district: "",
    for: "",

    coordinates: {
      lat: 0,
      lng: 0,
    },
    description: "",
    propertyType: "",
    monthlyRent: 0,
  });

  const [propertyImage, setPropertyImage] = useState({
    img0: "",
    img1: "",
    img2: "",
    img3: "",
  });

  console.log(propertyImage);

  const [checkedProperty, setCheckedProperty] = useState({
    storageSpace: false,
    heatingAndCooling: false,
    furniture: false,
    internetAndCableServices: false,

    breakfast: false,
    lunch: false,
    dinner: false,
  });
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const onChange = (e) => {
    setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value });
  };

  //CHECKBOX
  const checkedOnChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setCheckedProperty({
        ...checkedProperty,
        [e.target.name]: value,
      });
    }
  };

  const [files, setFiles] = useState([]);
  const onImage = (e) => {
    setFiles(e.target.files);
  };

  console.log(checkedProperty.heatingAndCooling);

  const handlePlaceSelect = (data) => {
    console.log("Here...", data);
    console.log("Hello...", data.lng);
    setCenter({ lat: data.lat, lng: data.lng });
    console.log(center);
  };
  var lat;
  var lng;
  const callback = (val) => {
    lat = val.lat;
    lng = val.lng;
    console.log("valueeeeeeee", lat);
  };

  const ownerDetails = useSelector((state) => state.ownerData.ownerD);

  const img0 = propertyImage.img0;
  console.log(img0);

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img0", propertyImage.img0);
    formData.append("img1", propertyImage.img1);
    formData.append("img2", propertyImage.img2);
    formData.append("img3", propertyImage.img3);
    // const propertyData = JSON.stringify(propertyDetails);
    // const ownerDetails = JSON.stringify(ownerData);
    // console.log(propertyData);
    formData.append("propertyType", propertyDetails.propertyType);
    formData.append("landmark", propertyDetails.landmark);
    formData.append("address", propertyDetails.address);
    formData.append("district", propertyDetails.district);
    formData.append("forGender", propertyDetails.for);
    formData.append("monthlyRent", propertyDetails.monthlyRent);
    formData.append(
      " heatingAndCoolingSystem ",
      checkedProperty.heatingAndCooling
    );
    formData.append("storageSpace", checkedProperty.storageSpace);
    formData.append(
      "internetAndCableServices",
      checkedProperty.internetAndCableServices
    );
    formData.append(" Furnished", checkedProperty.furniture);
    formData.append(" breakfast", checkedProperty.breakfast);
    formData.append(" lunch", checkedProperty.lunch);
    formData.append("dinner", checkedProperty.dinner);
    formData.append("lat", lat);
    formData.append("lng", lng);
    formData.append("description", propertyDetails.description);
    formData.append("ownerName", ownerData.name);
    formData.append("ownerEmail", ownerData.email);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      const response = await fetch(
        "http://localhost:5000/api/addProperty",

        {
          method: "POST",

          body: formData,

          //     body: JSON.stringify({
          //
          //       propertyType: propertyDetails.propertyType,
          //       ownerName: ownerData.name,
          //       ownerEmail: ownerData.email,
          //       address: propertyDetails.address,
          //       landmark: propertyDetails.landmark,
          //       district: propertyDetails.district,
          //       monthlyRent: propertyDetails.monthlyRent,
          //       amenities: {
          //         heatingAndCoolingSystem: checkedProperty.heatingAndCooling,
          //         storageSpace: checkedProperty.storageSpace,
          //         internetAndCableServices:
          //           checkedProperty.internetAndCableServices,
          //         Furnished: checkedProperty.furniture,
          //       },
          //       foodIncluded: {
          //         breakfast: checkedProperty.breakfast,
          //         lunch: checkedProperty.lunch,
          //         dinner: checkedProperty.dinner,
          //       },
          //       coordinates: {
          //         lat: lat,
          //         lng: lng,
          //       },
          //       for: propertyDetails.for,
          //       description: propertyDetails.description,
          //     }),
        }
      );

      const json = await response.json();
      if (!json) {
        alert("Enter valid credentials");
      }
      if (json.success) {
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ownerData = useSelector((state) => state.ownerData.ownerD);

  const handleImages = (e) => {
    setPropertyImage({ ...propertyImage, [e.target.name]: e.target.files[0] });
  };
  return (
    <div className="w-100 ms-3">
      <Form
        className="d-flex justify-content-center"
        style={{ boxShadow: "10px", border: "1px solid black" }}
        encType="multipart/form-data"
        onSubmit={handleAddProperty}
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
                accept=".png,.jpg,.jpeg,.webp"
                placeholder="Select Image"
                autoFocus
                onChange={handleImages}
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
                accept=".png,.jpg,.jpeg"
                placeholder="Password"
                onChange={handleImages}
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
                accept=".png,.jpg,.jpeg"
                onChange={handleImages}
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
                accept=".png,.jpg,.jpeg"
                onChange={handleImages}
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
                value={ownerDetails.name}
                placeholder={ownerDetails.name}
                disabled
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
                placeholder={ownerDetails.email}
                value={ownerDetails.email}
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
                onChange={onChange}
              >
                <option selected disabled>
                  SELECT DISTRICT
                </option>
                <option value="Srinagar">Srinagar</option>
                <option value="Baramulla">Baramulla</option>
                <option value="Kupwara">Kupwara</option>
                <option value="Anantnag">Anantnag</option>
                <option value="Pulwama">Pulwama</option>
                <option value="Shopian">Shopian</option>
                <option value="Kulgam">Kulgam</option>
                <option value="Budgam">Budgam</option>
                <option value="Ganderbal">Ganderbal</option>
                <option value="Bandipore">Bandipore</option>
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
                onChange={onChange}
              >
                <option disabled> PROPERTY TYPE</option>
                <option value="Pg">Pg</option>
                <option value="Apartment" name="propertyType">
                  Apartment
                </option>
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
                onChange={onChange}
              >
                <option disabled>FOR</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
                min={2000}
                max={30000}
                autoFocus
                style={{ width: "100%" }}
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
              />
            </Form.Group>
          </div>

          <div>
            <div>
              <GoogleMaps
                height="40vh"
                width="100%"
                center={center}
                setCenter={setCenter}
                callback={callback}
              />
            </div>
            <div
              className="w-50"
              style={{
                position: "absolute",
                zIndex: "10",
                top: "450px",
              }}
            >
              <GooglePlaces handlePlaceSelect={handlePlaceSelect} />
            </div>
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
                  <input
                    type="checkbox"
                    value={true}
                    name="breakfast"
                    onChange={checkedOnChange}
                  />
                  <p>Breakfast</p>
                  <input
                    type="checkbox"
                    value={true}
                    name="lunch"
                    onChange={checkedOnChange}
                  />
                  <p>Lunch</p>
                  <input
                    type="checkbox"
                    value={true}
                    name="dinner"
                    onChange={checkedOnChange}
                  />
                  <p>Dinner</p>
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
                  <input
                    type="checkbox"
                    value={true}
                    name="heatingAndCooling"
                    onChange={checkedOnChange}
                  />
                  <p> Heating/Cooling System</p>
                  <input
                    type="checkbox"
                    value={true}
                    name="furniture"
                    onChange={checkedOnChange}
                  />
                  <p>Furnished</p>
                  <input
                    type="checkbox"
                    value={true}
                    name="internetAndCableServices"
                    onChange={checkedOnChange}
                  />
                  <p>Internet/Cable Services</p>
                  <input
                    type="checkbox"
                    value={true}
                    name="storageSpace"
                    onChange={checkedOnChange}
                  />
                  <p>Storage Space</p>
                </div>
              </div>
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Control
              type="textarea"
              name="description"
              placeholder="DESCRIPTION"
              autoFocus
              onChange={onChange}
            /> */}
            <textarea
              name="description"
              placeholder="DESCRIPTION"
              onChange={onChange}
              style={{ width: "100%", height: "140px" }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="exampleForm.ControlTextarea1"
          >
            <Button name="submit" onClick={handleAddProperty}>
              Submit
            </Button>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}
