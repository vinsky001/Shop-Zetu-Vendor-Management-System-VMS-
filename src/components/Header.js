import SigninForm from "./SigninForm";

export default function Header() {
  const noRef = null;

  return (
    <header className="header flex-grow-0">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand text-bold" href="./">
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
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Brands
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  My Dashboard
                </a>
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
                <a className="nav-link" href="./">
                  Contact Us
                </a>
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
