import { useEffect } from 'react';
import { useDispatch } from "react-redux";


import lpHeader from '../../images/header-image.jpg';
import './LandingPage.css';
import logoColor from '../../images/kelp-logo-color.png';
import { getLocations } from '../../store/location';

const LandingPage = () => {
    const dispatch = useDispatch();
    

    // Load All Locations
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);


    return (
        <>
        <div className="lp-main-container">
            <div className="image"
                style={{backgroundImage: `url(${lpHeader})`}} 
                alt='divers' 
            >
            <div className="overlay">
                <div className="header-logo-text">
                    <h1><a className='a-link-logo-home' href='/'>kelp</a></h1>
                </div>
                <div className="logo-image">
                    <a className='a-link-logo-home' href='/'><img src={logoColor} alt='logo color' /></a>
                </div>
            </div>
            </div>
            
           <div className="page-content">
               <p style={{color:'red', fontSize:'20px'}}>*** hello there, card content down here ***</p>
           </div>
        </div>
        </>
    );
};

export default LandingPage;
