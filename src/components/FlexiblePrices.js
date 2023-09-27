export default function FlexiblePricing() {
  const noRef = null;

  return (
    <section className="container-fluid p">
      <h1 className="text-center py-4">
        Flexible Pricing Plans For Every Business Size
      </h1>
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-4 p-5"
            style={{ backgroundColor: "var(--sz-grey)" }}
          >
            <h3>Basic Plan</h3>
            <p>Features:</p>
            <ul className="pricing basic p-0">
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Vendor Database
                Management
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Order and Inventory
                Tracking
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Limited Performance
                Monitoring
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Email Support
              </li>
            </ul>
            <p className="mb-120">
              Price: <span className="text-bold">KES 2,500</span>/month
            </p>
            <div className="d-grid">
              <a href={noRef} className="btn btn-default">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-12 col-md-4 p-5"
            style={{ backgroundColor: "var(--sz-blue)", color: "white" }}
          >
            <h3>Professional Plan</h3>
            <p>Features:</p>
            <ul className="pricing professional p-0">
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;All Basic Plan Features
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Collaborative Product
                Design
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Enhanced Performance
                Monitoring
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Phone and Email Support
              </li>
            </ul>
            <p className="mb-120">
              Price: <span className="text-bold">KES 4,500</span>/month
            </p>
            <div className="d-grid">
              <a href={noRef} className="btn btn-white">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-12 col-md-4 p-5"
            style={{ backgroundColor: "var(--sz-grey)" }}
          >
            <h3>Premium Plan</h3>
            <p>Features:</p>
            <ul className="pricing premium p-0">
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;All Professional Plan
                Features
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Quality Control and
                Compliance
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Priority Performance
                Monitoring
              </li>
              <li>
                <i className="fas fa-circle-check"></i>&nbsp;Dedicated Account
                Manager
              </li>
            </ul>
            <p className="mb-120">
              Price: <span className="text-bold">KES 7,000</span>/month
            </p>
            <div className="d-grid">
              <a href={noRef} className="btn btn-default">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
