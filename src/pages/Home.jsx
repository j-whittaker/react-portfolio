import ContactWidget from "../components/ContactWidget";

export default function HomePage() {
    return (
        <div className="main-content home">
          <div className="content-wrapper two-col">
            <div className="image-wrapper">
              <img src="/ProfilePicture.jpg" className="profile-img" alt="Profile Picture"></img>
            </div>
            <div className="objective-wrapper">
                <strong>OBJECTIVE</strong> 
                <span>I'm looking to apply my problem solving skills to build and maintain excellent software that exceeds expectations. 
                  I have fullstack experience and a passion for building software that addresses real world problems.
                </span>
            </div>
          </div>
          <ContactWidget />
        </div>
      );
  }