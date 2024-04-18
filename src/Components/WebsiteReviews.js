import React from "react";
import Card from "react-bootstrap/Card";
import { Avatar } from "@mui/material";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function WebsiteReviews() {
  return (
    <div className="">
      <h2 className="p-5">What tenants and owners say about us</h2>

      <div
        className="d-flex "
        style={{ justifyContent: "center", marginLeft: "90px" }}
      >
        {" "}
        <Row xs={1} md={3} className="w-100">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="mt-3" style={{ width: "85%" }}>
                <Card.Header
                  className="d-flex p-4"
                  style={{ justifyContent: "left" }}
                >
                  <Avatar></Avatar>

                  <Card.Title className="mt-2 ms-3">
                    <h5>Hello</h5>
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
          ))}
        </Row>
      </div>
      <hr style={{ color: "black" }} />
      <p className="pb-5">More Testimonials?</p>
    </div>
  );
}
