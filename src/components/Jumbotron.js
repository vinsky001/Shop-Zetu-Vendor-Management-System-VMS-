import junior_reis from "../assets/images/junior-reis.jpg";
import sparkles from "../assets/svgs/sparkles.svg";

export default function Jumbotron() {
  return (
    <div className="jumbotron container flex-grow-1 h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 col-md-6">
          <div className="wrap">
            <i className="fas fa-star-of-life blue-text"></i>
            <h1>
              Streamline <span className="blue-text">Management</span>
              <br />
              for&nbsp;<span className="blue-text">Vendors</span> in the Fashion
              <br />
              Industry
            </h1>
            <p className="">
              Introducing ShopZetu's Vendor Management System&nbsp;! An
              essential tool for every vendor to help ease workflow.
            </p>
            <form className="row g-3 mx-auto">
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
              <div className="col-4 col-md-3">
                <button type="submit" className="btn btn-default mb-3">
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center h-100">
          <i className="fas fa-star-of-life blue-text"></i>
          <img alt="Junior Reis" className="img-fluid sz-img" src={junior_reis} />
          <i className="flex-start fas fa-star-of-life blue-text"></i>
        </div>
      </div>
    </div>
  );
}
