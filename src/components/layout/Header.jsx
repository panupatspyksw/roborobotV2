import { Link, NavLink } from 'react-router-dom';
import Cart from '../layout/Cart';
import Logo from '../../assets/SVG/Logo.svg';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import HeaderContext from '../context/HeaderContext';
import { useContext } from 'react';
import SessionContext from '../context/SessionContext';

function Header() {
  const { mode, menulinks, nottop } = useContext(HeaderContext);
  const { login, UserLogout } = useContext(SessionContext);
  console.log('login=>', login);
  return (
    <>
      <header
        className={`position-fixed top-0 left-0 w-100 ${
          nottop === true ? 'disappear' : ''
        } ${mode === 'light' ? 'head-light' : 'head-dark'} `}
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
            className='text-decoration-none f-brand d-flex align-items-center logo'
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
          <NavLink
            className='text-decoration-none d-block d-lg-none'
            to='/checkout'
          >
            <Cart />
          </NavLink>

          <div
            className='menulinks align-items-center d-none d-lg-flex'
            ref={menulinks}
          >
            <ul className='list-unstyled d-flex gap-4 align-items-center  m-0 '>
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
              {login && (
                <>
                  <li className='w-100 d-block d-md-none'>
                    <div className='d-flex dropdown-item align-items-center'>
                      <img
                        src='https://github.com/mdo.png'
                        alt='mdo'
                        width='50'
                        height='50'
                        className='rounded-circle'
                      />
                      <div
                        className='text-dark ms-2 overflow-hidden'
                        style={{ maxWidth: '150px' }}
                      >
                        <div className='fw-md'>{login?.name}</div>
                        <div
                          style={{ fontSize: '13px' }}
                          className='text-truncate'
                        >
                          {login?.email}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='w-100 d-block d-md-none'>
                    <Link to='/mycourses' className='dropdown-item text-dark'>
                      คอร์สของฉัน
                    </Link>
                  </li>
                </>
              )}
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
              {login && (
                <li className='p-3 ps-0 bb w-100 d-block d-md-none bg-transparent'>
                  <button
                    onClick={() => UserLogout()}
                    className='dropdown-item text-dark bg-transparent'
                  >
                    ออกจากระบบ
                  </button>
                </li>
              )}
              {login ? (
                <div className='d-none d-md-flex gap-lg-4 ms-lg-4'>
                  <div className='dropdown text-end d-none d-lg-block'>
                    <button
                      className='border-0  bg-transparent d-block link-dark text-decoration-none dropdown-toggle'
                      id='dropdownUser1'
                      data-bs-toggle='dropdown'
                      aria-expanded='true'
                    >
                      <img
                        src='https://github.com/mdo.png'
                        alt='mdo'
                        width='40'
                        height='40'
                        className='rounded-circle'
                      />
                    </button>
                    <ul
                      className='dropdown-menu text-small p-0'
                      aria-labelledby='dropdownUser1'
                      data-popper-placement='bottom-start'
                      style={{
                        position: 'absolute',
                        inset: '0px auto auto 0px',
                        margin: ' 0px',
                        transform: 'translate3d(0px, 34px, 0px)',
                      }}
                    >
                      <li className='p-3 w-100'>
                        <div className='d-flex dropdown-item justify-content-between align-items-center p-0'>
                          <img
                            src='https://github.com/mdo.png'
                            alt='mdo'
                            width='50'
                            height='50'
                            className='rounded-circle'
                          />
                          <div
                            className='ms-3 text-dark overflow-hidden'
                            style={{ maxWidth: '150px' }}
                          >
                            <div className='fw-md'>{login?.name}</div>
                            <div
                              style={{ fontSize: '13px' }}
                              className='text-truncate'
                            >
                              {login?.email}
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className='border-top'>
                        <Link
                          to='/mycourses'
                          className='dropdown-item text-dark  px-3 py-2'
                        >
                          คอร์สของฉัน
                        </Link>
                      </li>
                      <li className='border-top'>
                        <button
                          onClick={() => UserLogout()}
                          className='dropdown-item text-dark  px-3 py-2'
                        >
                          ออกจากระบบ
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className='d-flex gap-lg-4 ms-lg-4'>
                  <NavLink className='text-decoration-none' to='/login'>
                    <button className='btn rounded-pill px-3 '>
                      เข้าสู่ระบบ
                    </button>
                  </NavLink>
                  <NavLink className='text-decoration-none' to='/signup'>
                    <button className='btn rounded-pill px-3 '>
                      ลงทะเบียน
                    </button>
                  </NavLink>
                </div>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
