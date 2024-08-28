import TestimonialSlider from '../components/TestimonialSlider'
import useMediaCheck from '../hooks/UseMediaCheck'
import Title from '../components/Title'

export default function Testimonials() {
  const showTitle = useMediaCheck('(max-width: 768px)');  
  
  return (
        <div className="main-content testimonial">
          {showTitle && <Title/>} 
          <h2>Testimonials</h2>
          <div className='content-wrapper'> 
            <TestimonialSlider />
          </div>
        </div>
      );
  }