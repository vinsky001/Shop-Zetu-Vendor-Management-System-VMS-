import andrew_neel from "../assets/images/andrew-neel.jpg";
import sparkles from "../assets/svgs/sparkles.svg";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendStatus = document.getElementById("send-status");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/submit_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        sendStatus.innerHTML = `<div class="alert alert-success mt-3 text-center" role="alert">Email sent successfully!&nbsp;<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
      } else {
        console.log("Error sending email");
        sendStatus.innerHTML = `<div class="alert alert-danger mt-3 text-center" role="alert">Error sending email, please try again!&nbsp;<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      sendStatus.innerHTML = `<div class="alert alert-danger mt-3 text-center" role="alert">An error occurred!&nbsp;<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section class="container-fluid p contact">
      <div class="row container mx-auto">
        <div class="col-12 col-md-6 mb-4">
          <h1 class="text-center">Contact Us</h1>
          <form
            class="contact w-60"
            aria-describedby="formInfo"
            onSubmit={handleSubmit}
          >
            <div class="form-1 p-4 my-4">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="enter name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  name="email"
                  placeholder="enter email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                  name="message"
                  placeholder="enter message"
                  value={formData.message}
                  onChange={handleInputChange}
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
          <div id="send-status"></div>
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
