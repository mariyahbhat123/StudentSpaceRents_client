import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import Loading from "../Loading/Loading";
function ModalSchedule({ close, ...props }) {
  const show = props.show;
  const ownerEmail = props.ownerEmail;
  const ownerName = props.ownerName;
  const address = props.address;
  const day = props.day;
  const date = props.date;
  const time = props.time;
  const handlePicked = props.handlePicked;
  //   const handleClose = () => setShow(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const emailService = process.env.REACT_APP_EMAIL_SERVICE;

  const emailTemplate = process.env.REACT_APP_EMAIL_TEMPLATE;
  const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const tenantData = localStorage.getItem("tenantData");
  const tenantD = JSON.parse(tenantData);
  console.log(tenantD);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        emailService,
        emailTemplate,
        {
          name: nameRef.current.value,
          recipient: emailRef.current.value,
          message: msgRef.current.value,
        },
        emailPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
          handlePicked();
          close();
        },
        (error) => {
          console.log(error.text);
          console.log("error sending message, try again!");
        }
      );
  };

  const message = {
    msg: `Dear ${ownerName}

I hope this email finds you well.
 I am reaching out on behalf of a user who is interested in scheduling a visit to view the property located at ${address}.
  They recently came across the listing on our website and expressed keen interest in exploring it further.
  They will visit your property on ${date} ${day} in between ${time}. You can contact the user on this email ${
      tenantD ? tenantD.email : ""
    }.Hope you have a good day.
 
  Best regards,

Student Space Rents`,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, [isLoading]);

  return (
    <>
      <div>
        <Modal show={show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Student Space Rents</Modal.Title>
          </Modal.Header>
          {isLoading ? (
            <Modal.Body
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20%",
              }}
            >
              <Loading />
            </Modal.Body>
          ) : (
            <div>
              {" "}
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="text"
                      ref={nameRef}
                      placeholder="SSR"
                      autoFocus
                      value={"Student Space Rents"}
                      name="email_from"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      placeholder="name@example.com"
                      autoFocus
                      value={""} //GIVE YOUR VALID EMAIL ADDRESS AS VALUE
                      name="email_to"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                      as="textarea"
                      ref={msgRef}
                      rows={3}
                      value={message.msg}
                      name="message"
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="none"
                  type="submit"
                  onClick={(e) => (sendEmail(e), setIsLoading(true))}
                  style={{ backgroundColor: "#ff385c" }}
                >
                  Send Email
                </Button>
              </Modal.Footer>
            </div>
          )}{" "}
        </Modal>
      </div>
    </>
  );
}

export default ModalSchedule;
