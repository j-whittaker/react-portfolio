import React, { Component } from 'react';

function SlideBtn({idx, activeIdx, setActiveSlide }) {
  return <span onClick={setActiveSlide} className={`slide-btn ${(activeIdx == idx) ? 'active' : ''}`}></span>;
}

function TestimonialSlide({quote, author, active }) {
  return (<>
    <div className={`testimonial-slide ${active ? 'active' : ''}`}>
      <div className='quote'>{`"${quote}"`}</div>
      <div className='author'>{`-${author}`}</div> 
    </div>
  </>);
}

// added for code neatness, when passing in large string bodies
function buildSlide(quote, author, active) {
  return <TestimonialSlide quote={quote} author={author} active={active}/>
}

class TestimonialSlider extends Component {

  constructor(props) {
    super(props);
    this.intervalId;
    this.state = {
      activeSlideIdx: 0
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const nextSlide = (this.state.activeSlideIdx + 1) % 3;
      this.setActiveSlideIdx(nextSlide);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setActiveSlideIdx(idx) {
    this.setState(prevState => ({
        activeSlideIdx: idx
    }));
  }

  setActiveSlideClick(idx, intervalId) {
    if(intervalId) clearInterval(intervalId);
    this.setActiveSlideIdx(idx);
  }

  render() {
  
    const testimonialSlider = [], slides = [], slideBtns = [];
    
    slides.push(buildSlide("Jake was an exceptional team member, recognized for his extensive knowledge, patience, and proficiency in teaching. He was my primary contact for assistance with areas outside my expertise. Jake consistently pursued improvements and sought more efficient methods. I thoroughly enjoyed working with him and look forward to seeing his future accomplishments!", 'Kim Pollard, Senior Frontend Engineer at Aeroflow Health', this.state.activeSlideIdx == 0));
    slideBtns.push(<SlideBtn setActiveSlide={() => {this.setActiveSlideClick(0, this.intervalId).bind(this)}} idx={0} activeIdx={this.state.activeSlideIdx} />)
    slides.push(buildSlide("Jake is one of the best developers I have worked with. A great frontend and backend developer who can be trusted to handle any task given to him." + 
     "Always architected the best solutions to whatever requirements the client had. He's a great asset for any company.", 'Patrick Clouse, Principal Software Engineer at Kadro Solutions', this.state.activeSlideIdx == 1));
    slideBtns.push(<SlideBtn setActiveSlide={() => {this.setActiveSlideClick(1, this.intervalId).bind(this)}} idx={1} activeIdx={this.state.activeSlideIdx}/>)
    slides.push(buildSlide("I had the pleasure of working with Jake on several projects. He is an outstanding software engineer who always delivers high-quality code no matter how complicated the task. Not only does he approach every challenge with a solutions-oriented mindset, but he's also a joy to collaborate with, always bringing a positive and engaging spirit to the team.", 'Will James, Senior Frontend Engineer', this.state.activeSlideIdx == 2));
    slideBtns.push(<SlideBtn setActiveSlide={() => {this.setActiveSlideClick(2, this.intervalId).bind(this)}} idx={2} activeIdx={this.state.activeSlideIdx}/>)
    testimonialSlider.push((<><div className='testimonial-slider'><div className='slides'>{slides}</div><div className='slide-btns'>{slideBtns}</div></div></>));
  
    return testimonialSlider;
  }
}



  export default TestimonialSlider