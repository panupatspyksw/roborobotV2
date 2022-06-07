import { useContext, useEffect, useRef } from 'react';
import ScrollContext from '../components/context/ScrollContext';
import SVGAnim from '../components/layout/SVGAnim';
import TransitionPage from '../components/layout/TransitionPage';
import KidVector from '../assets/SVG/KidVector';
import LoadingCircle from '../assets/SVG/LoadingCircle';
import RobotVector from '../assets/SVG/RobotVector';
import PageTransitionContext from '../components/context/PageTransitionContext';
import gsap from 'gsap';
import SVGCard from '../components/layout/SVGCard';
import CODINGFOUNDATION from '../assets/SVG/CODINGFOUNDATION';
import CODINGINTERMEDIATE from '../assets/SVG/CODINGINTERMEDIATE';
import CODINGROBOTIC from '../assets/SVG/CODINGROBOTIC';
import ReviewCardList from '../components/layout/ReviewCardList';
import SendMail from '../assets/SVG/SendMail';
import Curve from '../assets/SVG/Curve';

function Home() {
  const { scrollRef } = useContext(ScrollContext);
  const { tl } = useContext(PageTransitionContext);
  const SlideTimeline = useRef([gsap.timeline(), gsap.timeline()]);
  const ContentAnim = useRef([[], []]);
  const SVGAnimRef = useRef([]);
  const LoadingCircleRef = useRef();
  const timelineFrameNumber = useRef(1);
  const loadings = useRef([]);

  useEffect(() => {
    var LoadingCircleReftl = gsap.timeline();
    LoadingCircleReftl.from(LoadingCircleRef.current, {
      duration: 2,
      opacity: 0,
    });
    LoadingCircleReftl.pause();

    loadings.current.map((v, i) => {
      var target = i < ContentAnim.current.length - 1 ? i + 1 : 0;
      console.log('target=>', target);
      console.log(SVGAnimRef.current[target], ...ContentAnim.current[target]);
      if (i === 0) {
        SlideTimeline.current[i].fromTo(
          [SVGAnimRef.current[i + 1], ...ContentAnim.current[i + 1]],
          {
            duration: 0.3,
            opacity: 1,
          },
          {
            duration: 0.3,
            opacity: 0,
          }
        );
      } else {
        SlideTimeline.current[i].to(
          [SVGAnimRef.current[target], ...ContentAnim.current[target]],
          {
            duration: 0.3,
            opacity: 0,
          }
        );
      }

      SlideTimeline.current[i].from(SVGAnimRef.current[i], {
        duration: 2,
        opacity: 0,
      });
      SlideTimeline.current[i].from(
        ContentAnim.current[i],
        {
          duration: 2,
          opacity: 0,
          stagger: 0.075,
        },
        '-=2'
      );

      SlideTimeline.current[i].to(
        loadings.current[i],
        {
          onStart: () => {
            loadings.current[i].style.opacity = 1;
          },
          duration: 10,
          strokeDashoffset: 165,
          onComplete: () => {
            loadings.current[i].style.opacity = 0;
            loadings.current[i].style.strokeDashoffset = 326.726;

            if (timelineFrameNumber.current < ContentAnim.current.length) {
              timelineFrameNumber.current += 1;
            } else {
              timelineFrameNumber.current = 1;
            }

            console.log(timelineFrameNumber.current - 1);
            SlideTimeline.current[timelineFrameNumber.current - 1].play(0);
          },
        },
        '-=2'
      );
      // SlideTimeline.current[i].to(
      //   [SVGAnimRef.current[i], ...ContentAnim.current[i]],
      //   {
      //     duration: 0.3,
      //     opacity: 0,
      //   },
      //   '-=.3'
      // );
      SlideTimeline.current[i].pause();
      return null;
    });

    tl.from(
      scrollRef.current,
      {
        duration: 0.1,
        onComplete: () => {
          SlideTimeline.current[timelineFrameNumber.current - 1].play(0.3);
          LoadingCircleReftl.play();
        },
      },
      '-=1'
    );
    // eslint-disable-next-line
  }, []);

  return (
    <TransitionPage>
      <div ref={scrollRef} style={{ minHeight: '100%' }}>
        <div className='position-relative main-bg-color min-vh-100 min-vw-100 d-flex align-items-center overflow-hidden'>
          <div className='h-100 container mx-auto d-flex flex-column-reverse gap-0 gap-md-5 gap-lg-0 flex-lg-row justify-content-between position-relative'>
            <div className='position-relative col col-lg-4 text-white px-4 px-md-5 pe-lg-0 ps-lg-5 justify-content-center d-flex flex-column '>
              <div className='ps-lg-5 d-flex flex-column  position-relative'>
                {/* content 1 */}
                <div className=''>
                  <h1 className='text-xl d-flex flex-column flex-md-row flex-lg-column gap-md-3 gap-lg-0'>
                    <span ref={(el) => (ContentAnim.current[0][0] = el)}>
                      คอร์สเรียน
                    </span>
                    <span
                      ref={(el) => (ContentAnim.current[0][1] = el)}
                      className='f-eng'
                    >
                      CODING
                    </span>
                    <span ref={(el) => (ContentAnim.current[0][2] = el)}>
                      สำหรับเด็ก
                    </span>
                  </h1>
                  <p
                    className='text-normal d-flex flex-column flex-md-row flex-lg-column'
                    ref={(el) => (ContentAnim.current[0][3] = el)}
                  >
                    <span>สถาบันสอนการเขียน Coding</span>
                    <span> เพื่อพัฒนาทักษะเด็ก</span>
                    <span>ให้พร้อมเติบโตในศตวรรษที่ 21</span>
                  </p>
                  <button
                    className=' w-fit btn px-5 py-3 text-normal'
                    ref={(el) => (ContentAnim.current[0][4] = el)}
                  >
                    เรียนรู้เพิ่มเติม
                  </button>
                </div>
                {/* content 2 */}
                <div className='position-absolute'>
                  <h1 className='text-xl d-flex flex-column flex-md-row flex-lg-column gap-md-3 gap-lg-0'>
                    <span ref={(el) => (ContentAnim.current[1][0] = el)}>
                      เรียนกับ
                    </span>
                    <span
                      ref={(el) => (ContentAnim.current[1][1] = el)}
                      className='f-eng'
                    >
                      roborobot
                    </span>
                  </h1>
                  <p
                    className='text-normal d-flex flex-column flex-md-row flex-lg-column'
                    ref={(el) => (ContentAnim.current[1][2] = el)}
                  >
                    <span>เห็นการพัฒนาอย่างชัดเจน</span>
                    <span>เรียนสนุก เพลิดเพลิน กับบทเรียน</span>
                    <span>ราคาเข้าถึงจับต้องได้</span>
                  </p>
                  <button
                    className='w-fit btn px-5 py-3 text-normal'
                    ref={(el) => (ContentAnim.current[1][3] = el)}
                  >
                    ซื้อคอร์ส
                  </button>
                </div>
                <div
                  className='loading position-absolute bottom-0 d-flex flex-column gap-3 flex-md-row pt-3 end-0-sm-only translate-md-y-100 end-lg-0 pt-md-5'
                  ref={LoadingCircleRef}
                  // style={{ transform: 'translateY(100%)' }}
                >
                  <LoadingCircle childref={loadings} />
                  <LoadingCircle childref={loadings} />
                </div>
              </div>
            </div>
            <div className='w-100-se-only w-140-sm-only col-lg-8 pt-3 p-lg-5 position-relative'>
              <div
                className='w-100 '
                ref={(el) => (SVGAnimRef.current[0] = el)}
              >
                <SVGAnim SVG={<KidVector />} />
              </div>
              <div
                className='position-absolute w-100 '
                ref={(el) => (SVGAnimRef.current[1] = el)}
                style={{ top: '6%', left: '3.7%' }}
              >
                <SVGAnim SVG={<RobotVector />} />
              </div>
            </div>
          </div>
        </div>
        <Curve />
        <div className='bg-white min-vw-100 p-5 pt-0 position-relative'>
          <div className='pt-5 text-center'>
            <h3 className='text-md'>หลักสูตรหลากหลายรูปแบบจาก</h3>
            <h2 className='text-xl f-brand fw-bold text-maincolor-1'>
              roborobot
            </h2>
            <p className='text-normal'>ครบทุกรูปแบบการเรียน Coding</p>
          </div>
          <div className='container px-lg-5 py-5 d-flex flex-column flex-lg-row justify-content-around align-items-center gap-5'>
            <SVGCard
              className={'col-12 col-md-8 col-lg-30per col-xl-3'}
              SVG={CODINGFOUNDATION}
              title='CODING FOUNDATION'
              paragraph='สอน coding สำหรับการฝึกตรรกะ /nโดยใช้ code studio /nฝึกสร้าง animation'
            />
            <SVGCard
              className={'col-12 col-md-8 col-lg-30per col-xl-3'}
              SVG={CODINGINTERMEDIATE}
              title='CODING INTERMEDIATE'
              paragraph='สอน coding สำหรับฝึกตรรกะ /nโดยใช้ GoGo Board /nรู้จักการเริ่มใช้สมองกลฝังตัว'
            />
            <SVGCard
              className={'col-12 col-md-8 col-lg-30per col-xl-3'}
              SVG={CODINGROBOTIC}
              title='CODING ROBOTIC'
              paragraph='สอน coding สำหรับฝึกตรรกะ /nโดยใช้ GoGo Board /nโดยมี
                  Design Thinking'
            />
          </div>
        </div>
        <ReviewCardList />
        <div className='container py-5 d-flex flex-column-reverse flex-lg-row align-items-center'>
          <div className='col-12 col-lg-6 d-block p-5'>
            <SendMail />
          </div>
          <div className='col-12 col-lg-6 px-5'>
            <form>
              <h2 className='fw-bold mb-3'>ติดต่อเรา</h2>
              <div className='mb-3'>
                <label className='form-label w-100'>ชื่อ - สกุล</label>
                <input type='text' className='form-control' />
              </div>
              <div className='mb-3'>
                <label className='form-label w-100'>อีเมล</label>
                <input type='email' className='form-control' />
              </div>
              <div className='mb-3'>
                <label className='form-label w-100'>เบอร์โทรศัพท์</label>
                <input type='text' className='form-control' />
              </div>
              <button className='w-fit btn px-5 mt-3 py-3 text-normal'>
                ซื้อคอร์ส
              </button>
            </form>
          </div>
        </div>
      </div>
    </TransitionPage>
  );
}

export default Home;
