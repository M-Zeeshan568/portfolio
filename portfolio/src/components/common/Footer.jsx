import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <>
          {/* FOOTER=SECTION=START */}
          <section id="footer">
            <div className="footer_main_wrapper d-flex flex-column">
              <div className="container-xl p-0">
                <div className="footer_top_div">
                  <div
                    className="row"
                    data-aos="fade-up-right"
                    data-aos-duration="2000"
                  >
                    <div className="col-md-4">
                      <img src="/images/LOGO_GRAY.png" width={100} alt="" />
                    </div>
                    <div className="col-md-4">
                      <div className="footer_top_content_div">
                        <h3 className="para_5 text-white"> Contect </h3>
                        <p className="para_font_size text-white-50">
                          District Faisalabad, Tahsil Jaranwal, Chak No 568
                        </p>
                        <p className="para_5 text-white">
                          {" "}
                          zeeshan.568gb@gmail.com{" "}
                        </p>
                        <p className="para_5 text-white"> +312-4590772 </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="footer_top_content_div">
                        <h3 className="para_5 text-white"> Top Links </h3>
                        <ul className="list-unstyled">
                          <li className="my-3 ">
                            <NavLink
                              to="/resume"
                              className="text-decoration-none"
                            >
                              About Me
                            </NavLink>
                          </li>
                          <li className="my-3">
                            <NavLink
                              to="/services"
                              className="text-decoration-none"
                            >
                              Services
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="background_color_div mt-auto">
                <div className="container-xl p-0">
                  <div className="footer_bottom_div ">
                    <div
                      className="row"
                      data-aos="flip-left"
                      data-aos-duration="2000"
                    >
                      <div className="col-md-3">
                        <div className="footer_bottom_div_col_1 position-relative">
                          <img
                            className="position-absolute  img-fluid"
                            width="143px"
                            src="images/slider-section-red-arrow.png"
                            alt=""
                          />
                          <img
                            className="position-absolute bottom_border_arrow_img img-fluid"
                            width="143px"
                            src="images/slider-section-red-arrow-borders.png"
                            alt=""
                          />
                          <h3 className="position-absolute text-white">
                            {" "}
                            Have any projects in <br /> mind? Get in touch!
                          </h3>
                        </div>
                      </div>
                      <div className=" col-xxl-9 col-xl-9 col-lg-9 col-md-12">
                        <div className="footer_text_div footer_bottom_height_div  footer_bottom_height_div_2 d-flex justify-content-center align-items-center">
                          <p> Copyright © {currentYear} for Zeeshan Javaid </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FOOTER=SECTION=START */}
        </>
      </footer>
    </>
  );
};

export default Footer;
