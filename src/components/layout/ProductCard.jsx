import { FaClock, FaCalendar, FaShoppingCart } from 'react-icons/fa';
function ProductCard({ props }) {
  const { cover, name, detail, timecourse, timeuse, price } = props;
  return (
    <div className='col-12 col-lg-4'>
      <div
        className='w-100 overflow-hidden shadow '
        style={{
          borderRadius: '30px',
        }}
      >
        <div
          className=''
          style={{
            background: `url(${cover})`,
            paddingBottom: '70%',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='p-3'>
          <h2 className='text-md fw-md f-eng'>{name}</h2>
          <p className='text-normal'>{detail}</p>
          <div className='d-flex '>
            <div className='d-flex gap-2 align-items-center'>
              <FaClock className='text-maincolor-1' />
              <span className='lh-1 text-normal ' style={{ paddingTop: '2px' }}>
                {timecourse} ชั่วโมง
              </span>
            </div>
            <div className='ms-2 d-flex gap-2 align-items-center'>
              <FaCalendar className='text-maincolor-1' />
              <span className='lh-1 text-normal' style={{ paddingTop: '2px' }}>
                เรียน {timeuse} เดือน
              </span>
            </div>
            <div className='ms-auto fw-bold text-normal'>฿{price}</div>
          </div>
          <button className='btn w-100 py-3 d-flex align-items-center justify-content-center mt-3'>
            <FaShoppingCart className='me-3 ' />
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.defaultProps = {
  props: {
    id: 1,
    cover: '/upload/CoverCourse1.jpg',
    name: 'Coding Foundation',
    detail: 'สอน Coding สำหรับฝึกตรรกะโดยใช้ Code Studio ฝึกการสร้าง Animation',
    timecourse: 20,
    timeuse: '3',
    price: '9000',
  },
};

export default ProductCard;
