import React from "react";

export default function UserProfile() {
  return (
    <div className="d-flex  w-100">
      <div className="container mt-0 m-0 p-0">
        <div className="row d-flex justify-content-left ">
          <div className="col-md-5 w-100">
            <div className="card p-3 py-4 pt-3 mt-0 ">
              <div
                className="text-center   d-flex flex-column flex-row  "
                style={{
                  marginTop: "140px",

                  position: "relative",
                }}
              >
                <img
                  src="https://i.imgur.com/bDLhJiP.jpg"
                  width="90"
                  class="rounded-circle  "
                />
              </div>

              <div class="text-center mt-2">
                {/** <span class="bg-secondary p-1 px-4 rounded text-white">
                  Profile
                </span>*/}
                <h4>Name</h4>
                <h5 class="mt-3 mb-0">Name</h5>
                <span></span>
                <hr />
                <div class="px-4 mt-1">
                  <p class="fonts mt-4">
                    <h4>Email</h4>
                    <h5>Email</h5>
                  </p>
                  <hr />
                  <p class="fonts mt-4">
                    <h4>About</h4>
                    about
                  </p>
                </div>
                <hr />
                <ul
                  class="social-list d-flex "
                  style={{
                    justifyContent: "space-evenly",
                  }}
                >
                  <li>
                    <i class="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-dribbble"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-linkedin"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-google"></i>
                  </li>
                </ul>

                <div class="buttons">
                  {" "}
                  <button class="btn btn-primary px-4 ms-3 text-white">
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
