import React from "react";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";

export default function UserProfile() {
  const ownerIsLogged = useSelector((state) => state.ownerLogOrNot.ownerIsLog);
  const isLogged = useSelector((state) => state.isLoggedIn.isLogIn);
  const ownerData = useSelector((state) => state.ownerData.ownerD);
  const tenantData = useSelector((state) => state.tenantDataSlice.tenantD);

  console.log(tenantData);

  console.log(ownerData.name);
  console.log(ownerIsLogged);

  const tenantD = localStorage.getItem("tenantData");
  const tenantDatas = JSON.parse(tenantD);

  const ownerD = localStorage.getItem("ownerData");
  const ownerDatas = JSON.parse(ownerD);

  return (
    <div className="d-flex  w-100 ">
      <div className="container mt-0 m-0 p-0">
        <div className="row d-flex justify-content-left ">
          <div className="col-md-5 w-100">
            <div className="card p-3 py-4 pt-3 mt-0 ">
              <div
                className="rounded-top d-flex justify-content-center text-white  "
                style={{
                  height: "180px",
                  border: "2px solid #ff385c",
                }}
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
                    src={
                      ownerIsLogged === true
                        ? ownerDatas.gender === "female"
                          ? "https://cdn.icon-icons.com/icons2/3653/PNG/512/profile_account_user_icon_228272.png"
                          : "https://cdn.icon-icons.com/icons2/3653/PNG/512/profile_account_user_icon_228272.png"
                        : isLogged === true
                        ? tenantDatas.gender === "female"
                          ? "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                          : "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_male_icon_192702.png"
                        : ""
                    }
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
                <h5 class="mt-3 mb-0">
                  {ownerIsLogged === true
                    ? ownerDatas.name
                    : isLogged === true
                    ? tenantDatas.name
                    : ""}
                </h5>
                <span></span>
                <hr />
                <div class="px-4 mt-1">
                  <p class="fonts mt-3">
                    <h4>Email</h4>
                    <h5>
                      {" "}
                      {ownerIsLogged === true
                        ? ownerDatas.email
                        : isLogged === true
                        ? tenantDatas.email
                        : ""}
                    </h5>
                  </p>
                  <hr />
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

                {/* <div class="buttons">
                  {" "}
                  <button
                    class="btn  px-4 ms-3 text-white mt-5"
                    style={{ backgroundColor: "#ff385c" }}
                  >
                    Edit Profile
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
