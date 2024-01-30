import ServicesCard from "../components/ServicesCard";
import "./services.css";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
  return (
    <>
      <div className="container-xxl">
        <>
          {/* service section */}
          <section className="service_section layout_padding">
            <div className="service_container">
              <div className="container ">
                <div className="heading_container text-center py-5">
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="bounceOutLeft"
                    initiallyVisible={true}
                  >
                    <h2 className="text-dark">
                      <span>Services</span>
                    </h2>
                  </ScrollAnimation>
                </div>
                <div className="row">
                  <div className="col-md-6 ">
                    <ServicesCard
                      img="/images/services/HTML5.svg"
                      heading="Air Transport"
                      para="fact that a reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <ServicesCard
                      img="/images/services/HTML5.svg"
                      heading="Air Transport"
                      para="fact that a reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 ">
                    <ServicesCard
                      img="/images/services/HTML5.svg"
                      heading="Air Transport"
                      para="fact that a reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <ServicesCard
                      img="/images/services/HTML5.svg"
                      heading="Air Transport"
                      para="fact that a reader will be distracted by the readable content of a
                      page when looking at its layout. The point of using"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end service section */}
        </>
      </div>
    </>
  );
};

export default Services;
