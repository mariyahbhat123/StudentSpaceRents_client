import React, { useEffect, useState } from "react";
import NavBar from "../Components/navBar";
import CarouselComponent from "../Components/CarouselComponent";
import CardComponent from "../Components/CardComponent";
import "../Styles/landingPage.css";
import CardCarouselCom from "../Components/CardCarouselCom";
import ModalCom from "../Components/ModalCom";
import SearchBar from "../Components/SearchBar";
import FooterCom from "../Components/FooterCom";

export default function LandingPage() {
  const TOP_OFFSET = 600;
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-100">
      <div className="w-100">
        <div className="carouselCom" style={{ position: "relative" }}>
          <CarouselComponent />
        </div>
        <div
          className="navB w-100"
          style={
            navBackground === false
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "#9db0ec" }
          }
        >
          {" "}
          <NavBar />{" "}
        </div>
        <div className="searchB w-100">
          <SearchBar />
        </div>
      </div>

      <div className="w-100">
        <CardCarouselCom />
      </div>

      <div className=" ">
        <CardComponent />
      </div>
      <div></div>
      <div>
        <FooterCom />
      </div>
    </div>
  );
}
