function Curve() {
  return (
    <div
      className='position-relative min-vw-100 '
      style={{
        zIndex: '-1',
        paddingBottom: '10%',
        transform: 'translateY(-35%)',
      }}
    >
      <svg
        width='100%'
        className='position-absolute top-0 left-0'
        //   height='80'
        viewBox='0 0 500 80'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <clipPath id='shape'>
            <path d='M0,0 L0,40 Q250,80 500,40 L500,0 Z' />
          </clipPath>
        </defs>
        <rect
          x='0'
          y='0'
          width='500'
          height='80'
          fill='#304284'
          clipPath='url(#shape)'
        />
      </svg>
    </div>
  );
}

export default Curve;
