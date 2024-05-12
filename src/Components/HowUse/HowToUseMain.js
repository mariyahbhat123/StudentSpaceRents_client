import React from "react";
import styles from "../../Styles/howToUse/howToUsePage.module.css";
import LocationMarker from "../../Icons/LocationMarker";
import ReserveMessageIcon from "../../Icons/ReserveMessageIcon";
import ConfirmationClockIcon from "../../Icons/ConfirmationClockIcon";
import MoveInKeyIcon from "../../Icons/MoveInKeyIcon";
import PieIcon from "../../Icons/PieIcon";
import EyeIcon from "../../Icons/EyeIcon";
import LockIcon from "../../Icons/LockIcon";
import FooterCom from "../FooterCom";
import NavBar from "../navBar";
import SofaIllustration from "./Illustration/sofaIllustration.jpg";
// import LocationMarker from "../../../public/Icons/LocationMarker";
const HowToUseMain = () => {
  return (
    <section className={styles.pageStyle}>
      <NavBar />
      <section className={styles.heroContainer}>
        <h1 className={styles.header}>
          4 easy steps to <br /> book your home
        </h1>
        <img
          src={SofaIllustration}
          alt="Sofa"
          width={"400px"}
          height={"auto"}
          className={styles.sofaImg}
        />
      </section>
      <article className={`${styles.slide}`}>
        <div className={styles.container}>
          <div className="mr-4 mx-auto mb-5">
            <LocationMarker width="80px" height="80px" />
          </div>
          <div className="ml-4">
            <h2>1. Search and select</h2>
            <p className="pt-3">
              Search for your perfect property. Our virtual tours, and detailed
              home and neighbourhood descriptions will help you make your
              decision. Don’t forget to check the landlord policies before you
              book!
            </p>
            <div className={styles.contentGrid}>
              <div className="">
                <h6 className="border-bottom border-dark pb-3 mr-5">
                  We verify the properties
                </h6>
                <p className="pt-4">
                  We show you real photos and videos of each property. We let
                  you see inside drawers and cupboards, and show you every
                  corner of the property.
                </p>
              </div>
              <div className="">
                <h6 className="border-bottom border-dark pb-3 mr-5">
                  Detailed description
                </h6>
                <p className="pt-4">
                  Your property visit is completely online, so you can revisit
                  it as many times as you like. It’s just like being there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className={`${styles.slide}`}>
        <div className={styles.container}>
          <div className="mr-4 mx-auto mb-5">
            <ReserveMessageIcon width="80px" height="80px" />
          </div>
          <div className="ml-4">
            <h2>2. Reserve the property</h2>
            <p className="pt-3">
              When you make a reservation, that property is blocked until the
              landlord responds to your request (for up to 24 hours). Once the
              landlord accepts, your payment method will automatically be
              charged. This is why we take your payment details at this stage.
            </p>

            <h6 className="border-bottom border-dark pb-3 mr-5 mt-5">
              What am I paying for?
            </h6>
            <div className={`${styles.contentGrid}`}>
              <div className="">
                <p className="">
                  <strong>First payment:</strong> As an extra security step,
                  your first payment is made through Spotahome. We will transfer
                  this money to the landlord 48 hours after you move in, unless
                  you contact us with a problem.
                </p>
              </div>
              <div className="">
                <p className="">
                  <strong>Booking fee:</strong> To cover our verification and
                  customer support teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className={`${styles.slide}`}>
        <div className={styles.container}>
          <div className="mr-4 mx-auto mb-5">
            <ConfirmationClockIcon width="80px" height="80px" />
          </div>
          <div className="ml-4">
            <h2>3. Confirmation</h2>
            <p className="pt-3">
              As soon as the landlord accepts the booking, your payment method
              will automatically be charged. We will put you in contact with the
              landlord via email, so you can arrange the move-in time, key
              collection, and transfer any documentation that they requested in
              their policies.
            </p>
            <div className={styles.contentGrid}>
              <div className="">
                <h6 className="border-bottom border-dark pb-3 mr-5">
                  We are here to help
                </h6>
                <p className="pt-4">
                  Many of our tenants are moving to a new country for the first
                  time. In Spotahome, we speak 8 European languages and deal
                  with landlords every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article id={styles.moveInSlide} className={`${styles.slide}`}>
        <div className={styles.container}>
          <div className="mr-4 mx-auto mb-5">
            <MoveInKeyIcon width="80px" height="80px" />
          </div>
          <div className="ml-4">
            <h2>4. Move in</h2>
            <p className="pt-3">
              And that’s it; the home is yours! The landlord will now be your
              main point of contact, but Spotahome will still be here in case
              you have any issues.And that’s it; the home is yours! The landlord
              will now be your main point of contact, but Spotahome will still
              be here in case you have any issues.
            </p>
            <p className="pt-3">
              All you have to do is collect your keys and sign your contract.
              The first payment – which you made at the beginning of the booking
              process – will be transferred to the landlord 48 hours after you
              move in.
            </p>
            <div className={styles.contentGrid}>
              <div className="">
                <h6 className="border-bottom border-dark pb-3 mr-5">
                  One last thing
                </h6>
                <p className="pt-4">
                  Don't forget, when you sign the contract, you will have to pay
                  your deposit to the landlord, along with any other fees that
                  they specified in the landlord policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <section className={styles.guaranteeSlide}>
        <h2>Our Guarantees</h2>
        <div className="container">
          <div className="row">
            <article className="col-sm pt-4">
              <LockIcon />
              <h6 className="pt-4">Fraud protection</h6>
              <p className="pt-2">
                All being well, we will transfer the money to the landlord 48
                hours after you move in
              </p>
            </article>
            <article className="col-sm pt-4">
              <PieIcon />
              <h6 className="pt-4">Last minute cancellation</h6>
              <p className="pt-2">
                If the landlord cancels at the last minute, we will relocate you
                and help with your hotel costs if needed
              </p>
            </article>
            <article className="col-sm pt-4">
              <EyeIcon />
              <h6 className="pt-4">Checked by StudentSpaceRents</h6>
              <p className="pt-2">
                We show you real photos and video of each property. We let you
                see inside drawers and cupboards and show you every corner of
                the property.
              </p>
            </article>
          </div>
        </div>
      </section>
      <FooterCom />
    </section>
  );
};

export default HowToUseMain;
