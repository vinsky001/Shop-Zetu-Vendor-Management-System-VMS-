export default function Header() {

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
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto"
            >
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
                <a className="nav-link" href="./">
                  Join as Vendor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Contact Us
                </a>
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
