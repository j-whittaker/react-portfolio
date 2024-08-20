import ArrowIcon from '../assets/arrow.svg';

function CollabsibleCareerSection({role, location, content}) {
    function toggleCollpase() {
        event.target.parentElement.parentElement.classList.toggle('collpased');
    }

    function Arrow() {
        return <img onClick={toggleCollpase} src={ArrowIcon} className='xp-section-toggle'/> ;
    }

    return (
        <>
            <div  className='career-section-container'>
                 {/* Icon by icon king1 on freeicons.io https://freeicons.io/undefined/arrow-arrow%20down-down-drop-stroke%20arrow-icon-706 */}
                <h3 className="job-title-section">{role} at {location} <Arrow /></h3>
                <div className="xp-wrapper">{content}</div>
            </div>
        </>
    );
  }
  

function ExperiencePage() {
    const experience = [];

    const kadroContent = 
        (
            <>
                <ul className="work-xp">
                    <li key="1">Integrated with a major Web-To-Print software library to provide customers the ability to order custom printed paper products.</li>
                    <li key="2">Improved user experience and SEO for our clients website, and improved page speed insights by 25 points, by utilizing lazy-load/async techniques and reducing Cumulative Layout Shift </li>
                    <li key="3">Integrated an E-Commerce backend with review analytics to allow for custom rendering of the review-to-product relationship</li>
                    <li key="4">Documented frequently used code and performance enhancing changes for other developers to swiftly implement</li>
                    <li key="5">Customized a backend order import integration to be compatible with JDE</li>
                    <li key="6">Provided critical bug fixes and implementation requests to a Magento site, leading to a tripling of holiday revenue</li>
                    <li key="7">Mentored and provided training in backend and frontend development for co-ops and new hires</li>
                    <li key="8">Developed in AlpineJS and TailwindCSS to build a responsive and performant frontend experience</li>
                    <li key="9">Utilized JavaScript, HTML and LESS to implement frontend functionality that enhanced customer interaction with client websites </li>
                    <li key="10">Balanced priorities between developing functionality for new projects and providing support for existing customers </li>
                    <li key="11">Built Docker environments for other developers to use for local development, reducing environment related blockers</li>
                    <li key="12">Deployed Project applications to Production and Staging environments via Magento Cloud on AWS</li>
                </ul>
            </>
        );
    experience.push(<CollabsibleCareerSection role="Senior Software Engineer" location="Kadro Solutions Inc." content={kadroContent} />);
    
    const bcbsncContent = 
        (
            <>
                <ul className="work-xp">
                    <li>Worked with the API Connect tool </li>
                    <li>Worked with Postman, and SOAP UI to Test REST/SOAP Services </li>
                    <li>Managed, Tested, and Documented Company-wide Services </li>
                    <li>Prepared and Presented demo of software tool to a team of 20 People </li>
                </ul>
            </>
        );
    experience.push(<CollabsibleCareerSection role="IT Service Delivery Intern" location="Blue Cross and Blue Shield of NC" content={bcbsncContent} />);
    
    const simpleAuctionSiteContent = 
        (
            <>
                <ul className="work-xp">
                    <li>Solved software bugs using logic and software testing </li>
                    <li>Coded fullstack enhancements and modifications for online software in C# </li>
                    <li>Database management and manipulation through MySQL server </li>
                </ul>
            </>
        );

    experience.push(<CollabsibleCareerSection role="Programming Intern" location="Simple Auction Site" content={simpleAuctionSiteContent} />);
    

    return (
      <>
        <div className="main-content home">
            {experience}
        </div>
      </>
      );
  }

  export default ExperiencePage