import { FaClock, FaCalendar, FaTrash } from 'react-icons/fa';

import { useContext } from 'react';
import SessionContext from '../context/SessionContext';

function ProductCardHorizontal({ props, DeleteOn }) {
  const { removeItemCart } = useContext(SessionContext);

  const { cover, name, detail, timecourse, timeuse, price, id } = props;
  return (
    <div className='col-12 mb-4' id={id}>
      <div className='w-100 overflow-hidden d-flex flex-column flex-md-row  gap-3 align-items-stretch'>
        <div className='col-12 col-md-3'>
          <div
            className=''
            style={{
              borderRadius: '20px',
              background: `url(${cover})`,
              paddingBottom: '70%',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
        <div className='col-12 col-md-5 d-flex flex-column justify-content-center'>
          <h2 className='text-md fw-md f-eng'>{name}</h2>
          <p className='text-normal m-0'>{detail}</p>
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
          </div>
        </div>
        <div className='col-12 col-md'>
          <div className='d-flex  align-items-center justify-content-end col-12'>
            <div className='ms-lg-auto me-auto me-md-0 text-normal'>
              ฿{price}
            </div>
            {DeleteOn && (
              <button
                className='border-0 bg-transparent text-center p-2 d-flex align-items-center justify-content-center'
                onClick={() => removeItemCart(props)}
              >
                <FaTrash className='text-danger fs-4' />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCardHorizontal.defaultProps = {
  props: {
    id: 1,
    cover: '/upload/CoverCourse1.jpg',
    name: 'Coding Foundation',
    detail: 'สอน Coding สำหรับฝึกตรรกะโดยใช้ Code Studio ฝึกการสร้าง Animation',
    timecourse: 20,
    timeuse: '3',
    price: '9000',
  },
  DeleteOn: true,
};

export default ProductCardHorizontal;
