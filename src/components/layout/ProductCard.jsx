import { FaClock, FaCalendar } from 'react-icons/fa';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';

import { useContext } from 'react';
import SessionContext from '../context/SessionContext';

function ProductCard({ props }) {
  const { addItemCart, removeItemCart, checkItemNotInCarts } =
    useContext(SessionContext);

  const { cover, name, detail, timecourse, timeuse, price, id } = props;
  return (
    <div className='col-12 col-lg-4 pb-4' id={id}>
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
          {checkItemNotInCarts(props) ? (
            <button
              className='btn w-100 py-3 d-flex align-items-center justify-content-center mt-3'
              onClick={() => addItemCart(props)}
            >
              <BsFillCartPlusFill className='me-3 fs-4' />
              เพิ่มลงตะกร้า
            </button>
          ) : (
            <button
              className='btn bg-SUBCOLOR-3-G-vt border-0 rounded-pill btn-danger w-100 py-3 d-flex align-items-center justify-content-center mt-3'
              onClick={() => removeItemCart(props)}
            >
              <BsFillCartDashFill className='me-3 fs-4' />
              นำออกจากตะกร้า
            </button>
          )}
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
