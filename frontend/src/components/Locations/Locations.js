import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import { getLocations } from '../../store/location';    
import locationsHeaderImg from '../../images/locations-header.jpg';

import './Locations.css';

function Locations(state) {
    const dispatch = useDispatch();
    const locations = useSelector((state) => Object.values(state.location));
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch]);

    // const loc = useSelector((state) => {
    //     return state.loc;
    // })

    // const locObj = Object.values(loc);



    if(!locations) {
        return (<div> </div> );
    }
    // TODO: check if user logged in *********************************


    return (
            <>
            <div key={locations}>
                
                <div className="image"
                style={{backgroundImage: `url(${locationsHeaderImg})`}} 
                alt='divers' 
                >
                </div>
            <div>
                <h1>Dive Site Locations</h1>
                {locations?.map(({id, title}) => (
                    <NavLink key={id} className='location' to={`/location/${id}`}>
                        <p className='title'>{title}</p>
                    </NavLink>
                ))}
            </div>
            </div>
        </>
    );
};





export default Locations;

