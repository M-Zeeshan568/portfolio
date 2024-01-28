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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <Card
          img="https://i.imgur.com/QYWAcXk.jpeg"
          heading="Title"
          para="welcome to my website and thanks a lot for visiting my website."
        />
      </div>
      <div>
        <Card
          img="https://i.imgur.com/QYWAcXk.jpeg"
          heading="Title"
          para="welcome to my website and thanks a lot for visiting my website."
        />
      </div>
      <div>
        <Card
          img="https://i.imgur.com/QYWAcXk.jpeg"
          heading="Title"
          para="welcome to my website and thanks a lot for visiting my website."
        />
      </div>
    </Slider>
  );
};

export default SlickSlider;
