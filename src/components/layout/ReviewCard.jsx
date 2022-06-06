function ReviewCard({ props }) {
  const { paragraph, propic, name, course, username, image } = props;
  return (
    <div
      className=' shadow p-4 p-lg-5 col-5 d-flex flex-column gap-3'
      style={{ borderRadius: '1.4rem', maxWidth: '400px', minWidth: '300px' }}
    >
      <div className='d-flex flex-column flex-lg-row gap-4'>
        <img src={propic} style={{ width: '60px', height: '60px' }} alt='' />
        <div className='d-flex flex-column gap-1'>
          <div className='lh-1 fw-bold text-normal'>คุณ{name}</div>
          <div className='lh-1 text-normal'>จากคอร์ส{course}</div>
          <div className='lh-1 text-normal opacity-50'>@{username}</div>
        </div>
      </div>
      <p className='text-normal m-0'>{paragraph}</p>
      <div className='w-100 overflow-hidden rounded-3'>
        <div
          className='bg-dark'
          style={{
            background: `url(${image})`,
            backgroundSize: 'cover',
            paddingBottom: '70%',
          }}
        ></div>
      </div>
    </div>
  );
}

ReviewCard.defaultProps = {
  props: {
    image: '/upload/ReviewImage1.jpg',
    propic: '/upload/User.jpg',
    name: 'แอนนา คุณแม่น้องมินนี่ ',
    course: 'Coding Foundation',
    username: 'Example',
    paragraph:
      'น้องสนุกกับการเรียนคอร์สจาก ROBOROBOT มากค่ะ โดยเฉพาะในตอนที่ได้เรียน coding ทำให้หุ่นยนต์เคลื่อนไหว นอกจากนี้ยังได้หุ่นยุนต์กลับบ้านหลังเรียนมา ฝึกทำต่อที่บ้าน คุณแม่กับน้องแฮปปี้มากค่า ❤️❤️❤️',
  },
};

export default ReviewCard;
