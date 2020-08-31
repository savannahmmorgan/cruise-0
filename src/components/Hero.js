import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Cruise0logo" />
    <h1 className="mb-4">Car dealerships made easy. </h1>

    <p className="lead">
      Dealership management can be a bumpy road. With Cruise0, it doesn't have to be. Take the wheel of your business through seemless warranty oversight, commissions and payroll management, revenue-tracking, and more.
    </p>
  </div>
);

export default Hero;
