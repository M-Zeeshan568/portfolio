import CountUp from "../components/Counterup";
import HeroSection from "../components/HeroSection";
import SlickSlider from "../components/SlickSlider";
import "./home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="container-xl">
        <div className="counter_wrapper position-relative d-flex justify-content-evenly align-items-center">
          <div className="counter_div">
            <CountUp />
            <p> All Services </p>
          </div>
          <div className="counter_div">
            <CountUp />
            <p> All Services </p>
          </div>
          <div className="counter_div">
            <CountUp />
            <p> All Services </p>
          </div>
        </div>
        <div className="home_slider mb-5">
          <div className="heading d-flex justify-content-center py-5">
            <h1> Team </h1>
          </div>
          <SlickSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
