import React, { useState, useEffect } from "react";
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
  const district = state.district;
  const locality = state.locality;

  // PROPERTY DATA
  const [propertyData, setPropertyData] = useState([]);
  console.log(propertyData);
  const [propertyId, setPropertyId] = useState("");

  const [filters, setFilters] = useState({
    district: district,
    address: locality,
    for: "",
    propertyType: "",
    monthlyRent: "",
  });
  const [foodIncludedFilter, setFoodIncludedFilter] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  console.log(foodIncludedFilter.dinner);

  // FETCHING PROPERTY DETAILS
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/propertyData", {
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

  // FILTER FUNCTION
  const handleFilter = (item) => {
    // if (filters.for) {
    //   if (item.district === filters.district) {
    //     return filters.district;
    //   }
    //   if (item.for === filters.for) {
    //     return filters.for;
    //   }

    //   if (item.foodIncluded === foodIncludedFilter) {
    //     return foodIncludedFilter;
    //   } else {
    //     return propertyData;
    //   }
    // }
    if (district) {
      if (item.district === district) {
        return district;
      }
    } else if (acomo === true) {
      if (item.propertyType === filters.propertyType) {
        return filters.propertyType;
      }
    } else if (checkGender === true) {
      if (item.for !== filters.for) {
        return filters.for;
      }
    } else {
      return propertyData;
    }
  };

  const [acomo, setAcomo] = useState(false);
  const accomodation = (e) => {
    if (acomo === true) {
      setFilters({ propertyType: e.target.value });
      setAcomo(false);
    } else {
      setAcomo(true);
    }
  };
  const [checkGender, setCheckGender] = useState(false);
  const forCheck = (e) => {
    if (checkGender === true) {
      setFilters({ for: e.target.value });
      setCheckGender(false);
    } else {
      setCheckGender(true);
    }
  };
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
        {/* SIDEBAR LIST ADVERTISEMENT */}
        <div
          className=" "
          style={{
            width: "30%",
            border: "2px solid black",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="mt-4 d-flex" style={{ justifyContent: "center" }}>
            <div className="d-flex w-100 ms-2 me-1">
              <div
                className="d-flex p-1 "
                style={{
                  width: "100px",
                  border: "1px solid black",
                  backgroundColor: "white",
                  justifyContent: "center",
                  borderRadius: "50px",
                }}
              >
                <h6 className="ms-2" style={{ marginTop: "10px" }}>
                  {district ? district : "district"}
                </h6>
                <div className="ms-2">
                  <button
                    className="p-1 mb-2 mt-2"
                    style={{
                      border: "0",

                      backgroundColor: "white",
                      height: "22px",
                    }}
                  >
                    <ClearIcon fontSize="20px" className="mb-3" />
                  </button>
                </div>
              </div>
              <input
                className="ms-2"
                type="search"
                value={locality}
                style={{ width: "65%", padding: "8px", borderRadius: "50px" }}
                placeholder="Search Locality"
              />
              <button
                variant="none"
                style={{
                  width: "50px",
                  backgroundColor: "#ff385c",
                  padding: "4px",
                  color: "white",
                  borderRadius: "100%",
                  marginLeft: "4px",
                }}
              >
                <SearchIcon />
              </button>{" "}
            </div>
          </div>
          {/* FILTER LISTING ADVERTISEMENT */}
          <div className="d-flex mt-4" style={{ justifyContent: "center" }}>
            <div
              className="p-4"
              style={{
                width: "85%",
                border: "1px solid black",
                backgroundColor: "white",
                borderRadius: "50px",
              }}
            >
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div style={{ color: "#008387" }}>
                  <h5>Filters</h5>
                </div>
                <div className="d-flex ">
                  {" "}
                  <button
                    className=""
                    style={{ border: "0", backgroundColor: "white" }}
                  >
                    <ReplayIcon className="  mb-1 " />
                  </button>
                  <h5>Reset</h5>
                </div>
              </div>

              <hr />
              <div className="w-100">
                <div className="">
                  <h5 className="mb-3">Accomodation Type</h5>
                  <input
                    type="checkbox"
                    className="me-1"
                    value="Pg"
                    onChange={(e) => accomodation(e)}
                    // setFilters({ propertyType: e.target.value })
                  />
                  PG
                  <input
                    type="checkbox"
                    className="ms-3 me-1"
                    value="Apartment"
                    onChange={(e) => accomodation(e)}
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
                    value="Male"
                    onClick={(e) => forCheck(e)}
                  />
                  Male
                  <input
                    type="checkbox"
                    className="ms-3 me-1"
                    value="Female"
                    onClick={(e) => forCheck(e)}
                    // onChange={(e) => setFilters({ for: e.target.value })}
                  />
                  Female
                </div>

                <div className="mt-3">
                  <RangeSlider />
                </div>
                {/* <div className="mt-2">
                  <h5 className="mb-3">Preferred For</h5>
                  <input type="checkbox" className="me-1" />
                  Student
                  <input type="checkbox" className="ms-3 me-1" />
                  Professional
                </div> */}
                <div className="mt-3">
                  <h5 className="mb-3">Food Included</h5>
                  <input
                    type="checkbox"
                    className="me-1"
                    name="breakfast"
                    onClick={
                      () => setFoodIncludedFilter({ breakfast: true })
                      // return (
                      //   <>
                      //     {filters.foodIncluded.breakfast === false
                      //       ? setFilters({
                      //           foodIncluded: {
                      //             breakfast: true,
                      //           },
                      //         })
                      //       : ""}
                      //   </>
                      // );
                    }
                  />
                  BreakFast
                  <input
                    type="checkbox"
                    className="ms-3 me-1"
                    name="lunch"
                    onClick={
                      () => setFoodIncludedFilter({ lunch: true })
                      // filters.foodIncluded.lunch === false
                      //   ? setFilters({
                      //       foodIncluded: {
                      //         lunch: true,
                      //       },
                      //     })
                      //   : setFilters({ foodIncluded: { lunch: false } })
                    }
                  />
                  Lunch
                  <input
                    type="checkbox"
                    className="ms-3"
                    name="dinner"
                    onClick={
                      () => setFoodIncludedFilter({ dinner: true })
                      // return (
                      //   <>
                      //     {filters.foodIncluded.dinner === false
                      //       ? setFilters({
                      //           foodIncluded: {
                      //             dinner: true,
                      //           },
                      //         })
                      //       : setFilters({ foodIncluded: { dinner: false } })}
                      //   </>
                      // );
                    }
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
                  {propertyData
                    .filter((item) => {
                      return handleFilter(item);
                    })
                    .map((item, idx) => {
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
                                <Carousel
                                  fade
                                  className="w-100 "
                                  interval={null}
                                >
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
