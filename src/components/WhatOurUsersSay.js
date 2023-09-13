import "../carousel.css";

export default function WhatOurUsersSay() {
  return (
    <section class="container-fluid p">
      <h1 class="text-center py-4">What Our Users Say</h1>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <i class="fas fa-quote-left blue-text mb-3"></i>
              <p>
                Shop Zetu's VMS has transformed how we manage vdenors. It;s a
                game changer !
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <i class="fas fa-quote-left blue-text mb-3"></i>
              <p>
                Efficient order processing and real time communication- it's a
                mut have
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2">
            <div class="p-4">
              <i class="fas fa-quote-left blue-text mb-3"></i>
              <p>
                Quality control is a breeze with Shop Zetu. It's improved our
                products' consistency.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div id="carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img
                    alt="slide"
                    src="https://i.imgur.com/10xN40L.jpg"
                    className="img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    alt="slide"
                    src="https://i.imgur.com/nmq9R3p.jpg"
                    className="img-responsive"
                  />
                </div>
                <div className="item">
                  <img
                    alt="slide"
                    src="https://i.imgur.com/7xr8cuB.jpg"
                    className="img-responsive"
                  />
                </div>
              </div>

              <div className="controles">
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carousel" data-slide-to="1"></li>
                  <li data-target="#carousel" data-slide-to="2"></li>
                </ol>

                <div className="flechas">
                  <a
                    className="izq"
                    href="#carousel"
                    role="button"
                    data-slide="prev"
                  >
                    &larr;
                  </a>
                  <a
                    className="der"
                    href="#carousel"
                    role="button"
                    data-slide="next"
                  >
                    &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
