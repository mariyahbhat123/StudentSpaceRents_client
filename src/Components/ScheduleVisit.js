import React, { useState } from "react";
import CardDetail from "./CardDetail";
import Slider from "react-slick";
import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";

import ModalSchedule from "./ModalForScheduleVisit/ModalSchedule";
import "../Styles/ScheduleVisit.css";
export default function ScheduleVisit(props) {
  const [show, setShow] = useState(false);
  const [dayDate, setDayDate] = useState({ day: "", date: "" });
  const [time, setTime] = useState("");
  console.log(time);
  console.log(dayDate);
  const monthlyRent = props.monthlyRent;
  const ownerEmail = props.ownerEmail;
  const ownerName = props.ownerName;
  const address = props.address;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,

    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          variableWidth: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          initialSlide: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          variableWidth: true,
        },
      },
    ],
  };

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const d = new Date();

  let currentdate = d.getDate();
  let currentday = weekday[d.getDay()];
  const tmrwdate = d.getDate() + 1;
  const tmrwday = weekday[d.getDay() - 6];
  let date3 = d.getDate() + 2;
  let day3 = weekday[d.getDay() - 5];

  let date4 = d.getDate() + 3;
  let day4 = weekday[d.getDay() - 4];
  let date5 = d.getDate() + 4;
  let day5 = weekday[d.getDay() - 3];
  let date6 = d.getDate() + 5;
  let day6 = weekday[d.getDay() - 2];
  let date7 = d.getDate() + 6;
  let day7 = weekday[d.getDay() - 1];

  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const isLogged = useSelector((state) => state.isLoggedIn.isLogIn);
  const [picked, setPicked] = useState(false);
  console.log(picked);
  return (
    <div>
      <div>
        <div>
          <h4>{monthlyRent.toLocaleString()}</h4>
        </div>
        <div>
          <h6>Rent/month</h6>
        </div>
      </div>
      <hr />
      <div className="mt-4">
        <div>
          <p>Pick your visit date & time</p>
        </div>
        <div className=" slider-container ">
          <Slider {...settings} className="d-flex ">
            <div
              className="DayDatePick me-2"
              onClick={() => {
                return (
                  setDayDate({ day: currentday, date: currentdate }),
                  setPicked(true)
                );
              }}
            >
              <CardDetail
                className="DayDatePick"
                width="5rem"
                height="6rem"
                title={false}
                item0={currentday}
                item1={currentdate}
                picked={picked}
              />
            </div>
            <div
              className="DayDatePick me-2"
              onClick={() => setDayDate({ day: tmrwday, date: tmrwdate })}
            >
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={tmrwday}
                item1={tmrwdate}
              />
            </div>
            <div className="DayDatePick me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day3}
                item1={date3}
              />
            </div>
            <div className="DayDatePick me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day4}
                item1={date4}
              />
            </div>
            <div className="DayDatePick me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day5}
                item1={date5}
              />
            </div>
            <div className="DayDatePick me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day6}
                item1={date6}
              />
            </div>
            <div className="DayDatePick me-2">
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day7}
                item1={date7}
              />
            </div>
          </Slider>
        </div>
        <div
          className="d-flex mt-5"
          style={{ justifyContent: "space-between" }}
        >
          <div
            className=""
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "4px 0px",
              width: "180px",
              borderRadius: "50px",
            }}
            onClick={(e) => setTime("01:00 pm - 03:00 pm")}
          >
            {" "}
            <p className="m-auto">01:00 pm - 03:00 pm</p>
          </div>
          <div
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "4px 0px",
              width: "180px",
              borderRadius: "50px",
            }}
            onClick={(e) => setTime("  04:00 - 07:00 pm")}
          >
            {" "}
            <p className="m-auto">04:00 - 07:00 pm</p>
          </div>
        </div>
        <div className="mt-4">
          <Button
            variant="none"
            style={{
              borderRadius: "50px",
              width: "80%",
              backgroundColor: "#ff385c",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={() =>
              isLogged === true ? setShow(true) : alert("Please Login First")
            }
          >
            Schedule Visit
          </Button>
        </div>
      </div>
      <ModalSchedule
        show={show}
        close={handleShow}
        ownerEmail={ownerEmail}
        ownerName={ownerName}
        address={address}
        day={dayDate.day}
        date={dayDate.date}
        time={time}
      />
    </div>
  );
}
