import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickslider.css";
import Card from "./Card";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="d-flex justify-content-center">
        <Card
          img="/images/team/bilal.jpg"
          heading="Bilal"
          para="Passionate javascript developer with 3+ years of experience building robust and scalable web applications."
        />
      </div>
      <div className="d-flex justify-content-center">
        <Card
          img="/images/team/zubair.jpg"
          heading="Zubair"
          para="Passionate Laravel developer with 7+ years of experience building robust and scalable web applications."
        />
      </div>
      <div className="d-flex justify-content-center">
        <Card
          img="/images/team/majur.jpg"
          heading="Bilal"
          para="Passionate Laravel developer with 5+ years of experience building robust and scalable web applications."
        />
      </div>
      <div className="d-flex justify-content-center">
        <Card
          img="/images/team/hamid.jpg"
          heading="Hamid"
          para="Passionate dot net developer with 3+ years of experience building robust and scalable web applications."
        />
      </div>
    </Slider>
  );
};

export default SlickSlider;
