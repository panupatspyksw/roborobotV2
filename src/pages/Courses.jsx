import { useContext, useState } from 'react';
import ScrollContext from '../components/context/ScrollContext';
import ProductCard from '../components/layout/ProductCard';
import TransitionPage from '../components/layout/TransitionPage';
import { FaSearch } from 'react-icons/fa';
import data from '../components/data/Products.json';
function Courses() {
  const { scrollRef } = useContext(ScrollContext);
  const [Select, setSelect] = useState('ALL');
  return (
    <TransitionPage>
      <div ref={scrollRef}>
        <div className='container mx-auto min-vh-100 bg-white'>
          <div className='pt-5 pb-4'></div>
          <div className='px-3 px-lg-5 py-5'>
            <div className='d-flex flex-column gap-3 flex-md-row mb-4 justify-content-between align-items-center'>
              {/* filter */}
              <div className='col-12 col-md-4'>
                <div className='dropdown'>
                  <button
                    className='w-fit btn px-4 py-3 text-normal dropdown-toggle f-eng'
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Category: <span className='text-subcolor-1'>{Select}</span>
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'
                  >
                    <li>
                      <button
                        className='dropdown-item f-eng'
                        onClick={() => setSelect('ALL')}
                      >
                        ALL
                      </button>
                    </li>
                    <li>
                      <button
                        className='dropdown-item f-eng'
                        onClick={() => setSelect('CODING FOUNDATION')}
                      >
                        CODING FOUNDATION
                      </button>
                    </li>
                    <li>
                      <button
                        className='dropdown-item f-eng'
                        onClick={() => setSelect('CODING INTERMEDIATE')}
                      >
                        CODING INTERMEDIATE
                      </button>
                    </li>
                    <li>
                      <button
                        className='dropdown-item f-eng'
                        onClick={() => setSelect('CODING ROBOTIC')}
                      >
                        CODING ROBOTIC
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* search */}
              <div className='col-12 col-md-4'>
                <div className='input-group input-group-lg m-0 positoin-relative'>
                  <span
                    className='position-absolute top-50 translate-middle-y'
                    style={{ zIndex: '20', left: '20px' }}
                  >
                    <FaSearch className='fs-5 text-maincolor-1' />
                  </span>
                  <input
                    type='text'
                    className='form-control rounded-pill ps-5 fs-5 py-3'
                    aria-label='Sizing example input'
                    aria-describedby='inputGroup-sizing-lg'
                  />
                </div>
              </div>
            </div>
            <div className='row '>
              {data.map(
                (e, i) =>
                  (Select === e.name || Select === 'ALL') && (
                    <ProductCard props={e} key={e.name} />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </TransitionPage>
  );
}

export default Courses;
