import "./servicescard.css";

const ServicesCard = (curElem) => {
  const { img, heading, para } = curElem;
  console.log(curElem);
  return (
    <>
      <div className="box" data-aos="slide-right" data-aos-duration="2000">
        <div className="img-box">
          <img src={img} width={100} alt="" />
        </div>
        <div className="detail-box ps-3">
          <h5 className="text-dark"> {heading} </h5>
          <p className="text-dark">{para}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
