import create_vendor from "../assets/images/computer_user.jpg";
import place_order from "../assets/images/clem-onojeghuo.jpg";
import collaborate from "../assets/images/austin-distel.jpg";
import monitor from "../assets/images/brooke-cagle.jpg";

import sparkles from "../assets/svgs/sparkles.svg";

export default function HowItWorks() {
  return (
    <section class="container-fluid how-it-works p">
      <h1 class="text-center py-4">How it Works? 4 Easy Steps!</h1>
      <div class="container">
        <div class="row mb-3">
          <div class="col-12 col-md-6 d-flex justify-content-center h-100">
            <img className="sz-icon left" src={sparkles} alt="Sparkles" />
            <img
              alt="Create vendor"
              class="img-fluid sz-img"
              src={create_vendor}
            />
            <img className="sz-icon right" src={sparkles} alt="Sparkles" />
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-5">
            <div>
              <h1>
                <span className="blue-text">1&nbsp;&nbsp;&nbsp;</span>Create a
                Vendor Profile
              </h1>
              <p>
                Start by setting up your vendor profile Provide essential
                information about your company, including contact details and
                product offerings. This step ensures your presence in the
                system.
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-6 d-flex justify-content-center h-100 order-md-2">
            <img className="sz-icon left" src={sparkles} alt="Sparkles" />
            <img
              alt="Valeria Odnovol"
              class="img-fluid sz-img"
              src={place_order}
            />
            <img className="sz-icon right" src={sparkles} alt="Sparkles" />
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-5 order-md-1">
            <div>
              <h1>
                <span className="blue-text">2&nbsp;&nbsp;&nbsp;</span>Place
                Orders With Ease
              </h1>
              <p>
                Easily create and manage purchase orders. Specify your product
                requirements, quantities and delivery dates. The system
                streamlines the order process, making it efficient and error
                free
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-6 d-flex justify-content-center h-100">
            <img className="sz-icon left" src={sparkles} alt="Sparkles" />
            <img
              alt="Valeria Odnovol"
              class="img-fluid sz-img"
              src={collaborate}
            />
            <img className="sz-icon right" src={sparkles} alt="Sparkles" />
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-5">
            <div>
              <h1>
                <span className="blue-text">3&nbsp;&nbsp;&nbsp;</span>
                Collaborate on Product Design
              </h1>
              <p>
                Collaborate with your vendors during the product design and
                development stages. Share ideas, design and feedback in
                real-time. This fosters creative team work and ensures your
                products align with your vision.
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-6 d-flex justify-content-center h-100 order-md-2">
            <img className="sz-icon left" src={sparkles} alt="Sparkles" />
            <img alt="Valeria Odnovol" class="img-fluid sz-img" src={monitor} />
            <img className="sz-icon right" src={sparkles} alt="Sparkles" />
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-5 order-md-1">
            <div>
              <h1>
                <span className="blue-text">4&nbsp;&nbsp;&nbsp;</span>Monitor
                Performance Metrics
              </h1>
              <p>
                Keep an eye on vendor performance metrics. Track factors like
                delivery times, product quality, and customer feedback. These
                insights help you make informed decisions and maintain high
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
