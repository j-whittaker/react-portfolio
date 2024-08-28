import { useState } from 'react'
import HomePage from './pages/Home'
import ExperiencePage from './pages/Experience'
import TestimonialPage from './pages/Testimonials'
import Toolbar from './components/Toolbar'
import Title from './components/Title'
import useMediaCheck from './hooks/UseMediaCheck'
import { HOME_PAGE, TESTIMONIALS_PAGE, EXPERIENCE_PAGE, PAGE_LIST } from './constants/PageConstants'
import './styles/App.css'
import './styles/Header.css'


function getSectionHash() {
  let hash = decodeURIComponent(window.location.hash.replace('#', ''));
  if(!PAGE_LIST.includes(hash)) {
    hash = ''; 
  }
  return hash;
}

function setSectionHash(hash) {
  if(PAGE_LIST.includes(hash)) {
    window.location.hash = hash; 
  }
}

function App() {
  const currentSection = getSectionHash();
  const [activeSection, setActiveSection] = useState(currentSection !== '' ? currentSection : HOME_PAGE);
  const activePage = getActivePage(activeSection);
  setSectionHash(activeSection);

  const showTitle = useMediaCheck('(min-width: 769px)');
  

  return (
    <>
      <div className="page-header">
        {showTitle && <Title/>} 
        <Toolbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </div>
      {activePage}
    </>
  );

}

function getActivePage(activeSection) {
  if(activeSection == HOME_PAGE) return <HomePage />;
  if(activeSection == EXPERIENCE_PAGE) return <ExperiencePage/>;
  if(activeSection == TESTIMONIALS_PAGE) return <TestimonialPage />;
}

export default App
