import { NavLink } from 'react-router-dom';
import Cart from '../layout/Cart';
import Logo from '../../assets/SVG/Logo.svg';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import HeaderContext from '../context/HeaderContext';
import { useContext } from 'react';

function Header() {
  const { mode, menulinks, disappear } = useContext(HeaderContext);

  return (
    <>
      <header
        className={`position-fixed top-0 left-0 w-100 ${
          disappear === true ? 'disappear' : ''
        } `}
        style={{ zIndex: '3000' }}
      >
        <div
          className={`container mx-auto w-100 d-flex justify-content-between py-3 pe-4 d-flex align-items-center ${
            mode === 'light' ? 'nav-light' : 'nav-dark'
          }`}
        >
          <button
            className='bg-transparent border-0 shadow-none d-block d-lg-none menubtn'
            onClick={() => {
              menulinks.current.classList.add('active');
            }}
          >
            <FiMenu className='fs-2' />
          </button>
          <NavLink
            to='/'
            className='text-decoration-none f-brand d-flex align-items-center '
          >
            <img
              src={Logo}
              className='me-3 '
              style={{ width: '35px' }}
              alt=''
            />
            <div className='fw-medium f-brand d-flex flex-column'>
              <span className='f-brand fs-5 lh-1 fw-bolder letter-space-20p'>
                robo
              </span>
              <span className='f-brand fs-5 lh-1 fw-bolder letter-space-20p'>
                robot
              </span>
            </div>
          </NavLink>
          <div className='d-block d-lg-none'>
            <Cart />
          </div>

          <div
            className='menulinks align-items-center d-none d-lg-flex'
            ref={menulinks}
          >
            <ul className='list-unstyled d-flex gap-4 align-items-center py-lg-4 m-0 '>
              <button
                className='border-0 shadow-none bg-transparent d-block d-lg-none bb w-100 p-3 pt-4 fw-bolder text-decoration-none d-flex align-items-center menubtn'
                to='/'
                onClick={() => {
                  menulinks.current.classList.remove('active');
                }}
              >
                <GrClose className='fs-3 me-3 ' />
                ปิดเมนู
              </button>
              <NavLink className='text-decoration-none link' to='/'>
                หน้าหลัก
              </NavLink>
              <NavLink className='text-decoration-none link' to='/about'>
                เกี่ยวกับเรา
              </NavLink>
              <NavLink className='text-decoration-none link' to='/courses'>
                คอร์สเรียน
              </NavLink>
              <NavLink className='text-decoration-none d-flex' to='/checkout'>
                <span className='me-3 d-block d-lg-none'>ตะกร้าสินค้า</span>
                <Cart />
              </NavLink>
              <div className='d-flex gap-lg-4 ms-lg-4'>
                <NavLink className='text-decoration-none' to='/login'>
                  <button className='btn rounded-pill px-3 '>
                    เข้าสู่ระบบ
                  </button>
                </NavLink>
                <NavLink className='text-decoration-none' to='/signup'>
                  <button className='btn rounded-pill px-3 '>ลงทะเบียน</button>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
