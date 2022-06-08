import { useContext } from 'react';
import ScrollContext from '../components/context/ScrollContext';
import TransitionPage from '../components/layout/TransitionPage';
import SignupSVG from '../assets/SVG/SignupSVG.svg';
import SessionContext from '../components/context/SessionContext';

import { Link } from 'react-router-dom';
function Signup() {
  const { scrollRef } = useContext(ScrollContext);
  const { UserLogin } = useContext(SessionContext);
  var email, password, name;
  function onSubmit(e) {
    e.preventDefault();
    UserLogin({ email, password, name });
  }
  return (
    <TransitionPage>
      <div ref={scrollRef}>
        <div className='min-vh-100 h-auto main-bg-color d-flex pt-5 d-flex align-items-center'>
          <div className='mx-auto pt-lg-0 mt-5 mt-lg-0'>
            <div className='d-flex flex-column-reverse flex-lg-row gap-5 container mx-auto align-items-center px-4 px-md-0 pb-5'>
              <div className='col-12 col-md px-md-0 px-xl-5'>
                <img src={SignupSVG} className='img-fluid' alt='' />
              </div>
              <div className='col-12 col-md text-white px-md-0 px-xl-5'>
                <form onSubmit={onSubmit}>
                  <h2 className='fw-md f-eng mb-3'>
                    Sign up and start learning!
                  </h2>
                  <div className='mb-3'>
                    <label className='form-label w-100'>ชื่อ - สกุล</label>
                    <input
                      type='text'
                      className='form-control'
                      required
                      onChange={(e) => (name = e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label w-100'>อีเมล</label>
                    <input
                      type='email'
                      className='form-control'
                      required
                      onChange={(e) => (email = e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label w-100'>รหัสผ่าน</label>
                    <input
                      type='password'
                      className='form-control'
                      required
                      onChange={(e) => (password = e.target.value)}
                    />
                  </div>
                  <button className='w-100 btn px-5 mt-3 py-3 text-normal'>
                    ลงทะเบียน
                  </button>
                  <div className='mt-4'>
                    คุณมีบัญชีแล้วใช่หรือไม่ ?{' '}
                    <Link
                      className='text-subcolor-1 text-decoration'
                      to='/login'
                    >
                      เข้าสู่ระบบได้ที่นี่
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionPage>
  );
}

export default Signup;
