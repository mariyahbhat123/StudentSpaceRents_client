import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function CardDetail(props) {
  return (
    <div>
      <Card style={{ width: props.width, height: props.height }}>
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
            <Card.Header>{props.title}</Card.Header>
            <Card.Body variant="flush">
              <h6>{props.item0}</h6>
              <h6>{props.item1}</h6>
              <h6>{props.item2}</h6>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
}
