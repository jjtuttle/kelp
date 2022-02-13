import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";


import lpHeader from '../../images/header-image.jpg';
import './LandingPage.css';
import logoColor from '../../images/kelp-logo-color.png';
import { getLocations } from '../../store/location';
import Search from '../Search/Search';

const LandingPage = (props) => {
    const [location, setLocation] = useState(props.location || '');

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
            <div className="search-container">
                <Search />
            </div>
            </div>
        <div className="page-content">
            <div className="lp-search-container">
                <div className="lp-search-bar">

                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default LandingPage;
