import "./servicescard.css";

const ServicesCard = ({ img, heading, para }) => {
  return (
    <>
      <div className="box">
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
