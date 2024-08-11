import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Review.css'; // Import the custom CSS
import ReviewCart from './ReviewCart';
import pic1 from './../../../assets/review 1.png'
import pic2 from './../../../assets/review 2.png'

const Review = () => {
    return (
        <div className="slider-container">
      <AwesomeSlider>
        <div className="slide">
            <div className=''><img className=' h-40 w-[440px] rounded-lg shadow-2xl' src={pic1} alt="" /></div>
        </div>
        <div className="slide"><img className='h-40 w-[440px]' src={pic2} alt="" /></div>
        <div className="slide"><img className='h-40 w-[440px]' src={pic1} alt="" /></div>
      </AwesomeSlider>
    </div>
    );
};

export default Review;