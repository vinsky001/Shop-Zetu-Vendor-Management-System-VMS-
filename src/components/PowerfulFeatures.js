import "../Animation.css";

import cloud from "../assets/svgs/cloud_upload.svg";
import cart from "../assets/svgs/shopping_cart.svg";
import diversity from "../assets/svgs/diversity.svg";
import frame from "../assets/svgs/frame_impact.svg";
import monitoring from "../assets/svgs/monitoring.svg";
import payments from "../assets/svgs/payments.svg";

export default function PowerfulFeatures() {
  return (
    <section class="container-fluid p">
      <h1 class="text-center py-4 mt-12">
        Powerful Features to Boost Your Efficiency
      </h1>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <img src={cloud} alt="Cloud" className="mb-3" />
              <h4>
                Vendor Database
                <br />
                Management
              </h4>
              <p>Centralize vendor info for easy access</p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <img src={cart} alt="Shopping Cart" className="mb-3" />
              <h4>
                Order and Inventory
                <br />
                Tracking
              </h4>
              <p>Smooth order processing and tracking</p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <img src={diversity} alt="Users" className="mb-3" />
              <h4>
                Collaborative Product
                <br />
                Design
              </h4>
              <p>Team up on product creation</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <img src={frame} alt="Search" className="mb-3" />
              <h4>
                Quality Control and
                <br />
                Compliance
              </h4>
              <p>Ensure product standrads are met</p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <img src={monitoring} alt="Charts" className="mb-3" />
              <h4>
                Real Performance
                <br />
                Monitoring
              </h4>
              <p>Track vendor performace metrics</p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <img src={payments} alt="Payments" className="mb-3" />
              <h4>
                Easy Finance
                <br />
                Management
              </h4>
              <p>Streamline invoicing and payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
