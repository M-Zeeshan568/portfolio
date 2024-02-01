const EducationCard = (data) => {
  const { heading, education, year, para } = data;
  return (
    <>
      <div className="timeline" data-aos="flip-left" data-aos-duration="2000">
        <div className="timeline-card timeline-card-success shadow-sm">
          <div className="card-body">
            <div className="h5 mb-1 text-dark">
              {heading}
              <span className="text-muted h6"> {education} </span>
            </div>
            <div className="text-muted text-small mb-2 text-dark">{year}</div>
            <div className="text-dark">{para}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
