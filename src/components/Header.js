import { Link } from "react-router-dom";

export default function Header() {
  const noRef = null;

  return (
    <header className="header flex-grow-0">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-bold" href={noRef}>
            ShopZetu
          </a>
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
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto"
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={noRef}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={noRef}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={noRef}>
                  Brands
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={noRef}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={noRef}>
                  Join as Vendor
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={noRef}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <button className="btn btn-default text-bold" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
