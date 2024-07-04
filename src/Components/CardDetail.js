import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Styles/CardDetailsIncludes.css";

export default function CardDetail(props) {
  const icon0 = props.icon0;
  const icon1 = props.icon1;
  const icon2 = props.icon2;
  const picked = props.picked;
  const bckColor = props.backgroundColor;
  return (
    <div>
      <Card
        className="cardDetailIncludes"
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: bckColor,
        }}
      >
        {props.title === false ? (
          <Card.Body variant="flush" className="mt-2">
            <h6 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {props.item0}
            </h6>
            <h6>{props.item1}</h6>
          </Card.Body>
        ) : (
          <>
            {" "}
            <Card.Header
              className="cardDetailHeader"
              style={
                props.picked === true
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "white" }
              }
            >
              {props.title}
            </Card.Header>
            <Card.Body variant="flush">
              <h6
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={icon0} alt="" style={{ width: "20px" }} />
                {props.item0}
              </h6>
              <h6
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {" "}
                <img src={icon1} alt="" style={{ width: "20px" }} />
                {props.item1}
              </h6>

              <h6
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img src={icon2} alt="" style={{ width: "20px" }} />
                {props.item2}
              </h6>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
}
