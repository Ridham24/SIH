import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: "#178789" }}
    >
      <section
        className="d-flex justify-content-sm-start p-4 text-white"
        style={{ backgroundColor: "#ECEFF1" }}
      >
        <div className="me-5">
          <span style={{ color: "black" }}>
            Get connected with us on social networks:
          </span>
        </div>
        <div style={{ color: "black", display: "flex" }}>
          <a href="" className="text-black me-4">
            <i
              class="bi-alarm"
              style={{ fontSize: 2, color: "cornflowerblue" }}
            ></i>
          </a>
          <a href="" className="text-black me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-black me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-black me-4">
            <i className="bi bi-whatsapp"></i>
          </a>
          {/* <a href="" className="text-black me-4"> */}
          <i className="fab fa-linkedin"></i>
          {/* </a> */}
        </div>
      </section>
      <section>
        <div className="container text-md-start mt-3">
          <div className="row mt-3">
            <div className="col-md-5 col-lg-6 col-xl-5 mx-auto mb-4">
              <h6 style={{ color: "white", fontSize: 30 }}>
                SMART INDIA HACKATHON
              </h6>
              <h5 style={{ color: "rgb(223,10,10)", fontWeight: "bolder" }}>
                WHAT’S NEW IN SMART INDIA HACKATHON 2023
              </h5>
              <hr
                className="mb-10 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                SIH 2023 brings the next generation evolution by inclusion of
                new methodology to inculcate the culture of startup and
                innovation ecosystem across different age groups i.e. are as
                follows: -
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                style={{ color: "white", fontSize: 25 }}
                className="text-uppercase fw-bold"
              >
                Contact us
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> Nagpur, India
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> sih@aicte-india.org
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 91 11 29581239
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 91 11 29581240
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
