import { Link } from "react-router-dom";
import SigninForm from "./signinform";
import { ShopZetuDemoUrl } from "../data/db";

export default function Header() {
  const noRef = null;
  
  return (
    <header className="header flex-grow-0">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand text-bold" to="/">
            ShopZetu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ShopZetuDemoUrl} target="_blank" rel="noreferrer">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  My Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-bold"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signinPopup"
                  href={noRef}
                >
                  Join as Vendor
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <span className="slider"></span>
              </li>
            </ul>
            <button
              className="btn btn-default text-bold"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#signinPopup"
            >
              Sign in
            </button>

            {/* Signin Popup */}
            <div
              className="modal fade"
              id="signinPopup"
              tabIndex="-1"
              aria-labelledby="signinPopupLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
                <div className="modal-content br-0">
                  <div className="modal-header b-0">
                    <button
                      type="button"
                      className="btn-close px-1 py-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    style={{ paddingBottom: 3 + "rem" }}
                    className="modal-body d-flex justify-content-center aligh-items-center"
                  >
                    <SigninForm />
                  </div>
                </div>
              </div>
            </div>
            {/* Signin Popup */}
          </div>
        </div>
      </nav>
    </header>
  );
}
