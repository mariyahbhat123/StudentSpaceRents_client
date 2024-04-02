import React from "react";

export default function UserProfile() {
  return (
    <div className="d-flex  w-100">
      <div className="container mt-0 m-0 p-0">
        <div className="row d-flex justify-content-left ">
          <div className="col-md-5 w-100">
            <div className="card p-3 py-4 pt-3 mt-0 ">
              <div
                className="rounded-top d-flex justify-content-center text-white  "
                style={{ backgroundColor: "#000", height: "180px" }}
              >
                <div
                  className="text-center "
                  style={{
                    marginTop: "140px",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    top: "-5px",
                  }}
                >
                  <img
                    src="https://i.imgur.com/bDLhJiP.jpg"
                    width="90"
                    class="rounded-circle  "
                  />
                </div>
              </div>
              <div class="text-center mt-5">
                {/** <span class="bg-secondary p-1 px-4 rounded text-white">
                  Profile
                </span>*/}
                <h4>Name</h4>
                <h5 class="mt-3 mb-0">Name</h5>
                <span></span>
                <hr />
                <div class="px-4 mt-1">
                  <p class="fonts mt-3">
                    <h4>Email</h4>
                    <h5>Email</h5>
                  </p>
                  <hr />
                  <p class="fonts mt-3">
                    <h4>About</h4>
                    about
                  </p>
                </div>
                <hr />
                <div
                  class="social-list d-flex "
                  style={{
                    justifyContent: "space-evenly",
                  }}
                >
                  <i
                    class="fa-brands fa-facebook"
                    style={{ fontSize: "25px" }}
                  ></i>

                  <i
                    class="fa-brands fa-dribbble"
                    style={{ fontSize: "25px" }}
                  ></i>

                  <i
                    class="fa-brands fa-instagram"
                    style={{ fontSize: "25px" }}
                  ></i>

                  <i
                    class="fa-brands fa-linkedin"
                    style={{ fontSize: "25px" }}
                  ></i>

                  <i
                    class="fa-brands fa-google"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>

                <div class="buttons">
                  {" "}
                  <button class="btn btn-primary px-4 ms-3 text-white mt-5">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
