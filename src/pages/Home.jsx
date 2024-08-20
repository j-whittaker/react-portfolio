import ContactWidget from "../components/ContactWidget";

function HomePage() {
    return (
      <>
        <div className="main-content home">
          <div className="content-wrapper two-col">
            <div className="image-wrapper">
              <img src="/ProfilePicture.jpg" className="profile-img" alt="Profile Picture"></img>
            </div>
            <div className="objective-wrapper">
                <strong>OBJECTIVE</strong> 
                <span>Looking to join a company with a customer focused, collaborative environment, 
                  where I can utilize my problem solving skills to build and maintain excellent software that surpasses our 
                  clients expectations.
                </span>
            </div>
          </div>
          <ContactWidget />
        </div>
      </>
      );
  }

  export default HomePage