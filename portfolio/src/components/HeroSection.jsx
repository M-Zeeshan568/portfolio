import BlinkingText from "./BlinkingText";
import "./herosection.css";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="hero_wrapper position-relative">
          <div className="overlay"></div>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="hero_content_wrapper text-center">
              <h1 className="heading text-white">
                {" "}
                <TypeAnimation
                  sequence={["I'm a Developer", 1000, "I'm a Designer", 1000]}
                  speed={500}
                  repeat={Infinity}
                />
              </h1>
              <p className="para text-white">
                {" "}
                <BlinkingText
                  text="hy, I'm Zeeshan Javaid web developer.Welcome to web development
                world."
                />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
