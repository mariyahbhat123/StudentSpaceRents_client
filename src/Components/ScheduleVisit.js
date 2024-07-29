import React, { useEffect, useState } from "react";
import CardDetail from "./CardDetail";
import Slider from "react-slick";
import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";

import ModalSchedule from "./ModalForScheduleVisit/ModalSchedule";
import "../Styles/ScheduleVisit.css";
import { backdropClasses } from "@mui/material";
export default function ScheduleVisit(props) {
  const [show, setShow] = useState(false);
  const [dayDate, setDayDate] = useState({ day: "", date: "" });
  const [time, setTime] = useState("");
  const [isBackgroundColor, setIsBackgroundColor] = useState({
    div1: "white",
    div2: "white",
    div3: "white",
    div4: "white",
    div5: "white",
    div6: "white",
    div7: "white",
  });

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
  const tmrwday = weekday[d.getDay() + 1];
  let date3 = d.getDate() + 2;
  let day3 = weekday[d.getDay() + 2];

  let date4 = d.getDate() + 3;
  let day4 = weekday[d.getDay() + 3];
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
  const [picked, setPicked] = useState("");
  console.log(picked);

  weekday.map((item) => {
    console.log(item.length);
  });

  const selectedDate = () => {
    if (picked === "div1") {
      if (isBackgroundColor.div1 === "white") {
        return setIsBackgroundColor({
          div1: "#ff385c",
          div2: "white",
          div3: "white",
          div4: "white",
          div5: "white",
          div6: "white",
          div7: "white",
        });
      } else {
        return setIsBackgroundColor({
          div1: "white",
        });
      }
    } else if (picked === "div2") {
      if (isBackgroundColor.div2 === "white") {
        return setIsBackgroundColor({
          div1: "white",
          div2: "#ff385c",
          div3: "white",
          div4: "white",
          div5: "white",
          div6: "white",
          div7: "white",
        });
      } else {
        return setIsBackgroundColor({
          div2: "white",
        });
      }
    } else if (picked === "div3") {
      if (isBackgroundColor.div3 === "white") {
        return setIsBackgroundColor({
          div1: "white",
          div2: "white",
          div3: "#ff385c",
          div4: "white",
          div5: "white",
          div6: "white",
          div7: "white",
        });
      } else {
        return setIsBackgroundColor({
          div3: "white",
        });
      }
    } else if (picked === "div4") {
      if (isBackgroundColor.div4 === "white") {
        return setIsBackgroundColor({
          div1: "white",
          div2: "white",
          div3: "white",
          div4: "#ff385c",
          div5: "white",
          div6: "white",
          div7: "white",
        });
      } else {
        return setIsBackgroundColor({
          div4: "white",
        });
      }
    } else if (picked === "div5") {
      if (isBackgroundColor.div5 === "white") {
        return setIsBackgroundColor({
          div1: "white",
          div2: "white",
          div3: "white",
          div4: "white",
          div5: "#ff385c",
          div6: "white",
          div7: "white",
        });
      } else {
        return setIsBackgroundColor({
          div5: "white",
        });
      }
    } else if (picked === "div6") {
      if (isBackgroundColor.div6 === "white") {
        return setIsBackgroundColor({
          div1: "white",
          div2: "white",
          div3: "white",
          div4: "white",
          div5: "white",
          div6: "#ff385c",
          div7: "white",
        });
      } else {
        return setIsBackgroundColor({
          div6: "white",
        });
      }
    } else if (picked === "div7") {
      if (isBackgroundColor.div7 === "white") {
        return setIsBackgroundColor({
          div1: "white",
          div2: "white",
          div3: "white",
          div4: "white",
          div5: "white",
          div6: "white",
          div7: "#ff385c",
        });
      } else {
        return setIsBackgroundColor({
          div7: "white",
        });
      }
    }
  };

  const [pickedTime, setPickedTime] = useState("");
  const [timeBackground, setTimeBackground] = useState({
    divTime1: "white",
    divTime2: "white",
  });
  const selectedTime = () => {
    if (pickedTime === "1to3") {
      if (timeBackground.divTime1 === "white") {
        return setTimeBackground({ divTime1: "#ff385c", diveTime2: "white" });
      } else {
        return setTimeBackground({ divTime1: "white" });
      }
    } else if (pickedTime === "4to7") {
      if (timeBackground.divTime2 === "white") {
        return setTimeBackground({ divTime2: "#ff385c", divTime1: "white" });
      } else {
        return setTimeBackground({ divTime2: "white" });
      }
    }
  };

  useEffect(() => {
    selectedDate();
  }, [picked]);

  useEffect(() => {
    selectedTime();
  }, [pickedTime]);
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
                  setPicked("div1")
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
                backgroundColor={isBackgroundColor.div1}
              />
            </div>
            <div
              className="DayDatePick me-2"
              onClick={() => {
                return (
                  setDayDate({ day: tmrwday, date: tmrwdate }),
                  setPicked("div2")
                );
              }}
            >
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={tmrwday}
                item1={tmrwdate}
                backgroundColor={isBackgroundColor.div2}
              />
            </div>
            <div
              className="DayDatePick me-2"
              onClick={() => {
                return (
                  setDayDate({ day: day3, date: date3 }), setPicked("div3")
                );
              }}
            >
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day3}
                item1={date3}
                backgroundColor={isBackgroundColor.div3}
              />
            </div>
            <div
              className="DayDatePick me-2"
              onClick={() => {
                return (
                  setDayDate({ day: day4, date: date4 }), setPicked("div4")
                );
              }}
            >
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day4}
                item1={date4}
                backgroundColor={isBackgroundColor.div4}
              />
            </div>
            <div
              className="DayDatePick me-2"
              onClick={() => {
                return (
                  setDayDate({ day: day5, date: date5 }), setPicked("div5")
                );
              }}
            >
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day5}
                item1={date5}
                backgroundColor={isBackgroundColor.div5}
              />
            </div>
            <div
              className="DayDatePick me-2"
              onClick={() => {
                return (
                  setDayDate({ day: day6, date: date6 }), setPicked("div6")
                );
              }}
            >
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day6}
                item1={date6}
                backgroundColor={isBackgroundColor.div6}
              />
            </div>
            <div
              className="DayDatePick me-2"
              onClick={() => {
                return (
                  setDayDate({ day: day7, date: date7 }), setPicked("div7")
                );
              }}
            >
              <CardDetail
                width="5rem"
                height="6rem"
                title={false}
                item0={day7}
                item1={date7}
                backgroundColor={isBackgroundColor.div7}
              />
            </div>
          </Slider>
        </div>
        <div
          className="d-flex mt-5"
          style={{ justifyContent: "space-between" }}
        >
          <div
            className="time"
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "4px 0px",
              width: "180px",
              borderRadius: "50px",
              backgroundColor: timeBackground.divTime1,
            }}
            onClick={(e) => {
              return setTime("01:00 pm - 03:00 pm"), setPickedTime("1to3");
            }}
          >
            {" "}
            <p className="m-auto">01:00 pm - 03:00 pm</p>
          </div>
          <div
            className="time"
            style={{
              textAlign: "center",
              border: "1px solid grey",
              padding: "4px 0px",
              width: "180px",
              borderRadius: "50px",
              backgroundColor: timeBackground.divTime2,
            }}
            onClick={(e) => {
              return setTime("  04:00 - 07:00 pm"), setPickedTime("4to7");
            }}
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
              isLogged === true
                ? picked != "" && pickedTime != ""
                  ? setShow(true)
                  : alert("Please pick Date and Time")
                : alert("Please Login First")
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
