import React from "react";
import contactImage from "./image/contact.svg";
const Contact = () => {
  return (
    <div>
      <div className="contactContainer">
        <div className="contactImageContainer">
          <img src={contactImage} alt="contact imag" />
        </div>
        <div className="contactDetails">
          <h1>Contact us</h1>
          <p>
            I hope you have experienced how everything work and know the problem
            you want us to add.
          </p>
          <p>
            Hoping that you have a feature or features you feel we should add or
            a complain to make to us about the project. Tell us how you feel by{" "}
            <a href="mailto:davcodes24@gmail.com">Mail us</a> so we can know how
            you feel concerning the web app and know the next project we are
            planning to work on
          </p>
          <p>
            To subscribe to our newsletter or follow us on{" "}
            <a href="https://twitter.com/davcodes24" target="_blank">
              Twitter
            </a>{" "}
            to know the features and new updates we are adding. Get updated
            every single time{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
