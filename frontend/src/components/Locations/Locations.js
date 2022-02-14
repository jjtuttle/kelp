import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import { getLocations } from '../../store/location';
import locationsHeaderImg from '../../images/locations-header.jpg';

import './Locations.css';


const Locations = () => {

    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    const locations = useSelector((state) => Object.values(state.location));


    // locations.map((loc) => {
    //     console.log('loc map ......', loc.Images[0].url);
    // })


    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch]);

    // locations.map((loc) => {
    //     return console.log('LOCATIONSZzzzzzzzzzzzzzzz',loc.User);
    //     })

    // TODO: uncomment below
    // if(!locations) {
    //     return (<div> </div> );
    // }

    // TODO: check if user logged in *********************************
    // if( !user || !user.id) return null;

    return (
        <>
            <div>
                {/* 
                <div className="image"
                style={{backgroundImage: `url(${locationsHeaderImg})`}} 
                alt='divers' 
                >
                </div> */}
                <div className='wrapper'>
                <div id='title'><h2 >Dive Site Locations</h2></div>
                    <div id="images-container-locs">

                        <ul id='loc-image-ul'>
                            {locations?.map((loc) => (
                                <div key={loc?.id}  id='single-image-container'>
                                    <NavLink id='location-locs' to={`/location/${loc?.id}`}>
                                        <li id='li-detail'><div className='title-locs'>{loc?.title}</div>
                                        <div id='user-locs'>
                                            Posted by: {loc?.User.username}
                                        </div>
                                            <div><img id='images-locs' src={loc.Images[0].url} alt="beach" /></div>
                                            <div id='body-locs'>
                                                
                                            </div>
                                        </li>

                                    </NavLink>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};





export default Locations;

