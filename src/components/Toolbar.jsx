import { HOME_PAGE, TESTIMONIALS_PAGE, EXPERIENCE_PAGE } from '../constants/PageConstants'


function NavLink({section, setActiveSection, isActive}) {
    return <button className={`nav-btn ${isActive ? 'active' : ''}` } onClick={() => {setActiveSection(section)}} name={section} section={section}>{section}</button>;
}

function Toolbar({activeSection, setActiveSection}) {
       
    return (
      <> 
        <div className="toolbar">
          <NavLink section={HOME_PAGE} isActive={HOME_PAGE == activeSection} setActiveSection={setActiveSection} />
          <NavLink section={EXPERIENCE_PAGE} isActive={EXPERIENCE_PAGE == activeSection} setActiveSection={setActiveSection} />
          <NavLink section={TESTIMONIALS_PAGE} isActive={TESTIMONIALS_PAGE == activeSection} setActiveSection={setActiveSection} />
        </div>
      </>
    )
}

export default Toolbar