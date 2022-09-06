import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to AboutPage&nbsp;
                    <strong className="brand-name" style={{ color: "green" }}>
                      of CheemsTech
                    </strong>
                  </h1>
                  <h2 className="my-3"></h2>
                  <div className="mt-3">
                    <NavLink
                      to="/contact"
                      className="btn-get-started-aboutpage btn-get-started">
                      Contact Us
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBU0ImqqW6lNtPRaE12-yMDvHTkplGqeqk0g&usqp=CAU"
                    className="img-fluid animated"
                    alt="about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
