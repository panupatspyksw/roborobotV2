import { useContext } from 'react';
import ScrollContext from '../components/context/ScrollContext';
import TransitionPage from '../components/layout/TransitionPage';
import SessionContext from '../components/context/SessionContext';
import { Link } from 'react-router-dom';
import ProductCardHorizontal from '../components/layout/ProductCardHorizontal';
function CheckOut() {
  const { scrollRef } = useContext(ScrollContext);
  const { carts } = useContext(SessionContext);
  const total = carts.map((e) => Number(e.price)).reduce((a, b) => a + b, 0);
  return (
    <TransitionPage>
      <div ref={scrollRef}>
        <div className='min-vh-100 h-auto bg-white d-flex pt-5 '>
          <div className='container px-5'>
            <div className='d-flex pt-5 my-5'>
              <div className='w-100'>
                <h2 className='fw-bold'>ตะกร้าสินค้า</h2>
                {carts.length > 0 ? (
                  <div className='d-flex flex-column flex-lg-row justify-content-between gap-3 w-100'>
                    <div className='col-12 col-lg-8'>
                      <div className='text-normal mb-3'>
                        {carts.length} รายการในตะกร้าสินค้า
                      </div>
                      {carts.map((product) => (
                        <ProductCardHorizontal props={product} />
                      ))}
                    </div>
                    <div className='col-lg-3'>
                      <div className='text-normal'>ยอดรวม</div>
                      <h1 className=' f-eng fw-bold'>
                        ฿{total.toLocaleString()}
                      </h1>
                      <button className='btn col-12 border-0 rounded-pill btn-danger w-100 py-3 d-flex align-items-center justify-content-center mt-3'>
                        ยืนยันออเดอร์
                      </button>
                      <Link
                        to='/courses'
                        className='btn col-12 bg-LinearGRAY text-dark border-0 rounded-pill w-100 py-3 d-flex align-items-center justify-content-center mt-3'
                      >
                        เลือกคอร์สเพิ่ม
                      </Link>
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

export default CheckOut;
