import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function CardDetail(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{props.title}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.item0}</ListGroup.Item>
          <ListGroup.Item>{props.item1}</ListGroup.Item>
          <ListGroup.Item>{props.item2}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
