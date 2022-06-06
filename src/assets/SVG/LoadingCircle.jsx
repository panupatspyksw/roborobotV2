function LoadingCircle({ childref }) {
  const size = 60;
  const r = size / 2;
  return (
    <div
      className={`position-relative `}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span
        className='d-block rounded-circle position-absolute top-50 start-50 translate-middle'
        style={{ width: '10px', height: '10px', background: '#ffffff3d' }}
      ></span>
      <svg
        className='position-absolute top-0 left-0 progress-ring'
        width={size}
        height={size}
      >
        <circle
          className='progress-ring__circle'
          stroke='#ffffff3d'
          strokeDasharray={'326.726 326.726'}
          strokeWidth='2'
          strokeDashoffset={'0'}
          fill='transparent'
          r={r * 0.85}
          cx={r}
          cy={r}
        />
        <circle
          className='progress-ring__circle'
          stroke='white'
          strokeDasharray={'326.726 326.726'}
          strokeWidth='2'
          ref={(el) => (childref.current[childref.current.length] = el)}
          strokeDashoffset='326.726'
          fill='transparent'
          r={r * 0.85}
          cx={r}
          cy={r}
        >
          <animate
            attributeName='width'
            values='0;90'
            dur='3s'
            repeatCount='1'
            fill='freeze'
          />
        </circle>
      </svg>
    </div>
  );
}

export default LoadingCircle;
