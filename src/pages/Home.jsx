import ContactWidget from "../components/ContactWidget";
import Title from '../components/Title'
import { HOME_PAGE } from "../constants/PageConstants";
import useMediaCheck from '../hooks/UseMediaCheck'
import '../styles/pages/Home.css'

export default function HomePage() {
  const showTitle = useMediaCheck('(max-width: 768px)');

  return (
        <div className="main-content home">
          {showTitle && <Title/>} 
          <h2>{HOME_PAGE}</h2>
          <div className="content-wrapper two-col">
          <div className="lg-col">
                <span className="objective">I'm looking to apply my problem solving skills to build and maintain excellent software that exceeds expectations. 
                  I have full stack experience and a passion for building solutions that addresses real world problems.
                </span>
                <ContactWidget />
            </div>
            <div className="image-wrapper sm-col">
              <img src="/ProfilePicture.png" className="profile-img" alt="Profile Picture"></img>
            </div>
          </div>
        </div>
      );
  }