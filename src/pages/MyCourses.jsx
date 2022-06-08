import { useContext, useEffect } from 'react';
import ScrollContext from '../components/context/ScrollContext';
import TransitionPage from '../components/layout/TransitionPage';
import SessionContext from '../components/context/SessionContext';
import ProductCard from '../components/layout/ProductCard';
import data from '../components/data/Products.json';

function Payment() {
  const { scrollRef } = useContext(ScrollContext);
  const { carts, login } = useContext(SessionContext);
  useEffect(() => {
    if (carts.length < 1 || login === false) {
      window.location.pathname = '/login';
    }
    // eslint-disable-next-line
  }, []);
  return (
    <TransitionPage>
      <div ref={scrollRef}>
        <div className='bg-white d-flex '>
          <div className='container min-vh-100 mt-5 pt-5 px-5'>
            <div className='row '>
              <div className='col-12 mt-5 mb-3'>
                <h1 className='text-xl fw-bold '>คอร์สของฉัน</h1>
              </div>
              {data.map((e, i) => (
                <ProductCard props={e} type={'mycourse'} key={e.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TransitionPage>
  );
}

export default Payment;
