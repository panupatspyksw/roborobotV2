import data from '../data/Reviews.json';
import ReviewCard from './ReviewCard';
function ReviewCardList() {
  return (
    <div
      className='container-fluid justify-content-center-lg hidescroll px-5 pt-3 pb-5 mx-auto d-flex gap-5 overflow-auto'
      style={{ overflow: 'visible' }}
    >
      {data.map((review, index) => (
        <ReviewCard props={review} key={index} />
      ))}
    </div>
  );
}

export default ReviewCardList;
