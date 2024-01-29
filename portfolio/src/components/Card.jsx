import "./card.css";

const Card = ({ img, heading, para }) => {
  return (
    <>
      <article className="card">
        <img
          className="card__background"
          src={img}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width={1920}
          height={2193}
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title"> {heading} </h2>
            <p className="card__description"> {para} </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
