import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
// import CheckboxAddProperty from "./CheckboxAddProperty";
import GoogleMaps from "./GoogleMaps";
import GooglePlaces from "./GooglePlaces";
import CloseIcon from "@mui/icons-material/Close";

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
  const [center, setCenter] = useState({ lat: 33.2778, lng: 75.3412 });
  const [propertySuccess, setPropertySuccess] = useState("");

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

  console.log(
    "breakfast",
    checkedProperty.breakfast,
    "dinner",
    checkedProperty.dinner,
    "lunch",
    checkedProperty.lunch
  );

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

  const handleSuccess = () => {
    if (propertySuccess != "") {
      setPropertyDetails({
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

      setPropertyImage({ img0: "", img1: "", img2: "", img3: "" });
      setCheckedProperty({
        storageSpace: false,
        heatingAndCooling: false,
        furniture: false,
        internetAndCableServices: false,

        breakfast: false,
        lunch: false,
        dinner: false,
      });
    }
    return;
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
      "heatingAndCoolingSystem",
      checkedProperty.heatingAndCooling
    );
    formData.append("storageSpace", checkedProperty.storageSpace);
    formData.append(
      "internetAndCableServices",
      checkedProperty.internetAndCableServices
    );
    formData.append("Furnished", checkedProperty.furniture);
    formData.append("breakfast", checkedProperty.breakfast);
    formData.append("lunch", checkedProperty.lunch);
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
        alert("Property Successfully added");
        setPropertySuccess("Property Successfully added");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ownerD = localStorage.getItem("ownerData");
  const ownerData = JSON.parse(ownerD);
  console.log(ownerData);

  const handleImages = (e) => {
    setPropertyImage({ ...propertyImage, [e.target.name]: e.target.files[0] });
  };

  useEffect(() => {
    handleSuccess();
  }, [propertySuccess]);

  const handleShowHideSuccess = () => {
    if (propertySuccess != "") {
      setPropertySuccess("");
    }
  };
  return (
    <div className="w-100 p-2">
      <Form
        className="d-flex justify-content-center p-4"
        style={{ boxShadow: "10px", border: "1px solid #ff385c" }}
        encType="multipart/form-data"
        onSubmit={handleAddProperty}
      >
        <div className="">
          <div className="d-flex justify-content-center mb-4">
            <h5>Add Property</h5>
          </div>

          <div>
            {propertySuccess !== "" ? (
              <div
                style={{
                  backgroundColor: "#5bb85d ",
                  fontWeight: "bold",
                  paddingLeft: "13px",
                  paddingRight: "7px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "33px",
                  paddingTop: "16px",
                  marginBottom: "15px",
                }}
              >
                <p className="">{propertySuccess}</p>

                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    height: "29px",
                    display: "flex",
                  }}
                  onClick={() => {
                    handleShowHideSuccess();
                  }}
                >
                  <CloseIcon fontSize="23" style={{ color: "red" }} />
                </button>
              </div>
            ) : (
              ""
            )}
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
                value={ownerData.name}
                placeholder={ownerData.name}
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
                placeholder={ownerData.email}
                value={ownerData.email}
                autoFocus
                disabled
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
                value={propertyDetails.district}
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
                value={propertyDetails.propertyType}
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
              className="w-50 "
              style={{
                position: "absolute",
                zIndex: "10",
                top: "440px",
                left: "35%",
              }}
            >
              <GooglePlaces handlePlaceSelect={handlePlaceSelect} p="10" />
            </div>
          </div>

          <div className="">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div
                className="mt-4 p-2"
                style={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "10px",
                }}
              >
                <h5 className="mt-2 mb-4" style={{ textAlign: "center" }}>
                  Food Included
                </h5>
                <div
                  className="ms-1 d-flex"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <div className="d-flex">
                    <div className="me-2">
                      <input
                        type="checkbox"
                        value={true}
                        name="breakfast"
                        onChange={checkedOnChange}
                      />
                    </div>

                    <p>Breakfast</p>
                  </div>
                  <div className="d-flex">
                    <div className="me-2">
                      <input
                        type="checkbox"
                        value={true}
                        name="lunch"
                        onChange={checkedOnChange}
                      />
                    </div>
                    <p>Lunch</p>
                  </div>
                  <div className="d-flex">
                    <div className="me-2">
                      <input
                        type="checkbox"
                        value={true}
                        name="dinner"
                        onChange={checkedOnChange}
                      />
                    </div>
                    <p>Dinner</p>
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3  mt-4 "
              controlId="exampleForm.ControlInput1"
            >
              <div
                className="p-4"
                style={{
                  width: "100%",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "10px",
                }}
              >
                <h5 className="mb-4" style={{ textAlign: "center" }}>
                  Amenities Included
                </h5>
                <div
                  className=" d-flex"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <div className="d-flex">
                    <div className="me-2">
                      {" "}
                      <input
                        type="checkbox"
                        value={true}
                        name="heatingAndCooling"
                        onChange={checkedOnChange}
                      />
                    </div>
                    <p>
                      {" "}
                      Heating/
                      <br />
                      Cooling System
                    </p>
                  </div>
                  <div className="d-flex">
                    <div className="me-2">
                      {" "}
                      <input
                        type="checkbox"
                        value={true}
                        name="furniture"
                        onChange={checkedOnChange}
                      />
                    </div>
                    <p>Furnished</p>
                  </div>

                  <div className="d-flex">
                    <div className="me-2">
                      <input
                        type="checkbox"
                        value={true}
                        name="internetAndCableServices"
                        onChange={checkedOnChange}
                      />
                    </div>{" "}
                    <p>
                      Internet/
                      <br />
                      Cable Services
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="me-2">
                      {" "}
                      <input
                        type="checkbox"
                        value={true}
                        name="storageSpace"
                        onChange={checkedOnChange}
                      />
                    </div>{" "}
                    <p>Storage Space</p>
                  </div>
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
              style={{
                width: "100%",
                height: "140px",
                border: "1px solid #ff385c",
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="exampleForm.ControlTextarea1"
          >
            <Button
              className="p-2"
              name="submit"
              variant="none"
              onClick={handleAddProperty}
              style={{
                backgroundColor: "#ff385c",
                width: "50%",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}
