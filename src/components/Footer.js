export default function Footer() {
  const noRef = null;

  return (
    <footer class="container-fluid bd-footer py-4 py-md-5 mt-5 footer">
      <div class="container py-4 py-md-5 px-4 px-md-3">
        <div class="row">
          <div class="col-lg-3 mb-3">
            <a
              class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
              href="/"
              aria-label="Bootstrap"
            >
              <span class="fs-5">Shop Zetu</span>
            </a>
            <ul class="list-unstyled small">
              <li class="mb-2">
                Streamline Management for Vendors in the Fashion Industry
              </li>
              <li class="mb-2">
                &copy;&nbsp;
                <script>document.write(new Date().getFullYear());</script>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href={noRef}>Home</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>About</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>Pricing</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>Join as Vendor</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5>Guides</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href={noRef}>Getting started</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>Resources</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>Guide 3</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>Guide 4</a>
              </li>
              <li class="mb-2">
                <a href={noRef}>Guide 5</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5>Projects</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Project 1
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Project 2
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Project 3
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Project 4
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Project 5
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <h5>Our Partners</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Partner 1
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Partner 2
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Partner 3
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Partner 4
                </a>
              </li>
              <li class="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Partner 5
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
