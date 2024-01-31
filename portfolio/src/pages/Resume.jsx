import "./resume.css";
import { educationApi, workExperienceApi } from "../components/Api";
import WorkEXpereinceCard from "../components/WorkEXpereinceCard";
import EducationCard from "../components/EducationCard";

const Resume = () => {
  return (
    <>
      <div className="container-xxl">
        {/* ABOUT-SECTION-START */}
        <div
          className="about_section"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
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
        <div
          className="experience_section my-5"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="work-experience-section">
            <h2 className="h3 mb-4 text-dark">Work Experience</h2>
            {workExperienceApi.map((data, index) => {
              return <WorkEXpereinceCard key={index} {...data} />;
            })}
            ;
          </div>
        </div>
        {/* EXPERENCE-SECTION-END */}
        {/* EDUCATION-SECTION-END */}
        <div
          className="education-section py-5"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <h2 className="h3 mb-4 text-dark">Education</h2>
          {educationApi.map((data, index) => {
            return <EducationCard key={index} {...data} />;
          })}
          ;
        </div>
        {/* EDUCATION-SECTION-END */}
      </div>
    </>
  );
};

export default Resume;
