import { useContext, useEffect, useState } from 'react';
import ScrollContext from '../components/context/ScrollContext';
import TransitionPage from '../components/layout/TransitionPage';
import SessionContext from '../components/context/SessionContext';
import PaymentMethod from '../components/layout/PaymentMethod';
import ProductCardHorizontal from '../components/layout/ProductCardHorizontal';
import Alert from '../components/layout/Alert';
function Payment() {
  const { scrollRef } = useContext(ScrollContext);
  const { carts, login } = useContext(SessionContext);
  const [submit, setSubmit] = useState(false);
  const total = carts.map((e) => Number(e.price)).reduce((a, b) => a + b, 0);
  useEffect(() => {
    if (carts.length < 1 || login === false) {
      window.location.pathname = '/courses';
    }
    // eslint-disable-next-line
  }, []);

  return (
    <TransitionPage>
      <Alert show={submit} />
      <div ref={scrollRef}>
        <div className='min-vh-100 h-auto bg-white d-flex pt-5 '>
          <div className='container px-5'>
            <div className='d-flex pt-5 my-5'>
              <div className='w-100'>
                <h2 className='fw-bold'>ทำการชำระเงิน</h2>
                {carts.length > 0 ? (
                  <div className='d-flex flex-column flex-lg-row justify-content-between gap-3 w-100'>
                    <div className='col-12 col-lg-8'>
                      <div className='text-normal mb-3 fw-md'>
                        กรุณากรอกข้อมูลติดต่อสำหรับส่งอุปกรณ์การเรียน
                      </div>
                      <form style={{ minHeight: '800px' }}>
                        <div className='mb-3'>
                          <label className='form-label w-100'>
                            รายละเอียดที่อยู่
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            required
                          />
                        </div>
                        <div className='mb-3'>
                          <label className='form-label w-100'>จังหวัด</label>
                          <input
                            type='text'
                            className='form-control'
                            required
                          />
                        </div>
                        <div className='mb-3'>
                          <label className='form-label w-100'>อำเภอ/เขต</label>
                          <input
                            type='text'
                            className='form-control'
                            required
                          />
                        </div>
                        <div className='mb-3'>
                          <label className='form-label w-100'>ตำบล/แขวง</label>
                          <input
                            type='text'
                            className='form-control'
                            required
                          />
                        </div>
                        <div className='text-normal mb-3 fw-md'>
                          ข้อมูลการชำระเงิน
                        </div>
                        <PaymentMethod />
                        <div className='text-normal mt-4 mb-3 fw-md'>
                          รายการสั่งซื้อ
                        </div>
                        {carts.map((product) => (
                          <ProductCardHorizontal
                            key={product.id}
                            props={product}
                            DeleteOn={false}
                          />
                        ))}
                      </form>
                    </div>
                    <div className='col-lg-3'>
                      <div className='text-normal fw-md'>สรุปคำสั่งซื้อ</div>
                      <h1 className=' f-eng fw-bold'>
                        ฿{total.toLocaleString()}
                      </h1>
                      <button
                        className='btn col-12 border-0 rounded-pill btn-danger w-100 py-3 d-flex align-items-center justify-content-center mt-3'
                        onClick={() => {
                          setSubmit(true);
                        }}
                      >
                        ชำระเงิน
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>คุณยังไม่ได้เลือกสินค้า</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionPage>
  );
}

export default Payment;
