import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import HouseHeartFill from "react-bootstrap-icons/dist/icons/house-heart-fill";
import { Link } from "react-router-dom";
import SSR from "../Logo/home.png";
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

        <section className="footerContainer">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="4"
                xl="3"
                className="logoParentContainerFooter mx-auto mb-4"
              >
                <h6 className="logoContainerFooter text-uppercase fw-bold mb-4 d-flex">
                  <div className="me-1 ">
                    <img src={SSR} alt="" style={{ width: "23px" }} />{" "}
                  </div>
                  <div style={{ marginTop: "6px", color: "#ED697F" }}>
                    Student Space Rents
                  </div>{" "}
                </h6>
                <p>
                  Student Space Rents is here to help you find a comfortable,
                  affordable, and convenient place to call home.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">LEGAL</h6>
                <p>
                  <Link to="/termsAndCondition" className="text-reset">
                    Terms and conditions
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Districts</h6>
                <div className="footerDistricts d-flex ">
                  <div className="me-2">
                    <p>
                      <Link
                        to="/ListAd"
                        className="text-reset"
                        state={{ district: "Srinagar" }}
                      >
                        Srinagar
                      </Link>
                    </p>

                    <p>
                      <Link
                        to="/ListAd"
                        className="text-reset"
                        state={{ district: "Baramulla" }}
                      >
                        Baramulla
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/ListAd"
                        className="text-reset"
                        state={{ district: "Kupwara" }}
                      >
                        Kupwara
                      </Link>
                    </p>
                  </div>
                  <div className="ms-3">
                    {" "}
                    <p>
                      <Link
                        to="/ListAd"
                        className="text-reset"
                        state={{ district: "Anantnag" }}
                      >
                        Anantnag
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/ListAd"
                        className="text-reset"
                        state={{ district: "Pulwama" }}
                      >
                        Pulwama
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/ListAd"
                        className="text-reset"
                        state={{ district: "Ganderbal" }}
                      >
                        Ganderbal
                      </Link>
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
                  studentSpaceRents@gmail.com
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
