import andrew_neel from "../assets/images/andrew-neel.jpg";
import sparkles from "../assets/svgs/sparkles.svg";

export default function Contact() {
  return (
    <section class="container-fluid p contact">
      <div class="row container mx-auto">
        <div class="col-12 col-md-6 mb-4">
          <h1 class="text-center">Contact Us</h1>
          <form class="contact w-60" aria-describedby="formInfo">
            <div class="form-1 p-4 my-4">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="enter name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="enter email"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  row="7"
                  class="form-control"
                  id="message"
                  placeholder="enter message"
                ></textarea>
              </div>
            </div>
            <div class="form-2">
              {/* <!-- <div id="formInfo" class="form-text mb-2">
                  <small>
                    We'll never share your information with anyone else.
                  </small>
                </div> --> */}
              <div class="text-center">
                <button type="submit" class="btn btn-lg btn-default w-50">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center h-100">
          <img className="sz-icon left" src={sparkles} alt="Sparkles" />
          <img alt="Andrew Neel" class="img-fluid sz-img" src={andrew_neel} />
          <img className="sz-icon right" src={sparkles} alt="Sparkles" />
        </div>
      </div>
    </section>
  );
}
