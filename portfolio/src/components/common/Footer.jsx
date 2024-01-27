import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <>
          {/* FOOTER=SECTION=START */}
          <section id="footer">
            <div className="footer_main_wrapper d-flex flex-column">
              <div className="container-xl p-0">
                <div className="footer_top_div">
                  <div className="row">
                    <div className="col-md-4">
                      <img src="/images/LOGO_GRAY.png" width={100} alt="" />
                    </div>
                    <div className="col-md-4">
                      <div className="footer_top_content_div">
                        <h3 className="para_5 text-white"> Contect </h3>
                        <p className="para_font_size text-white-50">
                          {" "}
                          United States 866 Wilshire, 2nd Street Los Angeles
                          90024.{" "}
                        </p>
                        <p className="para_5 text-white"> xyz@gmail.com </p>
                        <p className="para_5 text-white"> +555 222 6758 </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="footer_top_content_div">
                        <h3 className="para_5 text-white"> Top Links </h3>
                        <ul className="list-unstyled">
                          <li className="my-3 ">
                            <a href="#" className="text-decoration-none">
                              About
                            </a>
                          </li>
                          <li className="my-3">
                            <a href="#" className="text-decoration-none">
                              Contact
                            </a>
                          </li>
                          <li className="my-3">
                            <a href="#" className="text-decoration-none">
                              Terms of services
                            </a>
                          </li>
                          <li className="my-3">
                            <a href="#" className="text-decoration-none">
                              Privacy and Policy
                            </a>
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
                    <div className="row">
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
                      <div className="col-md-6">
                        <div className="footer_bottom_height_div d-flex align-items-center">
                          <div className="footer_input_wrapper my-3 position-relative">
                            <input
                              type="text"
                              placeholder="Please enter your email"
                            />
                            <img
                              className="position-absolute"
                              src="assets/images/input-arrow-footer-section.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" col-xxl-3 col-xl-3 col-lg-3 col-md-12 ">
                        <div className="footer_text_div footer_bottom_height_div  footer_bottom_height_div_2 d-flex align-items-center">
                          <p> Copyright © 2023 for vmix </p>
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
