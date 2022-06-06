function FormWithSVG({ SVG, form, children }) {
  return (
    <div className='container d-flex'>
      <div className='col'>{SVG}</div>
      <div className='col'>{children}</div>
    </div>
  );
}

export default FormWithSVG;
