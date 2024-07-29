import React from "react";
import Card from "react-bootstrap/Card";
import { Avatar } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function WebsiteReviews(props) {
  return (
    <div className="">
      <div className="w-100 d-flex" style={{ justifyContent: "center" }}>
        {" "}
        <Row xs={1} className="w-100">
          <Col>
            <Card className="mt-3" style={{ width: "100%" }}>
              <Card.Header
                className="d-flex p-4"
                style={{ justifyContent: "left" }}
              >
                <Avatar></Avatar>

                <Card.Title className="mt-2 ms-3">
                  <h5>{props.name}</h5>
                </Card.Title>
              </Card.Header>
              <Card.Body className="p-5">
                <h4>It is a nice experience</h4>
                <p>
                  I’m so happy I chose Spotahome. They make it super easy. My
                  agent even helped me translate with my landlord as an
                  interpreter!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
