import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import HouseHeartFill from "react-bootstrap-icons/dist/icons/house-heart-fill";
export default function FooterCom() {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 d-flex">
                  <div className="me-1 d-flex ">
                    <HouseHeartFill />
                  </div>
                  <div>Student Space Rents</div>
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">LEGAL</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Terms and conditions
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Districts</h6>
                <div className="d-flex ">
                  <div className="me-2">
                    <p>
                      <a href="#!" className="text-reset">
                        Srinagar
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Bandipore
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Budgam
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Baramulla
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Kupwara
                      </a>
                    </p>
                  </div>
                  <div className="ms-3">
                    {" "}
                    <p>
                      <a href="#!" className="text-reset">
                        Shopian
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Anantnag
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Pulwama
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Ganderbal
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Kulgam
                      </a>
                    </p>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Kashmir, Srinagar, JK
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  01 234 567 88
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © Copyright: &nbsp;
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            StudentSpaceRents.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
