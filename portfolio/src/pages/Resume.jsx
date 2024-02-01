import "./resume.css";
import { educationApi, workExperienceApi } from "../components/Apis";
import WorkEXpereinceCard from "../components/WorkEXpereinceCard";
import EducationCard from "../components/EducationCard";
import BlinkingText from "../components/BlinkingText";

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
                  I'm a web developer with a passion for crafting engaging and
                  performant user experiences. I'm proficient in{" "}
                  <BlinkingText
                    className="d-inline"
                    text="HTML ,CSS ,JavaScript, React JS, Next JS, Node JS "
                  />{" "}
                  and I'm always eager to learn new technologies.
                </p>
                <p className="text-dark para_2">
                  I thrive on solving complex challenges and delivering
                  innovative solutions.
                </p>
                <p className="text-dark para_2">
                  In my recent role at Backendz and Mobizill Company, I
                  spearheaded the development of a React-based e-commerce
                  platform that achieved a 20% increase in conversion rates.
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
            <h2
              className="h3 mb-4 text-dark"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              Work Experience
            </h2>
            {workExperienceApi.map((data, index) => {
              return <WorkEXpereinceCard key={index} {...data} />;
            })}
            ;
          </div>
        </div>
        {/* EXPERENCE-SECTION-END */}
        {/* EDUCATION-SECTION-END */}
        <div className="education-section py-5">
          <h2
            className="h3 mb-4 text-dark"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            Education
          </h2>
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
