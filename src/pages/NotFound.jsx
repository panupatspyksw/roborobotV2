import { FaHome } from 'react-icons/fa';
import { useContext } from 'react';
import ScrollContext from '../components/context/ScrollContext';
import { Link } from 'react-router-dom';
import TransitionPage from '../components/layout/TransitionPage';

function NotFound() {
  const { scrollRef } = useContext(ScrollContext);

  return (
    <TransitionPage>
      <div
        className='w-100 h-100 d-flex align-items-center justify-content-center'
        ref={scrollRef}
      >
        <div className='text-center hero-content'>
          <div className='max-w-lg'>
            <h1 className='text-8xl font-bold fs-1 mb-3'>404 PAGE NOT FOUND</h1>
            <div>
              <Link
                to='/'
                className='btn btn-primary btn-lg d-flex w-fit mx-auto align-items-center w-fit rounded-pill'
              >
                <FaHome className='me-2' /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </TransitionPage>
  );
}

export default NotFound;
