import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
function ModalSchedule(props) {
  const show = props.show;
  const close = props.close;
  const ownerEmail = props.ownerEmail;
  const ownerName = props.ownerName;
  const address = props.address;
  const day = props.day;
  const date = props.date;
  const time = props.time;

  //   const handleClose = () => setShow(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const emailService = process.env.REACT_APP_EMAIL_SERVICE;
  console.log(emailService);

  const emailTemplate = process.env.REACT_APP_EMAIL_TEMPLATE;
  const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

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
  They will visit your property on ${date} ${day} in between ${time}. You can contact the user on this email.Hope you have a good day.
 
  Best regards,

Student Space Rents`,
  };
  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Student Space Rents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="name@example.com"
                autoFocus
                value={"mariyahbhat123@gmail.com"}
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
          <Button variant="primary" type="submit" onClick={sendEmail}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSchedule;
