import React, { useCallback, useEffect, useState } from 'react';
import useProperty from '../hooks/UseProperty';
import '../styles/components/TestimonialSlider.css';
import SideArrow from '../assets/side-arrow.svg';

function SlideBtn({setActiveSlide, active }) {
  return <span onClick={setActiveSlide} className={`slide-btn ${active}`}></span>;
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
export function buildSlide(quote, author, active) {
  return <TestimonialSlide key={author} quote={quote} author={author} active={active}/>
}

export default function TestimonialSlider() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [intervalId, setIntervalId] = useProperty();

  const prevSlide = useCallback(() => {
    if(intervalId) clearInterval(intervalId);
    setActiveSlideIdx(prevActiveSlideIdx => ((prevActiveSlideIdx - 1 >= 0) ? prevActiveSlideIdx - 1 : 2));
  }, [intervalId]);

  const nextSlide = useCallback(() => {
    if(intervalId) clearInterval(intervalId);
    setActiveSlideIdx(prevActiveSlideIdx => (prevActiveSlideIdx + 1) % 3);
  }, [intervalId]);

  useEffect(() => {

    const intervalId = setInterval(() => {
      nextSlide();
    }, 2750);

    setIntervalId(intervalId);

    return () => clearInterval(intervalId);

  }, []);

  

  function setActiveSlideClick(idx, intervalId) {
    if(intervalId) clearInterval(intervalId);
    setActiveSlideIdx(idx);
  }

  const slides = [], slideBtns = [];
    
  slides.push(buildSlide("Jake was an exceptional team member, recognized for his extensive knowledge, patience, and proficiency in teaching. He was my primary contact for assistance with areas outside my expertise. Jake consistently pursued improvements and sought more efficient methods. I thoroughly enjoyed working with him and look forward to seeing his future accomplishments!", 'Kim Pollard, Senior Frontend Engineer at Aeroflow Health', activeSlideIdx == 0));
  slideBtns.push(<SlideBtn setActiveSlide={() => {setActiveSlideClick(0, intervalId)}} active={`${(0 == activeSlideIdx) ? 'active' : ''}`} key={0} />)
  slides.push(buildSlide("Jake is one of the best developers I have worked with. A great frontend and backend developer who can be trusted to handle any task given to him. " + 
   "Always architected the best solutions to whatever requirements the client had. He's a great asset for any company.", 'Patrick Clouse, Principal Software Engineer at Kadro Solutions', activeSlideIdx == 1));
  slideBtns.push(<SlideBtn setActiveSlide={() => {setActiveSlideClick(1, intervalId)}} active={(1 == activeSlideIdx) ? 'active' : ''} key={1} />)
  slides.push(buildSlide("I had the pleasure of working with Jake on several projects. He is an outstanding software engineer who always delivers high-quality code no matter how complicated the task. Not only does he approach every challenge with a solutions-oriented mindset, but he's also a joy to collaborate with, always bringing a positive and engaging spirit to the team.", 'Will James, Senior Frontend Engineer', activeSlideIdx == 2));
  slideBtns.push(<SlideBtn setActiveSlide={() => {setActiveSlideClick(2, intervalId)}} active={(2 == activeSlideIdx) ? 'active' : ''} key={2} />)
  return (
      <>
        <div className='testimonial-slider'>
          <button onClick={prevSlide} className='testimonial-arrow prev'><img src={SideArrow}></img></button>
          <div className='slides'>{slides}<div className='slide-btns'>{slideBtns}</div></div>
          <button onClick={nextSlide} className='testimonial-arrow next'><img src={SideArrow}></img></button>
        </div>
      </>
    );
}