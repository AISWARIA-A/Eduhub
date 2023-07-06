import React from "react";
import "./AboutUs.css";
import miya from "../../../assets/img/miya.jpg";

export default function AboutUs() {
  return (
    <div className="container">
      <div className="about-us-container">
        <div className="team-members">
          <h2>Our Team</h2>
          <div className="member-card">
            <img className="member-img" src={miya} alt="Miya Doe" />
            <h3 className="member-name">Miya Doe</h3>
            <p className="member-role">CEO & Founding Member</p>
          </div>
          <div className="about-us-desc">
            <h1 className="about-us-h">About Us</h1>
            <p>
              With a passion for empoering learners of all ages, our mission is
              to make education accessible, engaging, and personalized through
              our cutting-edge educational technology platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
