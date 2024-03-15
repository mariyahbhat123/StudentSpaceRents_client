import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function CardComponent() {
  return (
    <div className="mt-5 ">
      <Row xs={1} md={4} className="w-100">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,h_1080,w_1920/f_jpg/q_65/https://images.citybreakcdn.com/image.aspx%3FImageId%3D6698948"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>

                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
