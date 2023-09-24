import { useNavigate } from "react-router-dom";
import junior_reis from "../assets/images/junior-reis.jpg";
import sparkles from "../assets/svgs/sparkles.svg";
import { useState } from "react";

export default function Jumbotron() {



  return (
    <div className="jumbotron container p flex-grow-1 h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 col-md-6 mb-3">
          <div className="wrap">
            <img className="sz-icon" src={sparkles} alt="Sparkles" />
            <h1>
              Streamline <span className="blue-text">Management</span> for{" "}
              <span className="blue-text">Vendors</span> in the Fashion Industry
            </h1>
            <p className="">
              Introducing ShopZetu's Vendor Management System! An essential tool
              for every vendor to help ease workflow.
            </p>
            <form className="row contact-us-form g-3 mx-auto">
              <div className="col-8 col-md-8">
                <label for="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control email-box"
                  id="email"
                  placeholder="enter email"
                  autofocus
                />
              </div>
              <div className="col-4 col-md-4">
                <button
                  type="submit"
                  className="btn btn-default mb-3 contact-us-submit"
                >
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center h-100">
          <img className="sz-icon left" src={sparkles} alt="Sparkles" />
          <img
            alt="Junior Reis"
            className="img-fluid sz-img"
            src={junior_reis}
          />
          <img className="sz-icon right" src={sparkles} alt="Sparkles" />
        </div>
      </div>
    </div>
  );

}
