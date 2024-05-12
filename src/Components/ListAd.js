import React, { useState, useEffect, useMemo } from "react";
import CardComponent from "./CardComponent";
import NavBar from "./navBar";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ReplayIcon from "@mui/icons-material/Replay";
import RangeSlider from "./RangeSlider";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/esm/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ListAd(props) {
  const { state } = useLocation();
  const stateDistrict = state.district;
  const locality = state.locality;

  // PROPERTY DATA
  const [propertyData, setPropertyData] = useState([]);
  console.log(propertyData);
  const [propertyId, setPropertyId] = useState("");

  const [district, setDistrict] = useState(stateDistrict);
  const [propertyAddress, setPropertyAddress] = useState(locality);
  const [propertyType, setPropertyType] = useState("");
  const [genderFor, setGenderFor] = useState("");

  // const [foodIncludedFilter, setFoodIncludedFilter] = useState({
  //   breakfast: false,
  //   lunch: false,
  //   dinner: false,
  // });

  // FETCHING PROPERTY DETAILS
  const loadData = async () => {
    let response = await fetch(`http://192.168.29.70:5000/api/propertyData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setPropertyData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(propertyType);

  const handlePropetyType = (e) => {
    if (e.target.value === propertyType) {
      setPropertyType("");
      return;
    }
    setPropertyType(e.target.value);
  };

  const handleGender = (e) => {
    if (e.target.value === genderFor) {
      setGenderFor("");
      return;
    }
    setGenderFor(e.target.value);
  };
  const [rent, setRent] = useState();
  console.log(rent);
  const handleMonthlyRent = (rent) => {
    setRent(rent);
  };
  console.log(genderFor);

  const [breakfast, setBreakfast] = useState(false);
  const [dinner, setDinner] = useState(false);
  const handleBreakfast = (e) => {
    if (e.target.value === breakfast) {
      setBreakfast(false);
      return;
    }
    setBreakfast(e.target.value);
  };
  const handleDinner = (e) => {
    if (e.target.value === dinner) {
      setDinner(false);
      return;
    }
    setDinner(true);
  };

  console.log(dinner);
  const filterPropertyData = useMemo(
    (item) => {
      if (
        !propertyType &&
        !genderFor &&
        !rent < 2000 &&
        breakfast === false &&
        !district &&
        !locality
      )
        return propertyData;

      return propertyData.filter((item) => {
        return (
          (!propertyType ? true : item.propertyType === propertyType) &&
          (!genderFor ? true : item.for === genderFor) &&
          (rent <= 2000 ? true : item.monthlyRent >= rent) &&
          (breakfast === false
            ? true
            : item.foodIncluded.breakfast === breakfast) &&
          (dinner === false ? true : item.foodIncluded.dinner === dinner) &&
          (!district ? true : item.district === district) &&
          (!locality ? true : item.address === locality)
        );
      });
    },
    [propertyData, propertyType, genderFor, rent, dinner, district, locality]
  );

  return (
    <div className="w-100">
      {/* NAVBAR LIST ADVERTISEMENT */}
      <div style={{ backgroundColor: "#ff385c" }}>
        <NavBar />
      </div>

      {/* BODY */}
      <div
        className="d-flex"
        style={{ flexDirection: "row", height: "90.7vh" }}
      >
        {/* SIDEBAR FILTER LIST ADVERTISEMENT */}
        <div
          className=""
          style={{
            width: "30%",
            border: "2px solid black",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="mt-4" style={{ justifyContent: "center" }}>
            <div className="w-100 ms-2 me-1">
              <input
                className="ms-2"
                type="search"
                value={locality}
                style={{
                  width: "75%",
                  padding: "8px",
                  borderRadius: "50px",
                  border: "1px solid #ff385c",
                }}
                placeholder="Search Locality"
              />
              <button
                variant="none"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#ff385c",
                  padding: "4px",
                  color: "white",
                  borderRadius: "50%",
                  marginLeft: "4px",
                  border: "1px solid white",
                }}
              >
                <SearchIcon />
              </button>{" "}
            </div>
            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="d-flex  "
                style={{
                  width: "40%",
                  border: "1px solid black",
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderRadius: "50px",
                  padding: "10px",
                  border: "1px solid #ff385c",
                }}
              >
                {district ? (
                  <>
                    <h6 className="ms-2" style={{ marginTop: "10px" }}>
                      {district}
                    </h6>
                    <div className="ms-2">
                      <button
                        className="p-1 mb-2 mt-2"
                        style={{
                          border: "0",

                          backgroundColor: "white",
                          height: "22px",
                        }}
                        onClick={setDistrict("")}
                      >
                        <ClearIcon fontSize="20px" className="mb-3" />
                      </button>
                    </div>
                  </>
                ) : (
                  <select style={{ border: "none" }}>
                    <option value="" selected disabled>
                      District
                    </option>
                    <option value="Srinagar">Srinagar</option>
                    <option value="Baramulla">Baramulla</option>
                    <option value="Kupwara">Kupwara</option>
                    <option value="Anantnag">Anantnag</option>
                    <option value="Pulwama">Pulwama</option>

                    <option value="Ganderbal">Ganderbal</option>
                  </select>
                )}
              </div>
            </div>
          </div>
          {/* FILTER LISTING ADVERTISEMENT */}
          <div
            className="d-flex "
            style={{ justifyContent: "center", marginTop: "16%" }}
          >
            <div
              className="p-4"
              style={{
                width: "85%",
                border: "1px solid #ff385c",
                backgroundColor: "white",
                borderRadius: "50px",
              }}
            >
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div style={{ color: "#ff385c" }}>
                  <h5>Filters</h5>
                </div>
                <div className="">
                  {" "}
                  <button
                    className="d-flex"
                    style={{
                      border: "0",
                      backgroundColor: "white",
                      color: "#ff385c",
                    }}
                  >
                    <ReplayIcon className="  mb-1 " />

                    <h5>Reset</h5>
                  </button>
                </div>
              </div>

              <hr />
              <div className="w-100">
                <div className="">
                  <h5 className="mb-3">Accomodation Type</h5>
                  <input
                    type="checkbox"
                    className="me-1"
                    name="propertyType"
                    value="Pg"
                    checked={propertyType === "Pg"}
                    onChange={(e) => handlePropetyType(e)}

                    // setFilters({ propertyType: e.target.value })
                  />
                  PG
                  <input
                    type="checkbox"
                    className="ms-3 me-1"
                    name="propertyType"
                    value="Apartment"
                    checked={propertyType === "Apartment"}
                    onChange={(e) => handlePropetyType(e)}
                    // setFilters({ propertyType: e.target.value })
                  />
                  Apartment
                  {/* <input type="checkbox" className="ms-3 me-1" />
                  Room */}
                </div>
                <div className="mt-3">
                  <h5 className="mb-3">For</h5>
                  <input
                    type="checkbox"
                    className="me-1"
                    name="for"
                    value="Male"
                    onChange={(e) => handleGender(e)}
                  />
                  Male
                  <input
                    type="checkbox"
                    className="ms-3 me-1"
                    value="Female"
                    name="for"
                    onChange={(e) => handleGender(e)}
                  />
                  Female
                </div>

                <div className="mt-3">
                  <RangeSlider handleMonthlyRent={handleMonthlyRent} />
                </div>

                <div className="mt-3">
                  <h5 className="mb-3">Food Included</h5>
                  <input
                    type="checkbox"
                    className="me-1"
                    name="breakfast"
                    value={breakfast}
                    onChange={(e) => handleBreakfast(e)}
                  />
                  BreakFast
                  <input type="checkbox" className="ms-3 me-1" name="lunch" />
                  Lunch
                  <input
                    type="checkbox"
                    className="ms-3"
                    name="dinner"
                    value={dinner}
                    onChange={(e) => handleDinner(e)}
                  />{" "}
                  Dinner
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LIST OF PROPERTIES */}
        <div className="" style={{ width: "70%" }}>
          <div style={{ overflowY: "scroll", height: "100%" }}>
            <div className="mt-5 mb-5">
              <h3 className="">Properties</h3>{" "}
              <div className="ms-4 ">
                <Row xs={1} md={3} className="w-100">
                  {filterPropertyData.map((item, idx) => {
                    return (
                      <>
                        {" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/PropertyDetail"
                          state={{ id: item._id }}
                        >
                          {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                          <Col key={idx}>
                            <Card
                              className="mt-5"
                              onClick={() => setPropertyId(item._id)}
                            >
                              <Carousel fade className="w-100 " interval={null}>
                                <Carousel.Item className="carousel-item">
                                  <Card.Img
                                    variant="top"
                                    src={`http://localhost:5000/images/${item.img0}`}
                                    alt=""
                                    style={{ height: "200px" }}
                                  />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item">
                                  <Card.Img
                                    variant="top"
                                    src={`http://localhost:5000/images/${item.img1}`}
                                    alt=""
                                    style={{ height: "200px" }}
                                  />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item">
                                  <Card.Img
                                    variant="top"
                                    src={`http://localhost:5000/images/${item.img2}`}
                                    alt=""
                                    style={{ height: "200px" }}
                                  />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item">
                                  <Card.Img
                                    variant="top"
                                    src={`http://localhost:5000/images/${item.img3}`}
                                    alt=""
                                    style={{ height: "200px" }}
                                  />
                                </Carousel.Item>
                              </Carousel>

                              <Card.Body>
                                <h6>
                                  <b>{item.propertyType}</b>
                                </h6>
                                <Card.Title>{item.address} </Card.Title>
                                <Card.Text>
                                  <h6>
                                    <b>{item.monthlyRent.toLocaleString()}</b>
                                    /month
                                  </h6>
                                </Card.Text>
                              </Card.Body>
                            </Card>{" "}
                          </Col>{" "}
                        </Link>
                        {/* ))} */}
                      </>
                    );
                  })}{" "}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
