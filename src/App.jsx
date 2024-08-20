import { useState } from 'react'
import HomePage from './pages/Home'
import ExperiencePage from './pages/Experience'
import TestimonialPage from './pages/Testimonials'
import Toolbar from './components/Toolbar'
import { HOME_PAGE, TESTIMONIALS_PAGE, EXPERIENCE_PAGE } from './constants/PageConstants'
import './App.css'


function ContactPage() {
  return (
    <>
      <div className="main-content contact">
        <div className="image-wrapper">
          <img src="/vite.svg" className="logo" alt="Vite logo"></img>
        </div>
      </div>
    </>
    );
}

function getSectionHash() {
  let hash = window.location.hash.replace('#', '');
  if(![HOME_PAGE, EXPERIENCE_PAGE,TESTIMONIALS_PAGE].includes(hash)) {
    hash = ''; 
  }
  return hash;
}

function setSectionHash(hash) {
  if([HOME_PAGE, EXPERIENCE_PAGE,TESTIMONIALS_PAGE].includes(hash)) {
    window.location.hash = hash; 
  }
}

function App() {
  const currentSection = getSectionHash();
  const [activeSection, setActiveSection] = useState(currentSection !== '' ? currentSection : 'home');
  const activePage = getActivePage(activeSection);
  setSectionHash(activeSection);

  const site =  (
    <>
      <div className="page-header">
        <h1 className='title'>Jacob Whittaker: Senior Software Engineer</h1>
        <Toolbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </div>
      {activePage}
    </>
  );

  return site;
}

function getActivePage(activeSection) {
  if(activeSection == HOME_PAGE) return <HomePage/>;
  if(activeSection == EXPERIENCE_PAGE) return <ExperiencePage/>;
  if(activeSection == TESTIMONIALS_PAGE) return <TestimonialPage/>;
}

export default App
