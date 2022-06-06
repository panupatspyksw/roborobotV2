function SVGCard({ SVG, title, paragraph, className }) {
  return (
    <div className={`text-center ${className}`}>
      <SVG />
      <h3 className='fw-bold f-eng text-md pt-4'>{title}</h3>
      <div className='text-normal'>
        {paragraph.split('/n').map((e, index) => (
          <div key={index}>{e}</div>
        ))}
      </div>
    </div>
  );
}

export default SVGCard;
