export default function Header() {
  const noRef = null;

  return (
    <header class="header flex-grow-0">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
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
                <a class="nav-link active" aria-current="page" href={noRef}>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={noRef}>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={noRef}>
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={noRef}>
                  Join as Vendor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href={noRef}>
                  Contact Us
                </a>
              </li>
            </ul>
            <button class="btn btn-default text-bold" type="submit">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
