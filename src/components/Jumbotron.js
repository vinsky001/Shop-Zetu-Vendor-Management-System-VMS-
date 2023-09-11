import junior_reis from "../assets/images/junior-reis.jpg";

export default function Jumbotron() {
  return (
    <div class="jumbotron container flex-grow-1 h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 col-md-6">
          <div class="wrap">
            {/* <i class="fas fa-star-of-life blue-text"></i> */}
            <h1>
              Streamline <span class="blue-text">Management</span>
              <br />
              for&nbsp;<span class="blue-text">Vendors</span> in the Fashion
              <br />
              Industry
            </h1>
            <p class="text-justify">
              Introducing ShopZetu's Vendor Management System&nbsp;! An
              essential tool for every vendor to help ease workflow.
            </p>
            <form class="row g-3 mx-auto">
              <div class="col-8 col-md-9">
                <label for="email" class="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control email-box"
                  id="email"
                  placeholder="enter email"
                  autofocus
                />
              </div>
              <div class="col-4 col-md-3">
                <button type="submit" id="contact-btn" class="btn btn-default mb-3 w-10">
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center h-100">
          {/* <i class="fas fa-star-of-life blue-text"></i> */}
          <img alt="Junior Reis" class="img-fluid sz-img" src={junior_reis} />
          {/* <i class="flex-start fas fa-star-of-life blue-text"></i> */}
        </div>
      </div>
    </div>
  );
}
