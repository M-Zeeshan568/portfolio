import ServicesCard from "../components/ServicesCard";
import "./services.css";
import { servicesApi } from "../components/Api";

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
                  <h2
                    className="text-dark"
                    data-aos="flip-down"
                    data-aos-duration="2000"
                  >
                    <span>Services</span>
                  </h2>
                </div>

                <div className="d-flex flex-wrap justify-content-between" data-aos="slide-right" data-aos-duration="2000">
                  {servicesApi.map((curElem, index) => {
                    return <ServicesCard key={index} {...curElem} />;
                  })}
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
