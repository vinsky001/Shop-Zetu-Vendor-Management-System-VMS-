import { Link } from "react-router-dom";

export default function Header() {
  const noRef = null;
  const logo_md_url = "https://shopzetu.com/cdn/shop/files/Logo_for_white_Background_100x.png?v=1672727778"
  const about_url = "https://shopzetu.com/pages/about-us"


  return (
    <header class="header flex-grow-0">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img
          class="logo-md"
           src={logo_md_url} 
           alt="logo-md"/>
          <a class="navbar-brand text-bold" href={noRef}>
            Shop Zetu
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto"
            >
              <li class="nav-item">
                <Link to={"/"} class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a target="_blank" rel="noreferrer" href={about_url} class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <Link to={'/pricing'} class="nav-link">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/join-as-vendor'} class="nav-link">
                  Join as Vendor
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/contact"} class="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <button class="btn btn-default text-bold" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
