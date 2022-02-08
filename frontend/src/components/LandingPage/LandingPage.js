
import lpHeader from '../../images/header-image.jpg';
import './LandingPage.css';


const LandingPage = () => {

    return (
        <>
        <div className="lp-main-container">
            <div className="image"
                style={{backgroundImage: `url(${lpHeader})`}} 
                alt='divers' 
            >
            </div>
           <div className="page-content">
               <p>hello</p>
           </div>
        </div>
        </>
    );
};

export default LandingPage;
