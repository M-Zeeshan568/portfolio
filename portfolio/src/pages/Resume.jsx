import "./resume.css";

const Resume = () => {
  return (
    <>
      <div className="container-xxl">
        {/* ABOUT-SECTION-START */}
        <div className="about_section">
          <div className="row">
            <div className="col-md-6">
              <div className="about_description_section">
                <h1 className="text-dark"> About Me </h1>
                <p className="text-dark para_2">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi enim assumenda error ratione debitis veniam soluta
                  dolore, delectus quae qui dignissimos voluptate! Quasi
                  voluptatum harum velit delectus facere reiciendis fugit?{" "}
                </p>
                <p className="text-dark para_2">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi enim assumenda error ratione debitis veniam soluta
                  dolore, delectus quae qui dignissimos voluptate! Quasi
                  voluptatum harum velit delectus facere reiciendis fugit?{" "}
                </p>
                <p className="text-dark para_2">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi enim assumenda error ratione debitis veniam soluta
                  dolore, delectus quae qui dignissimos voluptate! Quasi
                  voluptatum harum velit delectus facere reiciendis fugit?{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_image_section position-relative d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid floating"
                  src="/images/about.png"
                  width={400}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT-SECTION-END */}
        {/* EXPERENCE-SECTION-START */}
        <div className="experience_section my-5">
          <div className="work-experience-section">
            <h2 className="h3 mb-4 text-dark">Work Experience</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-primary shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1 text-dark">
                    Frontend Developer{" "}
                    <span className="text-muted h6">at Creative Agency</span>
                  </div>
                  <div className="text-muted text-small mb-2 text-dark">
                    May, 2015 - Present
                  </div>
                  <div className="text-dark">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1 text-dark">
                    Frontend Developer{" "}
                    <span className="text-muted h6">at Creative Agency</span>
                  </div>
                  <div className="text-muted text-small mb-2 text-dark">
                    May, 2015 - Present
                  </div>
                  <div className="text-dark">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* EXPERENCE-SECTION-END */}
        {/* EDUCATION-SECTION-END */}
        <div className="education-section py-5">
          <h2 className="h3 mb-4 text-dark">Education</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-success shadow-sm">
              <div className="card-body text-dark">
                <div className="h5 mb-1">
                  Masters in Information Technology{" "}
                  <span className="text-muted h6">
                    from International University
                  </span>
                </div>
                <div className="text-muted text-small mb-2">2011 - 2013</div>
                <div>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </div>
              </div>
            </div>
            <div className="timeline-card timeline-card-success shadow-sm">
              <div className="card-body text-dark">
                <div className="h5 mb-1">
                  Masters in Information Technology{" "}
                  <span className="text-muted h6">
                    from International University
                  </span>
                </div>
                <div className="text-muted text-small mb-2">2011 - 2013</div>
                <div>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* EDUCATION-SECTION-END */}
      </div>
    </>
  );
};

export default Resume;
