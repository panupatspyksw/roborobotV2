import { useContext } from 'react';
import RobotAbout from '../assets/SVG/RobotAbout';
import ScrollContext from '../components/context/ScrollContext';
import TransitionPage from '../components/layout/TransitionPage';
import Curve from '../assets/SVG/Curve';

function About() {
  const { scrollRef } = useContext(ScrollContext);
  const cardstyle = {
    paddingBottom: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <TransitionPage>
      <div ref={scrollRef}>
        <div className='main-bg-color  w-100 d-flex align-items-center justify-content-center'>
          <div className='text-center text-white d-flex flex-column gap-3 px-5 pt-5'>
            <h1 className='text-xxl f-eng pt-5 mt-5'>roborobot acadamy</h1>
            <h2 className='text-md f-eng'>
              “ Enchance skills with creative classrooms that pay off for
              everyone “
            </h2>
            <p className='text-normal'>
              ทุกคนได้พัฒนาทักษะอย่างสร้างสรรค์และใช้ได้จริง
              ด้วยห้องเรียนที่มีชีวิต
            </p>
            <div className='col-12 col-lg-10 mx-auto position-relative'>
              {/* <div style={{ paddingBottom: '45%' }}></div> */}
              <div
                className=' w-100 '
                // style={{ top: '120%' }}
              >
                <RobotAbout />
              </div>
            </div>
          </div>
        </div>
        <Curve />
        <div className='container px-5 bg-white min-vh-100 w-100 mt-5 text-center'>
          <h1 className='text-xxl f-eng fw-md'>
            What is
            <span className='ms-3 f-brand fw-bolder letter-space-20p text-maincolor-1'>
              roborobot
            </span>
          </h1>
          <p className='text-md'>โลโบโลบอท คืออะไร</p>
          <div className='text-normal mt-5 px-lg-5 d-flex flex-column gap-4 gap-lg-5'>
            <div>
              ROBOROBOT ACADEMY โรงเรียนสอนการคิดคำนวณ
              ตรรกะและการเขียนโค้ดสำหรับหุ่นยนต์เพื่อตอบโจทย์เด็กยุคศตวรรษที่ 21
              พร้อบกับการเรียนรู้แบบ Project Based Learning
              พร้อมทั้งพัฒนาการเขียนโปรแกรมด้วยคลาสที่หลากหลายของเราประกอบไปด้วย
              3 คลาสหลัก ได้แก่ Coding Foundation, Coding Intermediate, Coding
              Robotic
            </div>
            <div>
              โดยการเรียนการสอนทั้งหมดจะใช้พื้นฐานการเขียนโปรแกรมแบบ Block based
              coding ต่อยอดเข้าสู่การเขียนโปรแกรมเข้าไปในสมองกลฝังตัว หรือ
              Microcontroller
              ซึ่งเป็นสมองกลที่เราใช้ในการควบคุมสิ่งประดิษฐ์ทุกอย่าง
            </div>
            <div>
              เด็กๆ จะได้ลองฝึกการใช้ เซ็นเซอร์ประกอบกับการเขียนโปรแกรม
              การตั้งค่าตัวแปร การเก็บข้อมูล
              ผ่านการออกแบบสิ่งที่ประดิษฐ์อย่างง่ายดายที่ใช่ปุ่มกดรับสัมผัสเพื่อส่งข้อมูลเข้าไปในระบบสมองกล
              โดยมีกิจกรรมเสริมพิเศษ เป็นพื้นฐานด้านไฟฟ้าที่เด็ก ๆ
              จะได้ลงมือทำด้วยตัวเองทุกขั้นตอน
              เป็นการปูพื้นฐานที่จะนำไปสู่การสร้างสิ่งประดิษฐ์ที่หลากหลายในอนาคต
            </div>
            <div className='col-12 col-lg-10 mx-auto'>
              <div
                className='w-100'
                style={{
                  paddingBottom: '60%',
                  background: 'url(/upload/AboutHeroImage.png)',
                  backgroundSize: 'cover',
                }}
              ></div>
              {/* <img className='w-100' src='' alt='heroimage' /> */}
            </div>
          </div>
          <h1 className='text-xxl f-eng fw-md d-flex flex-column flex-lg-row justify-content-center'>
            <span>Why</span>
            <span className='mx-3 f-brand fw-bolder letter-space-20p text-maincolor-1'>
              roborobot
            </span>
          </h1>
          <p className='text-md'>ทำไมถึงต้องเรียนกับโลโบโลบอท ?</p>
          <div className='px-lg-5 mt-5 d-flex justify-content-around flex-wrap'>
            <div className='col-12 col-md-5 col-xl-4'>
              <div className='col-10 mx-auto'>
                <div
                  style={{
                    background: 'url(/upload/ICON1.svg)',
                    ...cardstyle,
                  }}
                ></div>
              </div>
              <h2 className='text-md f-eng'>Block Based Coding</h2>
              <p className='text-normal'>
                การเขียนโปรแกรมแบบบล็อกที่
                <br />
                เหมาะสำหรับผู้เริ่มต้นและเด็กๆ ทุกคน
              </p>
            </div>
            <div className='col-12 col-md-5 col-xl-4'>
              <div className='col-10 mx-auto'>
                <div
                  style={{
                    background: 'url(/upload/ICON2.svg)',
                    ...cardstyle,
                  }}
                ></div>
              </div>
              <h2 className='text-md'>เข้าถึงได้ทุกที่ สะดวก ประหยัด</h2>
              <p className='text-normal'>
                ทุกคนสามารถเข้าถึงการเรียนรู้ได้ทุกที่
                <br />
                ผ่านออนไลน์ ในราคาที่ประหยัด คุ้มค่า
              </p>
            </div>
          </div>
          <div className='px-lg-5 py-5 d-flex justify-content-around flex-wrap'>
            <div className='col-12 col-md-5 col-xl-4'>
              <div className='col-10 mx-auto'>
                <div
                  style={{
                    background: 'url(/upload/ICON3.svg)',
                    ...cardstyle,
                  }}
                ></div>
              </div>
              <h2 className='text-md f-eng'>Student Centric</h2>
              <p className='text-normal'>
                การเรียนรู้โดยเน้นผู้เรียนเป็นสำคัญ
                <br />
                ให้ผู้เรียนได้มีส่วนร่วมลงมือทำด้วยตนเอง
              </p>
            </div>
            <div className='col-12 col-md-5 col-xl-4'>
              <div className='col-10 mx-auto'>
                <div
                  style={{
                    background: 'url(/upload/ICON4.svg)',
                    ...cardstyle,
                  }}
                ></div>
              </div>
              <h2 className='text-md'>เนื้อหาบทเรียนทันสมัย</h2>
              <p className='text-normal'>
                ก้าวทันโลกด้วยความมั่นใจและ
                <br />
                ปลอดภัยต่อบุตรหลานของท่าน
              </p>
            </div>
          </div>
        </div>
      </div>
    </TransitionPage>
  );
}

export default About;
