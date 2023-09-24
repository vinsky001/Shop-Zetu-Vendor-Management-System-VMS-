import React from 'react';
import { Link } from 'react-router-dom';
import { ShopZetuDemoUrl } from '../data/db';
import '../Animation.css'; // Import your CSS file with animations

export default function Footer() {
  return (
    <footer className="container-fluid bd-footer py-4 py-md-5 mt-5 footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <Link to="/" className="d-inline-flex align-items-center text-decoration-none" aria-label="Shop Zetu">
              <h3 className="text-white text-animation hover-gradient">Shop Zetu</h3>
            </Link>
            <p className="mt-3 text-animation fadeIn">
              Streamline Management for Vendors in the Fashion Industry
            </p>
            <p className="text-muted text-animation fadeIn">
              &copy; Copyright {new Date().getFullYear()}
            </p>
          </div>
          <div className="col-lg-3 mb-3">
            <h5 className="text-animation fadeIn">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light hover-gradient text-animation fadeIn">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing" className="text-light hover-gradient text-animation fadeIn">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light hover-gradient text-animation fadeIn">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mb-3">
            <h5 className="text-animation fadeIn">About</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href={ShopZetuDemoUrl} target="_blank" rel="noreferrer" className="text-light hover-gradient text-animation fadeIn">Demo</a>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light hover-gradient text-animation fadeIn">Our Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
