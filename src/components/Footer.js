import "../App.css"
import instagram from "../assets/svgs/instagram-logo.svg"
import twitter from '../assets/svgs/twitter-logo.svg';
import facebook from '../assets/svgs/facebook-logo.svg'

export default function Footer() {
  const noRef = null;

  // for better maintainability -> data that is imported from the same file and rendered in the same format should be stored in a common location
  const ft_links = [
    {
      link_url: twitter
    },
    {
      link_url: facebook
    },
    {
      link_url: instagram
    },


  ]


  return (
    <footer className="container-fluid bd-footer py-4 py-md-5 mt-5 footer">
      <div className="container py-4 py-md-5 px-4 px-md-3">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a
              className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
              href="/"
              aria-label="Bootstrap"
            >
              <h2 className="fs-5 blue-text">Shop Zetu</h2>
            </a>
            <ul className="list-unstyled small">
              <li className="mb-2">
                Welcome to Shop Zetu, your destination
                for quality products.<br /> We cureate a unique
                selection of items from around the world.
              </li>
              <li className="mb-2">
                &copy;&nbsp;
                {/* <script>document.write(new Date().getFullYear());</script> */}
                {new Date().getFullYear()} {/* More maintainable*/}
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3 black-text">
            <h5>Contact Us</h5>
            <ul className="list-unstyled ">
              <li className="mb-2">
                <a className="" href={noRef}>contact@shopzetu.com</a>
              </li>
              <li className="mb-2">
                <a href={noRef}>(123) 456 - 7890</a>
              </li>

            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href={noRef}>Home</a>
              </li>
              <li className="mb-2">
                <a href={noRef}>Products</a>
              </li>
              <li className="mb-2">
                <a href={noRef}>About Us</a>
              </li>
              <li className="mb-2">
                <a href={noRef}>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Customer Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Contact Support
                </a>
              </li>

              <li className="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Project 5
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Privacy and Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Terms of service
                </a>
              </li>
              <li className="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href={noRef} target="_blank" rel="noreferrer">
                  Return Policy
                </a>
              </li>

            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-socials-parent">
          <div >
            <span className="blue-text">{new Date().getFullYear()}</span>
            <span className="px-2">Shop Zetu. All rights Reserved</span>
          </div>
          <ul className="list-unstyled footer-socials-ul">
            {ft_links.map((link, index) => (
              <li className="footer-logo" key={index}>
                <img src={link.link_url} alt="footer social logos" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
